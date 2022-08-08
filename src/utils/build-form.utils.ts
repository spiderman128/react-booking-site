import * as Yup from 'yup';

export const buildFormInitialData = (formData) => {
  if (!formData) {
    return null;
  }

  const mergeFields = (field) => {
    if (field.type === 'object' || field.type === 'array') {
      return Object.entries(field.fields).reduce((finalField, [fieldKey, fieldValue]: any) => {
        if (fieldValue.type === 'object' || fieldValue.type === 'array') {
          const mergedFieldValue = mergeFields(fieldValue);
          return { ...finalField, [fieldKey]: mergedFieldValue };
        } else if (fieldValue.type === 'headline') {
          return finalField;
        } else {
          if (fieldValue.type === 'checkbox') {
            return { ...finalField, [fieldKey]: [] }
          } else {
            return { ...finalField, [fieldKey]: '' }
          }
        }
      }, {})
    } else {
      return { [field.name]: '' };
    }
  };

  return Object.entries(formData).reduce((finalField, [fieldKey, fieldValue]) => {
    return { ...finalField, [fieldKey]: mergeFields(fieldValue) }
  }, {});
};

export const buildFormSchema = (formData) => {
  if (!formData) {
    return null;
  }

  const mergeSchema = (field) => {
    if (field.type === 'object' || field.type === 'array') {
      return Yup.object().shape(Object.entries(field.fields).reduce((finalField, [fieldKey, fieldValue]: any) => {
        if (fieldValue.type === 'object' || fieldValue.type === 'array') {
          const schema = mergeSchema(fieldValue);
          return { ...finalField, [fieldKey]: schema };
        } else {
          let schema;
          if (fieldValue.type === 'file') {
            schema = null;
          } else if (fieldValue.type === 'checkbox') {
            schema = Yup.array().of(Yup.string());
          } else {
            schema = Yup.string();

            if (fieldValue.required) {
              schema = schema.required(`${fieldKey} is required`);
            }

            if (fieldValue.attributes.constraints.length > 0) {
              fieldValue.attributes.constraints.forEach((constraint) => {
                const { message, pattern, match } = constraint;
                const regExp = new RegExp(pattern.slice(1, pattern.length - 1));
                if (match) {
                  schema = schema.matches(regExp, message);
                } else {
                  schema = schema.test(
                    'is-match',
                    message,
                    (value) => !regExp.test(value),
                  );
                }
              })
            }
          }
          return { ...finalField, [fieldKey]: schema };
        }
      }, {}));
    } else {
      return Yup.string().required(`${field.name} is required`);
    }
  };

  return Yup.object().shape(Object.entries(formData).reduce((finalField, [fieldKey, fieldValue]) => {
    return { ...finalField, [fieldKey]: mergeSchema(fieldValue) }
  }, {}));
};

export const buildFormRequestData = (data) => {
  let response = new FormData();
  const formData: any = Object.values(data).reduce((total: any, field: any) => ({...total, ...field}), {});
  Object.keys(formData).forEach((objectName) => {
    let obj = formData[objectName];

    if (typeof obj == "object") {
      if (Array.isArray(obj)) {
        let isFilesArray = false;
        if (obj.find(() => true) instanceof File) {
          isFilesArray = true;
        }

        obj.forEach((item, index) => {
          if (isFilesArray) {
            if (item.name)
              response.append(
                `${objectName}[files][${index}][file][file]`,
                item
              );
          } else {
            if (typeof item == "object") {
              Object.keys(item).forEach((itemKey) => {
                response.append(
                  `${objectName}[${index}][${itemKey}]`,
                  item[itemKey]
                );
              });
            } else {
              response.append(`${objectName}[${index}]`, item);
            }
          }
        });
      } else if (obj instanceof File) {
        if (obj.name) response.set(objectName + "[file][file]", obj);
      } else {
        if (obj == null) {
          response.set(objectName, "");
        } else {
          for (let key in obj) {
            const childObj = obj[key];
            if (childObj instanceof File) {
              if (obj.name)
                response.set(`${objectName}[${key}][file][file]`, childObj);
            } else if (Array.isArray(childObj)) {
              let isFilesArray = false;
              if (childObj.find(() => true) instanceof File) {
                isFilesArray = true;
              }
              childObj.forEach((item, index) => {
                if (isFilesArray) {
                  if (item.name)
                    response.set(
                      `${objectName}[${key}][files][${index}][file][file]`,
                      item
                    );
                } else {
                  response.set(`${objectName}[${key}][${index}]`, item);
                }
              });
            } else if (typeof childObj == "object") {
              // throw "demo";
              for (let subKey in childObj) {
                response.set(
                  `${objectName}[${key}][${subKey}]`,
                  childObj[subKey]
                );
              }
            } else {
              response.set(`${objectName}[${key}]`, childObj);
            }
          }
        }
      }
    } else {
      response.set(objectName, obj);
    }
  });

  return response;
}
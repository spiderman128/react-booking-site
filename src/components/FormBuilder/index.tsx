// Dependencies
import React, { FC } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
} from '@mui/material';
import _ from 'lodash';

// Components
import { Checkbox, Input, Select, Typography } from '../Common';
import { ImageList } from '../Common/ImageList';

// Interfaces
import { IForm } from '../../interfaces';
import { DatePicker } from '../Common/DatePicker';
import { Switch } from '../Common/Switch';

interface IFormProps extends IForm {
  formik: any;
  path: string;
}

export const FormBuilder: FC<IFormProps> = ({
	type,
	attributes,
	label,
	fields,
  formik,
  path,
}) => {
  const formikError = _.get(formik.errors, path);
  const formikTouched = _.get(formik.touched, path);

	const buildForm = (formType: string) => {
    const currentValue = formik.getFieldProps(path).value;

    switch(formType) {
			case 'date':
				return (
          <Grid item xs={2} md={1}>
            <FormControl error={!!(formikError && formikTouched)}>
              <FormLabel>{label}*</FormLabel>
              <DatePicker
                onChange={(val) => formik.setFieldValue(path, val)}
                value={formik.getFieldProps(path).value}
              />
              <FormHelperText>
                {!!(formikError && formikTouched) && formikError}
              </FormHelperText>
            </FormControl>
          </Grid>
				);
			case 'text':
				return (
          <Grid item xs={2} md={1}>
            <FormControl error={!!(formikError && formikTouched)}>
              <FormLabel>{label}*</FormLabel>
              <Input
                size="medium"
                {...formik.getFieldProps(path)}
              />
              <FormHelperText>
                {!!(formikError && formikTouched) && formikError}
              </FormHelperText>
            </FormControl>
          </Grid>
				);
      case 'password':
        return (
          <Grid item xs={2} md={1}>
            <FormControl error={!!(formikError && formikTouched)}>
              <FormLabel>{label}*</FormLabel>
              <Input
                size="medium"
                type="password"
                {...formik.getFieldProps(path)}
              />
              <FormHelperText>
                {!!(formikError && formikTouched) && formikError}
              </FormHelperText>
            </FormControl>
          </Grid>
        );
      case 'currency':
        return (
          <Grid item xs={2} md={1}>
            <FormControl error={!!(formikError && formikTouched)}>
              <FormLabel>{label}*</FormLabel>
              <Input
                size="medium"
                endAdornment={<>€</>}
                {...formik.getFieldProps(path)}
              />
              <FormHelperText>
                {!!(formikError && formikTouched) && formikError}
              </FormHelperText>
            </FormControl>
          </Grid>
        );
      case 'textarea':
        return (
          <Grid item xs={2} md={1}>
            <FormControl error={!!(formikError && formikTouched)}>
              <FormLabel>{label}*</FormLabel>
              <Input
                size="medium"
                multiline
                minRows={8}
                {...formik.getFieldProps(path)}
              />
              <FormHelperText>
                {!!(formikError && formikTouched) && formikError}
              </FormHelperText>
            </FormControl>
          </Grid>
        );
      case 'tel':
        return (
          <Grid item xs={2} md={1}>
            <FormControl error={!!(formikError && formikTouched)}>
              <FormLabel>{label}*</FormLabel>
              <Input
                size="medium"
                {...formik.getFieldProps(path)}
              />
              <FormHelperText>
                {!!(formikError && formikTouched) && formikError}
              </FormHelperText>
            </FormControl>
          </Grid>
        );
      case 'integer':
        return (
          <Grid item xs={2} md={1}>
            <FormControl error={!!(formikError && formikTouched)}>
              <FormLabel>{label}*</FormLabel>
              <Input
                size="medium"
                {...formik.getFieldProps(path)}
              />
              <FormHelperText>
                {!!(formikError && formikTouched) && formikError}
              </FormHelperText>
            </FormControl>
          </Grid>
        );
      case 'float':
        return (
          <Grid item xs={2} md={1}>
            <FormControl error={!!(formikError && formikTouched)}>
              <FormLabel>{label}*</FormLabel>
              <Input
                size="medium"
                {...formik.getFieldProps(path)}
              />
              <FormHelperText>
                {!!(formikError && formikTouched) && formikError}
              </FormHelperText>
            </FormControl>
          </Grid>
        );
      case 'checkbox':
        return (
          <Grid item xs={2} md={1}>
            <Typography variant="h3" sx={{ mb: 20 }}>
              {label}*
            </Typography>
            <FormGroup>
              <Grid container columns={2} spacing={8}>
                {
                  Object.keys(attributes.choices).map((item, index, keys) => (
                    < Grid
                      key={index}
                      item
                      xs={2}
                      md={keys.length > 4 ? 1 : 2}
                    >
                      <FormControlLabel
                        key={index}
                        control={<Checkbox value={attributes.choices[item]} />}
                        label={item}
                        checked={currentValue.includes(attributes.choices[item])}
                        onChange={(e: any) => {
                          if (e.target.checked) {
                            formik.setFieldValue(path, [...currentValue, attributes.choices[item]]);
                          } else {
                            formik.setFieldValue(path, currentValue.filter((v) => v !== attributes.choices[item]));
                          }
                        }}
                      />
                      <FormHelperText>
                        {!!(formikError && formikTouched) && formikError}
                      </FormHelperText>
                    </Grid>
                  ))
                }
              </Grid>
            </FormGroup>
          </Grid>
        );
      case 'radio':
        return (
          <Grid item xs={2} md={1}>
            <Typography variant="h3" sx={{ mb: 20 }}>
              {label}*
            </Typography>
            <FormGroup sx={{ mb: 20 }}>
              <RadioGroup>
                <Grid container columns={2} spacing={8}>
                  {
                    Object.keys(attributes.choices).map((item, index, keys) => (
                      <Grid key={index} item xs={2} md={keys.length > 4 ? 1 : 2}>
                        <FormControlLabel
                          control={<Radio value={attributes.choices[item]} />}
                          label={item}
                          checked={currentValue === attributes.choices[item]}
                          onChange={(e: any) => {
                            if (e.target.checked) {
                              formik.setFieldValue(path, attributes.choices[item]);
                            }
                          }}
                        />
                      </Grid>
                    ))
                  }
                </Grid>
              </RadioGroup>
            </FormGroup>
          </Grid>
        );
      case 'radioButton':
        return (
          <Grid item xs={2} md={1}>
            <FormGroup>
              <FormControlLabel
                value={currentValue === attributes.attr.value}
                sx={{ margin: 0 }}
                control={<Switch sx={{ mr: 8 }} />}
                onChange={(e: any) => {
                  formik.setFieldValue(path, !attributes.attr.value);
                }}
                label={label}
              />
            </FormGroup>
          </Grid>
        )
			case 'select':
				return (
          <Grid item xs={2} md={1}>
            <FormControl error={!!(formikError && formikTouched)}>
              <FormLabel>{label}*</FormLabel>
              <Select
                size="medium"
                sx={{ mt: '0 !important' }}
                {...formik.getFieldProps(path)}
              >
                {
                  Object.keys(attributes.choices).map((item, index) => (
                    <MenuItem key={index} value={attributes.choices[item]}>
                      {item}
                    </MenuItem>
                  ))
                }
              </Select>

              <FormHelperText>
                {!!(formikError && formikTouched) && formikError}
              </FormHelperText>
            </FormControl>
          </Grid>
				)
      case 'file':
        return (
          <Grid item xs={2} md={1}>
            <Typography variant="h3" mb={12}>
              {label}*
            </Typography>
            <ImageList
              files={currentValue || []}
              onChangeFiles={(files) => {
                formik.setFieldValue(path, files);
              }}
              hasAddImageButton
            />
            <FormHelperText error={!!formikError}>
              {!!(formikError && formikTouched) && formikError}
            </FormHelperText>
          </Grid>
        );
      case 'headline':
        return (
          <Grid item xs={2} md={2}>
            <Typography variant="h2" mt={16}>{label}</Typography>
          </Grid>
        );
      case 'object':
        return Object
          .entries(fields as { [key: string]: IForm })
          .map(([formKey, form]: [string, IForm], key) =>
            <FormBuilder key={key} path={`${path}.${formKey}`} formik={formik} {...form} />
          )
      case 'array':
        return Object
          .entries(fields as { [key: string]: IForm })
          .map(([formKey, form]: [string, IForm], key) =>
            <FormBuilder key={key} path={`${path}.${formKey}`} formik={formik} {...form} />
          )
			default:
        return <Grid item xs={2} md={2}>{label}</Grid>
		}
	}

	return <>{ buildForm(type) }</>
};
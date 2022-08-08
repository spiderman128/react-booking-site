// Dependencies
import React, { FC, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';

// Components
import { Button } from '../../Common';
import { Stepper } from '../../Common/Stepper';
import { FormBuilder } from '../../FormBuilder';

// Actions
import { createNewClient } from '../../../redux/actions/client.action';

// interfaces
import { RootState } from '../../../redux/reducers';
import { IForm } from '../../../interfaces';

// Styles
import * as S from './styles';
import * as Yup from 'yup';
import { buildFormInitialData, buildFormSchema } from '../../../utils';

interface ICreateNewClientModal {
  open: boolean;
  onClose: () => void;
}

export const CreateNewClientModal: FC<ICreateNewClientModal> = ({
  open,
  onClose,
}) => {
  const dispatch = useDispatch();
  const createClientForms = useSelector(
    ({ clientReducer: { createClientForms } }: RootState) => createClientForms
  );

  const initialValue = useMemo(() => {
    return buildFormInitialData(createClientForms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newClientSchema = useMemo(() => {
    return buildFormSchema(createClientForms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik<any>({
    initialValues: initialValue,
    validationSchema: newClientSchema,
    onSubmit: async (values) => {
      dispatch(createNewClient(values));
    },
  });

  const [step, setStep] = useState(0);

  const stepLength = useMemo(() => Object.entries(createClientForms).length, [createClientForms]);
  const currentStepContent: IForm = useMemo(() => Object.values(createClientForms)[step] as IForm, [step, createClientForms]);
  const currentStepKey: string = useMemo(() => Object.keys(createClientForms)[step], [step, createClientForms]);

  const handleNextStep = () => {
    if (step === stepLength - 1) {
      formik.handleSubmit();
      return;
    } else {
      setStep(step + 1);
    }
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  return (
    <S.CrateNewClientDialog
      open={open}
      onClose={onClose}
      title="Create New Client"
      actions={
        <>
          <Button
            sx={{ flexGrow: { xs: 1, sm: 0 } }}
            size="large"
            onClick={handleBackStep}
            disabled={step === 0}
          >
            Back
          </Button>
          <Button
            sx={{ ml: '16px !important', flexGrow: { xs: 1, sm: 0 } }}
            color="primary"
            size="large"
            onClick={handleNextStep}
          >
            {step === stepLength  - 1? 'Create New Clients' : 'Next'}
          </Button>
        </>
      }
      headerChild={<Stepper step={step} onChangeStep={setStep} length={stepLength} />}
    >
      <Grid container columns={2} columnSpacing={42} rowSpacing={28}>
        <FormBuilder
          type={currentStepContent.type}
          attributes={currentStepContent.attributes}
          label={currentStepContent.label}
          fields={currentStepContent.fields}
          formik={formik}
          path={currentStepKey}
        />
      </Grid>
    </S.CrateNewClientDialog>
  );
};

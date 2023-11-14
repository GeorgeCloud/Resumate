import { FormProvider } from '../../contexts/FormContext';
import FormPage from '../../components/FormPage';

export default function Form() {
  return (
    <>
      <div>This is the Form Route</div>
      <FormProvider>
        <FormPage />
      </FormProvider>
    </>
  )
}

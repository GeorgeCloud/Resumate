import { FormProvider } from '../contexts/FormContext'
import FormPage1 from './FormPage1'
import FormPage2 from './FormPage2'
import FormPage3 from './FormPage3'
import FormPage4 from './FormPage4'
import SummaryPage from './SummaryPage';

export default function MultiPageForm() {
  return (
    <FormProvider>
      <div>
        <FormPage1 />
        <FormPage2 />
        <FormPage3 />
        <FormPage4 />
        <SummaryPage />
      </div>
    </FormProvider>
  );
}

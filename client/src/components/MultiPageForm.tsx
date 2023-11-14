import { FormProvider } from '../contexts/FormContext'
import PersonalDetail from './PersonalDetail'
import ProfessionalDetail from './ProfessionalDetail'
import FormPage3 from './FormPage3'
import FormPage4 from './FormPage4'
import SummaryPage from './SummaryPage';

export default function MultiPageForm() {
  return (
    <FormProvider>
      <div>
        <PersonalDetail />
        <ProfessionalDetail />
        <FormPage3 />
        <FormPage4 />
        <SummaryPage />
      </div>
    </FormProvider>
  );
}

import { FormProvider } from '../contexts/FormContext'
import PersonalDetail from './PersonalDetail'
import ProfessionalDetail from './ProfessionalDetail'
import EducationDetail from './EducationDetail'
import FormPage4 from './FormPage4'
import SummaryPage from './SummaryPage';

export default function MultiPageForm() {
  return (
    <FormProvider>
      <div>
        <PersonalDetail />
        <EducationDetail />
        <ProfessionalDetail />
        <FormPage4 />
        <SummaryPage />
      </div>
    </FormProvider>
  );
}

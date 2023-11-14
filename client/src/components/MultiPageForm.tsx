import { FormProvider } from '../contexts/FormContext'
import PersonalDetail from './PersonalDetail'
import ProfessionalDetail from './ProfessionalDetail'
import EducationDetail from './EducationDetail'
import ProjectsDetail from './ProjectsDetail'
import SummaryPage from './SummaryPage';

export default function MultiPageForm() {
  return (
    <FormProvider>
      <div>
        <PersonalDetail />
        <EducationDetail />
        <ProfessionalDetail />
        <ProjectsDetail />
        <SummaryPage />
      </div>
    </FormProvider>
  );
}

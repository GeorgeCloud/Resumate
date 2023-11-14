import { useParams, Navigate } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext';
import PersonalDetail from './PersonalDetail';
import EducationDetail from './EducationDetail';
import ProfessionalDetail from './ProfessionalDetail';
import ProjectsDetail from './ProfessionalDetail';

export default function FormPage() {
  const { page } = useParams();
  console.log('🧶🧶🧶 ~ file: FormPage.tsx:10 ~ FormPage ~ page:', page)

  const { wholeFormData, nextPage, prevPage } = useFormContext();

  const getPageComponent = () => {
    switch (page) {
      case 'personal':
        return <PersonalDetail />;
      case 'education':
        return <EducationDetail />;
      case 'professional':
        return <ProfessionalDetail />;
      case 'projects':
        return <ProjectsDetail />;
      default:
        // redirect to page 1 if route not recognized
        return <Navigate to="/form/personal" />;
    }
  };

  const handleNext = () => {
    // TODO: form validation logic here
    nextPage(wholeFormData);
  };

  const handlePrev = () => {
    prevPage();
  };

  return (
    <div>
      {getPageComponent()}

      {page !== 'summary' && (
        <button onClick={handleNext}>Next & Save</button>
      )}

      {page !== 'personal' && (
        <button onClick={handlePrev}>Previous</button>
      )}
    </div>
  );
};

import { useParams, Navigate } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext';
import PersonalDetail from './PersonalDetail';
import EducationDetail from './EducationDetail';
import ProfessionalDetail from './ProfessionalDetail';
import ProjectsDetail from './ProfessionalDetail';

import FormPage from './FormPage';

export default function Form() {
  const { page } = useParams();

  const { currentPage } = useFormContext();

  function getPageComponent() {
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
        // redirect to landing page if route not recognized
        return <Navigate to="/" />;
    }
  };

  return (
    <>
      <div>This is a Multi-Page Form</div>
      <p>{`Page ${currentPage} of 5`}</p>
      {getPageComponent()}
      <FormPage />
    </>
  )
}

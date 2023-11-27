import { useNavigate, useParams } from 'react-router-dom';
import { useFormContext } from '../../contexts/FormContext';
import SaveFormButton from './SaveFormButton';
import Personal from './Personal';
import Education from './Education';
import Professional from './Professional';
import Projects from './Projects';
import Summary from './Summary';
import type { PageType, FormDataType } from '../../lib/types';

export default function UserInfoForm() {
  const navigate = useNavigate();
  const { page } = useParams();
  const { formData, nextPage, prevPage } = useFormContext();

  function handleNext() {
    console.log('form data', formData);
    if (currentPageObj) {
      const nextPageObj = pages.find((p) => p.id === currentPageObj?.id + 1);
      if (nextPageObj) {
        navigate(`/form/${nextPageObj.name}`);
        nextPage(formData as FormDataType);
      }
    }
  }
  function handlePrev() {
    if (currentPageObj) {
      const prevPageObj = pages.find((p) => p.id === currentPageObj?.id - 1);
      if (prevPageObj) {
        navigate(`/form/${prevPageObj.name}`);
        prevPage();
      }
    }
  }

  const pages: PageType[] = [
    {
      id: 1,
      name: 'personal',
      component: <Personal />
    },
    {
      id: 2,
      name: 'education',
      component: <Education />,
      allowMultipleEntries: true
    },
    {
      id: 3,
      name: 'professional',
      component: <Professional />,
      allowMultipleEntries: true

    },
    {
      id: 4,
      name: 'projects',
      component: <Projects />,
      allowMultipleEntries: true

    },
    {
      id: 5,
      name: 'summary',
      component: <Summary formData={formData} />,
    }
  ];

  const currentPageObj = pages.find((p) => p.name === page);

  return (
    <div className="w-screen max-h-screen">
      <div
        style={{
          height: '42rem',
          overflowY: 'auto',
        }}
        className="max-w-xl mx-auto flex justify-center"
      >
        <form action="#">
          {currentPageObj?.component}
        </form>
      </div>
      <div className="max-w-lg mx-auto flex justify-center">
        <div className="max-w-lg mx-auto flex justify-center">
          {currentPageObj?.id !== 1 && (
            <button className="mx-2 mb-4" onClick={handlePrev}>
              Previous
            </button>
          )}
          {currentPageObj?.name !== 'summary' ? (
            <button className="mx-2 mb-4" onClick={handleNext}>
              Next
            </button>
          ) : (
            <SaveFormButton formData={formData} />
          )}

        </div>
      </div>
    </div>
  );
}

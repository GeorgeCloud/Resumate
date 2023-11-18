import { useNavigate, useParams } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext';
import Personal from './Personal';
import Education from './Education';
import Professional from './Professional';
import Projects from './Projects';
import Summary from './Summary';
import type { PageType, FormDataType } from '../lib/types'

export default function MultiPageForm() {
  const navigate = useNavigate();
  const { page } = useParams();
  const { formData, setFormData, nextPage, prevPage } = useFormContext();

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        [field]: value
      },
    });
  }

  const pages: PageType[] = [
    {
      id: 1,
      name: 'personal',
      component: <Personal handleInputChange={handleInputChange} />
    },
    {
      id: 2,
      name: 'education',
      component: <Education handleInputChange={handleInputChange} />
    },
    {
      id: 3,
      name: 'professional',
      component: <Professional handleInputChange={handleInputChange} />
    },
    {
      id: 4,
      name: 'projects',
      component: <Projects handleInputChange={handleInputChange} />
    },
    {
      id: 5,
      name: 'summary',
      component: <Summary />
    }
  ];

  const currentPageObj = pages.find((p) => p.name === page);

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

  return (
    <div className="w-screen max-h-screen">
      <div className="max-w-lg mx-auto flex justify-center">
        <form action="#">
          {currentPageObj?.component}
        </form>
      </div>
      <div className="max-w-lg mx-auto flex justify-center">
        <div className="max-w-lg mx-auto flex justify-center">
          {currentPageObj?.id !== 1 && (
            <button className="mx-2 mb-4" onClick={handlePrev}>Previous</button>
          )}
          <button className="mx-2 mb-4" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

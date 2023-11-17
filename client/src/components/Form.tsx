import { useNavigate, useParams } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext';
import Personal from '../routes/multiPageForm/Personal';
import Education from '../routes/multiPageForm/Education';
import Professional from '../routes/multiPageForm/Professional';
import Projects from '../routes/multiPageForm/Projects';
import Summary from '../routes/multiPageForm/Summary';
import type { PageType, FormDataType } from '../lib/types'


const pages: PageType[] = [
  {
    id: 1,
    name: 'personal',
    component: <Personal />
  },
  {
    id: 2,
    name: 'education',
    component: <Education />
  },
  {
    id: 3,
    name: 'professional',
    component: <Professional />
  },
  {
    id: 4,
    name: 'projects',
    component: <Projects />
  },
  {
    id: 5,
    name: 'summary',
    component: <Summary />
  }
];

export default function Form() {
  const navigate = useNavigate();
  const { page } = useParams();
  const { formData, nextPage, prevPage } = useFormContext();

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
        <button className="mx-2 mb-4" onClick={handlePrev}>Previous</button>
        <button className="mx-2 mb-4" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext';
import Personal from '../routes/multiPageForm/Personal';
import Education from '../routes/multiPageForm/Education';
import Professional from '../routes/multiPageForm/Professional';
import Projects from '../routes/multiPageForm/Professional';
import Summary from '../routes/multiPageForm/Summary';
import type { PageTypes } from '../lib/types';

const pages: PageTypes[] = [
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
  const { currentPage, formData, nextPage, prevPage } = useFormContext();

  const nextPageObj = pages.find((p) => p.id === currentPage);

  function handleNext() {
    nextPage(formData);

    if (nextPageObj) {
      return navigate(`/form/${nextPageObj.name}`);
    }
  }

  function handlePrev() {
    prevPage();
  }

  return (
    <>
      {nextPageObj?.component}
      <div>
        {currentPage !== 1 && (
          <button onClick={handlePrev}>Previous</button>
        )}
        {currentPage !== 5 && (
          <button onClick={handleNext}>Next & Save</button>
        )}
        <div>This is a Multi-Page Form</div>
        <p>{`Page ${currentPage} of 5`}</p>
      </div>
    </>
  );
}

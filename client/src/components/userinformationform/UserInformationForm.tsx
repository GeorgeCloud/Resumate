import { useNavigate, useParams } from 'react-router-dom';
import { useFormContext } from '../../contexts/FormContext';
import SaveFormButton from './SaveFormButton';
import Personal from './Personal';
import Education from './Education';
import Professional from './Professional';
import Projects from './Projects';
import Stack from './Stack';
import Summary from './Summary';
import type { PageType, FormDataType } from '../../lib/types';

/**
 * The UserInformationForm component.
 *
 * This component renders the multi-page form that takes in the user's
 * information.
 *
 * It uses the `useNavigate` and `useParams` hooks from react-router-dom to
 * handle navigation.
 *
 * The `useFormContext` hook is called to accesses the form data state and the
 * page navigation functions.
 *
 * Each of the pages of the form is represented by an object in the 'pages'
 * array.  Each page object consists of the properties `id`, `name`, and
 * `component`. Some pages also have a `allowMultipleEntries` property that
 * indicates whether the user can add multiple entries on that page.
 *
 * The `handleNext` and `handlePrev` functions are used to navigate to the next
 * and previous pages, respectively.
 *
 * @returns UserInformationForm
 *
 */

export default function UserInformationForm() {
  const navigate = useNavigate();
  const { page } = useParams();
  const { formData, nextPage, prevPage } = useFormContext();

  function handleNext() {
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
      name: 'stack',
      component: <Stack />
    },
    {
      id: 6,
      name: 'summary',
      component: <Summary formData={formData} />,
    }
  ];

  const currentPageObj = pages.find((p) => p.name === page);

  return (
    <div className="border-neutral-600 border-2 max-w-lg w-full rounded-md shadow-md my-8 py-8 px-4 mx-4">
      <div style={{ height: '35rem', overflowY: "scroll", width: '100%' }} className="">
        <form action="POST">
          {currentPageObj?.component}
        </form>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between items-center my-6">
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

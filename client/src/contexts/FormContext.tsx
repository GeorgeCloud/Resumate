import { createContext, useContext, useState } from 'react';
import type {
  FormDataType,
  FormContextPropsTypes,
  ContextPropsType
} from '../lib/types';

/**
 * The FormContext component.
 *
 * This component is responsible for providing the form data object, and the
 * function to update the form data object, to all child components.
 *
 * It uses the `useState` hook to manage the form data state.
 *
 * It has the following structure:
 * -`personalData`: Object; contains the personal data of the user.
 * -`educationData`: Array; contains the education data of the user.
 * -`professionalData`: Array; contains the professional data for user.
 * -`projectsData`: Array; contains the projects data of the user.
 * -`stackData`: Object; contains the stack data of the user.
 *
 * The`setFormData` function is used to update the form data. It takes a new
 * form data object and merges it with the current form data.
 *
 * The navigation functions `nextPage` and `prevPage` are declared in this
 * component, where they are subsequently shared throughout the rest of the
 * component structure.
 *
 * The`FormContext.Provider` component is used to provide the `formData` and
 * `setFormData` to all the child components.
 *
 * The custom useFormContext hook is used to deliver the formData and the
 * setFormData function to the various children while ensuring that the form
 * data is being used within the proper functional scope.
 *
 * @param {React.ReactNode}
 * @returns {React.Context<T>} FormContext
 *
 */

const FormContext = createContext<FormContextPropsTypes | undefined>(undefined);

export function FormProvider({ children }: ContextPropsType) {
  const [formData, setFormData] = useState<FormDataType>({
    personalData: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      linkedIn: '',
      github: '',
      title: ''
    },
    educationData: [{
      schoolName: '',
      cityState: '',
      degreeTitle: '',
      startDate: '',
      endDate: ''
    }],
    professionalData: [{
      title: '',
      companyName: '',
      startDate: '',
      endDate: '',
      cityState: '',
      accomplishments: []
    }],
    projectsData: [{
      projectTitle: '',
      url: '',
      description: '',
      startDate: '',
      endDate: '',
      accomplishments: []
    }],
    stackData: {
      languages: [],
      frameworks: [],
      developer_tools: [],
      libraries: []
    }
  });

  const [currentPage, setCurrentPage] = useState<number>(1);

  function nextPage(data: Partial<FormDataType>) {
    setFormData((prevData) => {
      const key = 'FORM_DATA'
      const updatedData = { ...prevData, ...data };
      localStorage.setItem(key, JSON.stringify(updatedData));
      return updatedData;
    });
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 5));
  }

  function prevPage() {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  }

  return (
    <FormContext.Provider value={{
      formData,
      setFormData,
      currentPage,
      nextPage,
      prevPage
    }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('context must be used within a provider');
  }
  return context;
}

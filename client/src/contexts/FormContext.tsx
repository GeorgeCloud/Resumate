import { createContext, useContext, useState } from 'react';
import type {
  FormDataType,
  FormContextPropsTypes,
  ContextPropsType
} from '../lib/types';

const FormContext = createContext<FormContextPropsTypes | undefined>(undefined);

export function FormProvider({ children }: ContextPropsType) {
  const [formData, setFormData] = useState<FormDataType>({
    "Personal Data": {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      linkedIn: '',
      github: '',
      title: ''
    },
    "Education Data": [{
      schoolName: '',
      cityState: '',
      degreeTitle: '',
      startDate: '',
      endDate: ''
    }],
    "Professional Data": [{
      title: '',
      companyName: '',
      startDate: '',
      endDate: '',
      cityState: ''
    }],
    "Projects Data": [{
      projectTitle: '',
      url: '',
      description: '',
      startDate: '',
      endDate: ''
    }]
  });

  const [currentPage, setCurrentPage] = useState<number>(1);

  const nextPage = (data: Partial<FormDataType>) => {
    setFormData((prevData) => {
      const key = 'FORM_DATA'
      const updatedData = { ...prevData, ...data };
      localStorage.setItem(key, JSON.stringify(updatedData));
      return updatedData;
    });
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 5));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

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

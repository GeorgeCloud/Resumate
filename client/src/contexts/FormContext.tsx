import { createContext, useContext, useState } from 'react';
import type {
  FormDataTypes,
  FormContextPropsTypes,
  ContextPropsType
} from '../lib/types';

const FormContext = createContext<FormContextPropsTypes | undefined>(undefined);

export function FormProvider({ children }: ContextPropsType) {
  const [formData, setFormData] = useState<FormDataTypes>({
    personalData: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      linkedIn: '',
      github: '',
      title: ''
    },
    educationData: {
      schoolName: '',
      cityState: '',
      degreeTitle: '',
      startDate: '',
      endDate: ''
    },
    professionalData: {
      title: '',
      companyName: '',
      startDate: '',
      endDate: '',
      cityState: ''
    },
    projectsData: {
      projectTitle: '',
      url: '',
      description: '',
      startDate: '',
      endDate: ''
    }
  });

  const [currentPage, setCurrentPage] = useState<number>(1);


  const nextPage = (data: Partial<FormDataTypes>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
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
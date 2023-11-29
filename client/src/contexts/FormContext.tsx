import { createContext, useContext, useState } from 'react';
import type {
  FormDataType,
  FormContextPropsTypes,
  ContextPropsType
} from '../lib/types';

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
      contribution1: '',
      contribution2: '',
      contribution3: ''
    }],
    projectsData: [{
      projectTitle: '',
      url: '',
      description: '',
      startDate: '',
      endDate: '',
      contribution1: '',
      contribution2: '',
      contribution3: ''
    }],
    stackData: {
      languages: [],
      frameworks: [],
      developer_tools: [],
      libraries: []
    }
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

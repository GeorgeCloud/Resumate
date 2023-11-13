// FormContext.tsx

import React, { createContext, useContext, useState } from 'react';

interface ContextProps {
  children: React.ReactNode;
}

interface FormData {
  page1: string;
  page2: string;
  page3: string;
  page4: string;
}

interface FormContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  currentPage: number;
  nextPage: (data: Partial<FormData>) => void;
  prevPage: () => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export function FormProvider({ children }: ContextProps) {
  const [formData, setFormData] = useState<FormData>({
    page1: '',
    page2: '',
    page3: '',
    page4: ''
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const nextPage = (data: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentPage((prevPage) => prevPage + 1);
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

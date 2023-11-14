// FormContext.tsx

import React, { createContext, useContext, useState } from 'react';

interface ContextProps {
  children: React.ReactNode;
}

interface PersonalDetailTypes {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  linkedIn: string;
  github: string;
  title: string;
}

interface ProfessionalDetailTypes {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  cityState: string;
}

interface FormData {
  personalData: PersonalDetailTypes;
  professionalData: ProfessionalDetailTypes;

}
interface FormContextProps {
  personalData: PersonalDetailTypes;
  professionalData: ProfessionalDetailTypes;
  formData: FormData;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalDetailTypes>>;
  setProfessionalData: React.Dispatch<React.SetStateAction<ProfessionalDetailTypes>>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  currentPage: number;
  nextPage: (data: Partial<FormData>) => void;
  prevPage: () => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export function FormProvider({ children }: ContextProps) {

  const [personalData, setPersonalData] = useState<PersonalDetailTypes>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    linkedIn: '',
    github: '',
    title: ''
  });
  const [professionalData, setProfessionalData] = useState<ProfessionalDetailTypes>({
    title: '',
    companyName: '',
    startDate: '',
    endDate: '',
    cityState: ''
  });


  const [formData, setFormData] = useState({
    personalData,
    professionalData
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
      personalData,
      setPersonalData,
      professionalData,
      setProfessionalData,
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

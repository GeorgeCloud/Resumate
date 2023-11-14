import { createContext, useContext, useState } from 'react';
import type {
  PersonalDetailTypes,
  EducationDetailTypes,
  ProfessionalDetailTypes,
  WholeFormDataTypes,
  WholeFormContextPropsTypes,
  ContextPropsType
} from '../lib/types';

const FormContext = createContext<WholeFormContextPropsTypes | undefined>(undefined);

export function FormProvider({ children }: ContextPropsType) {

  const [personalData, setPersonalData] = useState<PersonalDetailTypes>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    linkedIn: '',
    github: '',
    title: ''
  });

  const [educationData, setEducationData] = useState<EducationDetailTypes>({
    schoolName: '',
    cityState: '',
    degreeTitle: '',
    startDate: '',
    endDate: ''
  })

  const [professionalData, setProfessionalData] = useState<ProfessionalDetailTypes>({
    title: '',
    companyName: '',
    startDate: '',
    endDate: '',
    cityState: ''
  });


  const [wholeFormData, setWholeFormData] = useState<WholeFormDataTypes>({
    personalData,
    educationData,
    professionalData
  });

  const [currentPage, setCurrentPage] = useState<number>(1);

  const nextPage = (data: Partial<WholeFormDataTypes>) => {
    setWholeFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  return (
    <FormContext.Provider value={{
      personalData,
      setPersonalData,
      educationData,
      setEducationData,
      professionalData,
      setProfessionalData,
      wholeFormData,
      setWholeFormData,
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

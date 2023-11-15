import { createContext, useContext, useState } from 'react';
import type {
  PersonalDetailTypes,
  EducationDetailTypes,
  ProfessionalDetailTypes,
  ProjectsDetailTypes,
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

  const [projectsData, setProjectsData] = useState<ProjectsDetailTypes>({
    projectTitle: '',
    url: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const [wholeFormData, setWholeFormData] = useState<WholeFormDataTypes>({
    personalData,
    educationData,
    professionalData,
    projectsData
  });

  const [currentPage, setCurrentPage] = useState<number>(1);

  const pages: string[] = [
    'Personal',
    'Education',
    'Professional',
    'Projects',
    'Summary'
  ]

  const nextPage = (data: Partial<WholeFormDataTypes>) => {
    setWholeFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length));
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
      projectsData,
      setProjectsData,
      wholeFormData,
      setWholeFormData,
      currentPage,
      nextPage,
      prevPage,
      pages
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

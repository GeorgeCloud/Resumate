export type ContextPropsType = {
  children: React.ReactNode;
}

export type PersonalDetailTypes = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  linkedIn: string;
  github: string;
  title: string;
}

export type EducationDetailTypes = {
  schoolName: string;
  cityState: string;
  degreeTitle: string;
  startDate: string;
  endDate: string;
}
export type ProfessionalDetailTypes = {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  cityState: string;
}

export type WholeFormDataTypes = {
  personalData: PersonalDetailTypes;
  educationData: EducationDetailTypes;
  professionalData: ProfessionalDetailTypes;
}

export type WholeFormContextPropsTypes = {
  personalData: PersonalDetailTypes;
  educationData: EducationDetailTypes;
  professionalData: ProfessionalDetailTypes;
  wholeFormData: WholeFormDataTypes;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalDetailTypes>>;
  setEducationData: React.Dispatch<React.SetStateAction<EducationDetailTypes>>;
  setProfessionalData: React.Dispatch<React.SetStateAction<ProfessionalDetailTypes>>;
  setWholeFormData: React.Dispatch<React.SetStateAction<WholeFormDataTypes>>;
  currentPage: number;
  nextPage: (data: Partial<WholeFormDataTypes>) => void;
  prevPage: () => void;
}

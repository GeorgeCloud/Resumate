export type PageTypes = {
  id: number;
  name: string;
  component: {};
}

export type PageComponentProps = {
  handleInputChange: (field: string, value: string) => void;
}

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

export type ProjectsDetailTypes = {
  projectTitle: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
}

export type FormDataTypes = {
  personalData: PersonalDetailTypes;
  educationData: EducationDetailTypes;
  professionalData: ProfessionalDetailTypes;
  projectsData: ProjectsDetailTypes;
}

export type FormContextPropsTypes = {
  formData: FormDataTypes;
  setFormData: React.Dispatch<React.SetStateAction<FormDataTypes>>;
  currentPage: number;
  nextPage: (data: Partial<FormDataTypes>) => void;
  prevPage: () => void;
}

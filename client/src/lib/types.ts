/******** userinformationform **********/

export type PageType = {
  id: number;
  name: string;
  component: JSX.Element;
  allowMultipleEntries?: boolean;
};

export type PageComponentProps = {
  handleInputChange: (field: string, value: string) => void;
}

export type DatesDataType = {
  startDate: string;
  endDate: string;
}

export type AccomplishmentDataType = {
  accomplishments: string[];
}

/******** context **********/

export type ContextPropsType = {
  children: React.ReactNode;
}

export type PersonalDataType = {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  linkedIn: string,
  github: string,
  title: string
}

export type EducationDataType = {
  index?: number;
  schoolName: string;
  cityState: string;
  degreeTitle: string;
  startDate: string;
  endDate: string;
}

export type ProfessionalDataType = {
  index?: number;
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  cityState: string;
  accomplishments: string[];
}

export type ProjectsDataType = {
  index?: number;
  projectTitle: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
  accomplishments: string[];
}

export type StackDataType = {
  languages: string[];
  frameworks: string[];
  developer_tools: string[];
  libraries: string[];
}

export type FormDataType = {
  personalData: PersonalDataType,
  educationData: EducationDataType[],
  professionalData: ProfessionalDataType[],
  projectsData: ProjectsDataType[],
  stackData: StackDataType
}

export type FormContextPropsTypes = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  currentPage: number;
  nextPage: (data: Partial<FormDataType>) => void;
  prevPage: () => void;
}


/******** intake **********/

export type ApplicationIntakePropTypes = {
  storageKey: string;
}


/******** saveformbutton **********/

export interface SaveButtonProps {
  formData: FormDataType;
}

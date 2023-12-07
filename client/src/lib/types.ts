/******** userinformationform **********/

export interface PageType {
  id: number;
  name: string;
  dataType: string;
  component: JSX.Element;
  allowMultipleEntries?: boolean;
};

export interface DatesDataType {
  startDate: string;
  endDate: string;
}

/******** context **********/

export type FormDataSubTypes = PersonalDataType | EducationDataType | EducationDataType[] | ProfessionalDataType | ProfessionalDataType[] | ProjectsDataType | ProjectsDataType[] | StackDataType

export interface AccomplishmentInputProps {
  formDataSubType: keyof FormDataType;
  index: number;
}

export interface ContextPropsType {
  children: React.ReactNode;
}

export interface PersonalDataType {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  linkedIn: string,
  github: string,
  title: string
}

export interface EducationDataType {
  index?: number;
  schoolName: string;
  cityState: string;
  degreeTitle: string;
  startDate: string;
  endDate: string;
}

export interface ProfessionalDataType {
  index?: number;
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  cityState: string;
  accomplishments: string[];
}

export interface ProjectsDataType {
  index?: number;
  projectTitle: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
  accomplishments: string[];
}

export interface StackDataType {
  languages: string[];
  frameworks: string[];
  developer_tools: string[];
  libraries: string[];
}

export interface FormDataType {
  personalData: PersonalDataType,
  educationData: EducationDataType[],
  professionalData: ProfessionalDataType[],
  projectsData: ProjectsDataType[],
  stackData: StackDataType
}

export interface FormContextPropsTypes {
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

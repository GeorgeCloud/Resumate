
export type PageType = {
  id: number;
  name: string;
  component: JSX.Element;
  allowMultipleEntries?: boolean;
};

export type PageComponentProps = {
  handleInputChange: (field: string, value: string) => void;
}

export type ContextPropsType = {
  children: React.ReactNode;
}

export type EducationDataType = {
  schoolName: string;
  cityState: string;
  degreeTitle: string;
  startDate: string;
  endDate: string;
}

export type ProfessionalDataType = {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  cityState: string;
}

export type ProjectsDataType = {
  projectTitle: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
}

export type FormDataType = {
  "Personal Data": {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    linkedIn: string;
    github: string;
    title: string;
  },
  "Education Data": EducationDataType[],
  "Professional Data": ProfessionalDataType[],
  "Projects Data": ProjectsDataType[]
}

export type FormContextPropsTypes = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  currentPage: number;
  nextPage: (data: Partial<FormDataType>) => void;
  prevPage: () => void;
}

export type ApplicationIntakePropTypes = {
  storageKey: string;
}
export interface LocalStorageButtonProps {
  handleSaveClick: () => void;
}

export interface SaveButtonProps {
  formData: FormDataType;
}

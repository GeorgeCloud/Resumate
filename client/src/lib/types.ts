export type PageTypes = {
    id: number;
    name: string;
    component: React.ReactNode;
}

export type PageComponentProps = {
  handleInputChange: (field: string, value: string) => void;
}

export type ContextPropsType = {
  children: React.ReactNode;
}

export type FormDataTypes = {
  personalData: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    linkedIn: string;
    github: string;
    title: string;
  },
  educationData: {
    schoolName: string;
    cityState: string;
    degreeTitle: string;
    startDate: string;
    endDate: string;
  },
  professionalData: {
    title: string;
    companyName: string;
    startDate: string;
    endDate: string;
    cityState: string;
  },
projectsData: {
  projectTitle: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
  }
}

export type FormContextPropsTypes = {
  formData: FormDataTypes;
  setFormData: React.Dispatch<React.SetStateAction<FormDataTypes>>;
  currentPage: number;
  nextPage: (data: Partial<FormDataTypes>) => void;
  prevPage: () => void;
}

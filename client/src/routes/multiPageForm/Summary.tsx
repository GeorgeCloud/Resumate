import { useFormContext } from '../../contexts/FormContext'

export default function SummaryPage() {
  const { formData } = useFormContext();

  return (
     <div className="container">
      <h2 className="font-normal underline underline-offset-1 decoration-1 text-xl">Summary Page</h2>

      <h3>Personal Data</h3>
        <div>First Name: {formData.personalData.firstName}</div>
        <div>Last Name: {formData.personalData.lastName}</div>
        <div>Phone No.: {formData.personalData.phoneNumber}</div>
        <div>Email: {formData.personalData.email}</div>
        <div>LinkedIn: {formData.personalData.linkedIn}</div>
        <div>Github: {formData.personalData.github}</div>
        <div>Title: {formData.personalData.title}</div>

      <h3>Education Data</h3>
        <div>School Name: {formData.educationData.schoolName}</div>
        <div>City & State: {formData.educationData.cityState}</div>
        <div>Degree Title: {formData.educationData.degreeTitle}</div>
        <div>Start Date: {formData.educationData.startDate}</div>
        <div>End Date: {formData.educationData.endDate}</div>

      <h3>Professional Data</h3>
        <div>Title: {formData.professionalData.title}</div>
        <div>Company Name: {formData.professionalData.companyName}</div>
        <div>Start Date: {formData.professionalData.startDate}</div>
        <div>End Date: {formData.professionalData.endDate}</div>
        <div>City & State: {formData.professionalData.cityState}</div>

      <h3>Projects Data</h3>
        <div>Project Title: {formData.projectsData.projectTitle}</div>
        <div>URL: {formData.projectsData.url}</div>
        <div>Description: {formData.projectsData.description}</div>
        <div>Start Date: {formData.projectsData.startDate}</div>
        <div>End Date: {formData.projectsData.endDate}</div>
    </div>

  );
}

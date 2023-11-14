import { useFormContext } from '../contexts/FormContext'

export default function SummaryPage() {
  const { personalData, educationData, professionalData, projectsData, prevPage } = useFormContext();

  return (
    <div>
      <h2>Summary Page</h2>
      <div>Review and submit:</div>

      <h3>Personal Detail</h3>
      <div>First Name: {personalData.firstName}</div>
      <div>Last Name: {personalData.lastName}</div>
      <div>Phone No.: {personalData.phoneNumber}</div>
      <div>Email: {personalData.email}</div>
      <div>LinkedIn: {personalData.linkedIn}</div>
      <div>Github: {personalData.github}</div>
      <div>Title: {personalData.title}</div>

      <h3>Education Detail</h3>
      <div>School Name: {educationData.schoolName}</div>
      <div>City & State: {educationData.cityState}</div>
      <div>Degree Title: {educationData.degreeTitle}</div>
      <div>Start Date: {educationData.startDate}</div>
      <div>End Date: {educationData.endDate}</div>

      <h3>Professional Detail</h3>
      <div>Title: {professionalData.title}</div>
      <div>Company Name: {professionalData.companyName}</div>
      <div>Start Date: {professionalData.startDate}</div>
      <div>End Date: {professionalData.endDate}</div>
      <div>City & State: {professionalData.cityState}</div>

      <h3>Projects Detail</h3>
      <div>Project Title: {projectsData.projectTitle}</div>
      <div>URL: {projectsData.url}</div>
      <div>Description: {projectsData.description}</div>
      <div>Start Date: {projectsData.startDate}</div>
      <div>End Date: {projectsData.endDate}</div>

      <button onClick={prevPage}>Previous</button>
      <button onClick={() => alert('Form submitted!')}>Submit</button>
    </div>
  );
}

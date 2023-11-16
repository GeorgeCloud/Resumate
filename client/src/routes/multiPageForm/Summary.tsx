import { useFormContext } from '../../contexts/FormContext'

export default function SummaryPage() {
  const { formData } = useFormContext();

  return (
    <div className="page">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-4">Summary Page</h2>
      <div className="max-w-xs w-full mx-auto text-sm flex flex-col items-start justify-start mt-4 ml-24 text-left">
        <h3 className="text-center font-normal underline underline-offset-1 decoration-1 text-base mt-1">Personal Data</h3>
        <div className="text-xs subpixel-antialiased">First Name: {formData.personalData.firstName}</div>
        <div className="text-xs subpixel-antialiased">Last Name: {formData.personalData.lastName}</div>
        <div className="text-xs subpixel-antialiased">Phone No.: {formData.personalData.phoneNumber}</div>
        <div className="text-xs subpixel-antialiased">Email: {formData.personalData.email}</div>
        <div className="text-xs subpixel-antialiased">LinkedIn: {formData.personalData.linkedIn}</div>
        <div className="text-xs subpixel-antialiased">Github: {formData.personalData.github}</div>
        <div className="text-xs subpixel-antialiased">Title: {formData.personalData.title}</div>

        <h3 className="text-center font-normal underline underline-offset-1 decoration-1 text-base mt-1">Education Data</h3>
        <div className="text-xs subpixel-antialiased">School Name: {formData.educationData.schoolName}</div>
        <div className="text-xs subpixel-antialiased">City & State: {formData.educationData.cityState}</div>
        <div className="text-xs subpixel-antialiased">Degree Title: {formData.educationData.degreeTitle}</div>
        <div className="text-xs subpixel-antialiased">Start Date: {formData.educationData.startDate}</div>
        <div className="text-xs subpixel-antialiased">End Date: {formData.educationData.endDate}</div>

        <h3 className="text-center font-normal underline underline-offset-1 decoration-1 text-base mt-1">Professional Data</h3>
        <div className="text-xs subpixel-antialiased">Title: {formData.professionalData.title}</div>
        <div className="text-xs subpixel-antialiased">Company Name: {formData.professionalData.companyName}</div>
        <div className="text-xs subpixel-antialiased">Start Date: {formData.professionalData.startDate}</div>
        <div className="text-xs subpixel-antialiased">End Date: {formData.professionalData.endDate}</div>
        <div className="text-xs subpixel-antialiased">City & State: {formData.professionalData.cityState}</div>

        <h3 className="text-center font-normal underline underline-offset-1 decoration-1 text-base mt-1">Projects Data</h3>
        <div className="text-xs subpixel-antialiased">Project Title: {formData.projectsData.projectTitle}</div>
        <div className="text-xs subpixel-antialiased">URL: {formData.projectsData.url}</div>
        <div className="text-xs subpixel-antialiased">Description: {formData.projectsData.description}</div>
        <div className="text-xs subpixel-antialiased">Start Date: {formData.projectsData.startDate}</div>
        <div className="text-xs subpixel-antialiased">End Date: {formData.projectsData.endDate}</div>
      </div>
    </div>

  );
}

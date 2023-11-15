import { useFormContext } from "../../contexts/FormContext";

export default function Projects() {
  const {
    formData,
    setFormData
  } = useFormContext();

  function handleInputChange(field: string, value: string) {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        [field]: value,
      },
    });
  }

  return (
    <div className="max-w-lg w-3/4 mx-auto">
      <div className="w-full mx-auto flex flex-col items-center justify-evenly">
        <h2 className="text-2xl/3 my-4">Projects Detail</h2>
        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Project Title
          <input
            type="text"
            className="rounded-md"
            value={formData.projectsData.projectTitle}
            onChange={(e) => handleInputChange('projectTitle', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          URL
          <input
            type="url"
            value={formData.projectsData.url}
            onChange={(e) => handleInputChange('url', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Description
          <input
            type="text"
            value={formData.projectsData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Start Date
          <input
            type="text"
            value={formData.projectsData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          End Date
          <input
            type="text"
            value={formData.projectsData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </label>
      </div>
    </div>
  )
}

import { useFormContext } from "../../contexts/FormContext";

export default function Projects() {
  const {
    formData,
    setFormData
  } = useFormContext();

  function handleInputChange(field: string, value: string) {
    setFormData({
      ...formData,
      projectsData: {
        ...formData.projectsData,
        [field]: value,
      },
    });
  }

  return (
    <div className="page">
      <h2 className="font-normal underline underline-offset-1 decoration-1 text-xl">Projects Detail</h2>

      <div className="row">
        <div className="col1">
          <label htmlFor="projectTitle" className="flex justify-between">
            Project Title
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="projectTitle"
            name="projectTitle"
            placeholder="Project Title"
            value={formData.projectsData.projectTitle}
            onChange={(e) => handleInputChange('projectTitle', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="url" className="flex justify-between">
            URL
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="url"
            name="url"
            placeholder="URL"
            value={formData.projectsData.url}
            onChange={(e) => handleInputChange('url', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="description" className="flex justify-between">
            Description
          </label>
        </div>
        <div className="col2">
          <input
            type="tel"
            className="rounded-md"
            id="description"
            name="description"
            placeholder="Description"
            value={formData.projectsData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="startDate" className="flex justify-between">
            Start Date
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="startDate"
            name="startDate"
            placeholder="Start Date"
            value={formData.projectsData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="endDate" className="flex justify-between">
            End Date
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="endDate"
            name="endDate"
            placeholder="End Date"
            value={formData.projectsData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

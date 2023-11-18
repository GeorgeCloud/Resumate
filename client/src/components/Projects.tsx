import { useFormContext } from "../contexts/FormContext";
import { PagePropsType } from "../lib/types";

export default function Projects({ handleInputChange }: PagePropsType) {
  const {
    formData
  } = useFormContext();

  return (
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-6 m-8">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl">Projects Detail</h2>

      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="projectTitle" className="flex justify-between">
            Project Title
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="projectTitle"
            name="projectTitle"
            value={formData.projectsData.projectTitle}
            onChange={(e) => handleInputChange('projectTitle', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="url" className="flex justify-between">
            URL
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="url"
            name="url"
            value={formData.projectsData.url}
            onChange={(e) => handleInputChange('url', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="description" className="flex justify-between">
            Description
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="tel"
            className="rounded-md"
            id="description"
            name="description"
            value={formData.projectsData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="startDate" className="flex justify-between">
            Start Date
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="startDate"
            name="startDate"
            value={formData.projectsData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="endDate" className="flex justify-between">
            End Date
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="endDate"
            name="endDate"
            value={formData.projectsData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

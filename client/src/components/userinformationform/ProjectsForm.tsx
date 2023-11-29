import { useFormContext } from '../../contexts/FormContext';
import type { ProjectsDataType } from '../../lib/types';

export default function ProjectsForm({ entry, index }: { entry: ProjectsDataType, index: number }) {
  const { setFormData } = useFormContext();

  function handleInputChange(field: string, value: string) {
    setFormData((prevData) => ({
      ...prevData,
      projectsData: prevData.projectsData.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  return (
    <div>
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
            value={entry.projectTitle}
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
            value={entry.url}
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
            value={entry.description}
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
            value={entry.startDate}
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
            value={entry.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

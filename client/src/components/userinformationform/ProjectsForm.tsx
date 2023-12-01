import { useFormContext } from '../../contexts/FormContext';
import ContributionInput from './ContributionInput';
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

  function handleAddContribution(contribution: string) {
    setFormData((prevData) => ({
      ...prevData,
      professionalData: prevData.professionalData.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            contributions: [...(item.contributions || []), contribution]
          };
        }
        return item;
      })
    }));
  }

  return (
    <div>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="projectTitle" className="text-sm/4">
            Project Title
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            id="projectTitle"
            name="projectTitle"
            type="text"
            value={entry.projectTitle}
            onChange={(e) => handleInputChange('projectTitle', e.target.value)}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="url" className="text-sm/4">
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
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="description" className="text-sm/4">
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
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="startDate" className="text-sm/4">
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
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="endDate" className="text-sm/4">
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
      <ContributionInput onAddContribution={handleAddContribution} />
    </div>
  );
}

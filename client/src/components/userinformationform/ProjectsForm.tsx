import { useFormContext } from '../../contexts/FormContext';
import AccomplishmentInput from './AccomplishmentInput';

import type { ProjectsDataType } from '../../lib/types';
import DatesInput from './DatesInput';

export default function ProjectsForm({ entry, index, errors }: { entry: ProjectsDataType, index: number, errors: Record<string, string> }) {
  const { setFormData } = useFormContext();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      projectsData: prevData.projectsData.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    }));
  }

  return (
    <div>
      <div className="row mb-2 flex justify-between items-baseline">
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
            onChange={handleInputChange}
            className="rounded-md"
          />
          {errors.projectTitle && <span className="error">{errors.projectTitle}</span>}

        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
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
            onChange={handleInputChange}
          />
          {errors.url && <span className="error">{errors.url}</span>}

        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
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
            onChange={handleInputChange}
          />
          {errors.description && <span className="error">{errors.description}</span>}

        </div>
      </div>

      <DatesInput
        entry={entry}
        handleInputChange={handleInputChange}
        errors={errors}
      />

      <AccomplishmentInput formDataSubType='projectsData' index={index} />
      <ul>
        {entry.accomplishments?.map((accomplishment, i) => (
          <li key={i}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  );
}

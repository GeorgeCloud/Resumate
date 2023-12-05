import { useState } from 'react'
import { useFormContext } from '../../contexts/FormContext';
import { validateDate, validateNotEmpty } from '../../lib/utils';
import AccomplishmentsInput from './AccomplishmentsInput';
import type { ProjectsDataType } from '../../lib/types';

export default function ProjectsForm({ entry, index }: { entry: ProjectsDataType, index: number }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { setFormData } = useFormContext();

  function handleInputChange(field: string, value: string) {
    let isValid = true;
    // Switch statement validates the input based on the field
    switch (field) {
      case 'projectTitle':
      case 'url':
      case 'description':
        isValid = validateNotEmpty(value);
        break;
      case 'startDate':
      case 'endDate':
        isValid = validateDate(value);
        break;
    }
    if (isValid) {
      setFormData((prevData) => ({
        ...prevData,
        projectsData: prevData.projectsData.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        ),
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: '',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: `${field} is invalid`,
      }));
    }
  }

  function handleAddAccomplishments(accomplishment: string) {
    setFormData((prevData) => ({
      ...prevData,
      professionalData: prevData.professionalData.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            accomplishments: [...(item.accomplishments || []), accomplishment]
          };
        }
        return item;
      })
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
            onChange={(e) => handleInputChange('projectTitle', e.target.value)}
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
            onChange={(e) => handleInputChange('url', e.target.value)}
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
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
          {errors.description && <span className="error">{errors.description}</span>}

        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
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
          {errors.startDate && <span className="error">{errors.startDate}</span>}

        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
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
          {errors.endDate && <span className="error">{errors.endDate}</span>}
        </div>
      </div>
      <AccomplishmentsInput onAddAccomplishments={handleAddAccomplishments} />

      <ul>
        {entry.accomplishments?.map((accomplishment, i) => (
          <li key={i}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  );
}

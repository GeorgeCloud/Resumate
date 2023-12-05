import { useState } from 'react'
import { useFormContext } from '../../contexts/FormContext';
import ContributionInput from './ContributionInput';
import type { ProjectsDataType } from '../../lib/types';

export default function ProjectsForm({ entry, index }: { entry: ProjectsDataType, index: number }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { setFormData } = useFormContext();

  function handleInputChange(field: string, value: string) {
    if (validateForm()) {
      setFormData((prevData) => ({
        ...prevData,
        projectsData: prevData.projectsData.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        ),
      }));
    }
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

  const validateDate = (date: string): boolean => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  };

  function validateNotEmpty(value: string, fieldName: string): boolean {
    if (value.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${fieldName} is required`,
      }));
      return false;
    }
    return true;
  };

  function validateStartDate(startDate: string): boolean {
    if (!validateDate(startDate)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        startDate: 'Invalid Start Date',
      }));
      return false;
    }
    return true;
  };


  function validateEndDate(endDate: string): boolean {
    if (!validateDate(endDate)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        endDate: 'Invalid End Date',
      }));
      return false;
    }
    return true;
  }

  /**
   * @returns {Boolean} - returns true if no error is found. If errors are found, updated teh errors state and return false
   */

  function validateForm(): boolean {
    setErrors({}); // Reset errors
    const newErrors: Record<string, string> = {};

    if (!validateNotEmpty(entry.projectTitle, 'projectTitle')) {
      newErrors.title = 'Project Title is required';
    }

    if (!validateNotEmpty(entry.url, 'url')) {
      newErrors.url = 'URL is required';
    }

    if (!validateStartDate(entry.startDate)) {
      newErrors.startDate = 'Invalid Start Date';
    }

    if (!validateEndDate(entry.endDate)) {
      newErrors.endDate = 'Invalid End Date';
    }

    if (!validateNotEmpty(entry.description, 'description')) {
      newErrors.description = 'Description is required';
    }

    // If errors are found, update the errors state and return false
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    // If no errors are found, return true
    return true;
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
          {errors.projectTitle && <span className="error">{errors.projectTitle}</span>}

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
          {errors.url && <span className="error">{errors.url}</span>}

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
          {errors.description && <span className="error">{errors.description}</span>}

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
          {errors.startDate && <span className="error">{errors.startDate}</span>}

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
          {errors.endDate && <span className="error">{errors.endDate}</span>}
        </div>
      </div>
      <ContributionInput onAddContribution={handleAddContribution} />

      <ul>
        {entry.contributions?.map((contribution, i) => (
          <li key={i}>{contribution}</li>
        ))}
      </ul>
    </div>
  );
}

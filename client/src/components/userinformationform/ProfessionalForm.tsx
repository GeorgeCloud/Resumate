import { useState } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import ContributionInput from './ContributionInput';
import type { ProfessionalDataType } from '../../lib/types';

export default function ProfessionalForm({ entry, index }: { entry: ProfessionalDataType, index: number }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { setFormData } = useFormContext();

  function handleInputChange(field: string, value: string) {
    if (validateForm()) {
      setFormData((prevData) => ({
        ...prevData,
        professionalData: prevData.professionalData.map((item, i) =>
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

    if (!validateNotEmpty(entry.title, 'title')) {
      newErrors.title = 'Title is required';
    }

    if (!validateNotEmpty(entry.companyName, 'companyName')) {
      newErrors.companyName = 'Company Name is required';
    }

    if (!validateStartDate(entry.startDate)) {
      newErrors.startDate = 'Invalid Start Date';
    }

    if (!validateEndDate(entry.endDate)) {
      newErrors.endDate = 'Invalid End Date';
    }

    if (!validateNotEmpty(entry.cityState, 'cityState')) {
      newErrors.cityState = 'City State is required';
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
    <div className="flex flex-col items-between justify-start">

      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="title" className="text-sm/4">
            Title
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="title"
            name="title"
            value={entry.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
      </div>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="companyName" className="text-sm/4">
            Company Name
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="companyName"
            name="companyName"
            value={entry.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
          />
          {errors.companyName && <span className="error">{errors.companyName}</span>}
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
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="cityState" className="text-sm/4">
            City & State
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="cityState"
            name="cityState"
            value={entry.cityState}
            onChange={(e) => handleInputChange('cityState', e.target.value)}
          />
          {errors.cityState && <span className="error">{errors.cityState}</span>}
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

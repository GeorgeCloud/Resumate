import { useState } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import { validateDate, validateNotEmpty } from '../../lib/utils';
import AccomplishmentsInput from './AccomplishmentsInput';

import type { ProfessionalDataType } from '../../lib/types';

export default function ProfessionalForm({ entry, index }: { entry: ProfessionalDataType, index: number }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { setFormData } = useFormContext();

  function handleInputChange(field: string, value: string) {
    let isValid = true;
    switch (field) {
      case 'title':
      case 'companyName':
      case 'cityState':
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
        professionalData: prevData.professionalData.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        ),
      }));
      // Clear the error message
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
  };

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
    <div className="flex flex-col items-between justify-start">

      <div className="row mb-2 flex justify-between items-baseline">
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
      <div className="row mb-2 flex justify-between items-baseline">
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
      <div className="row mb-2 flex justify-between items-baseline">
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
      <AccomplishmentsInput onAddAccomplishments={handleAddAccomplishments} />

      <ul>
        {entry.accomplishments?.map((accomplishment, i) => (
          <li key={i}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  );
}

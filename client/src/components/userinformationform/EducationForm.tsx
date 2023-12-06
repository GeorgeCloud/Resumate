import { useState } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import type { EducationDataType } from '../../lib/types';

/**
 * The EducationForm component.
 *
 * This renders a single education entry form.
 *
 * It uses the `useFormContext` hook to access and update the form data.
 *
 * The form data for the current entry and the error messages for each field
 * are stored in the `entry` prop and the `errors` state variable, respectively.
 *
 * The `handleInputChange` function is used to handle changes to the input
 * fields. It first validates the input using the `validateInput` function, and
 * then updates the form data and clears the error message for the updated field.
 *
 * The `validateInput` function checks if the input is empty. If it is, it sets
 * an error message for the field and returns `false`. Otherwise, it returns
 * `true`.
 *
 * @returns The EducationForm component.
 */

export default function EducationForm({ entry, index }: { entry: EducationDataType, index: number }) {
  const { setFormData } = useFormContext();

  const [errors, setErrors] = useState({
    schoolName: '',
    cityState: '',
    degreeTitle: '',
    startDate: '',
    endDate: ''
  });

  function handleInputChange(field: string, value: string) {
    if (!validateInput(field, value)) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      educationData: prevData.educationData.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
    // Clear the error message
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '',
    }));
  }

  function validateInput(field: string, value: string): boolean {
    if (value.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: 'This field cannot be empty',
      }));
      return false;
    }
    return true;
  }

  return (
    <div>

      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="schoolName" className="text-sm/4 ">
            School Name
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="schoolName"
            name="schoolName"
            value={entry.schoolName}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
          />
          {errors.schoolName && <p className="error-message">{errors.schoolName}</p>}
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
          {errors.cityState && <p className="error-message">{errors.cityState}</p>}
        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="degreeTitle" className="text-sm/4">
            Degree Title
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="degreeTitle"
            name="degreeTitle"
            value={entry.degreeTitle}
            onChange={(e) => handleInputChange('degreeTitle', e.target.value)}
          />
          {errors.degreeTitle && <p className="error-message">{errors.degreeTitle}</p>}
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
          {errors.startDate && <p className="error-message">{errors.startDate}</p>}
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
          {errors.endDate && <p className="error-message">{errors.endDate}</p>}
        </div>
      </div>

    </div>
  );
}

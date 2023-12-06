import { useState } from 'react';
import { useFormContext } from "../../contexts/FormContext";
import { validateNotEmpty } from '../../lib/utils';
import { PersonalDataType } from '../../lib/types';

/**
 * The Personal component.
 *
 * This component is responsible for rendering the personal information page of
 * the form.
 *
 * It uses the `useFormContext` hook to access and update the form data.
 *
 * The form data and the error messages for each field are stored in
 * the`formData` and `errors` state variables, respectively.
 *
 * The`handleInputChange` function is used to handle changes to the input
 * fields. It first validates the input using the `validateEntry` function, and
 * then updates the `formData` and `errors` state variables, respectively.
 *
 * The`validateEntry` function checks each field in the input. If a field is
 * empty or invalid, it updates the `errors` state variable with an appropriate
 * error message.
 *
 * @returns Personal
 *
 */

export default function Personal() {
  const {
    formData,
    setFormData
  } = useFormContext();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    // Update the form data
    const updatedFormData = {
      ...formData,
      personalData: {
        ...formData.personalData,
        [field]: value
      },
    };

    // Validate the updated form data
    const isValid = validateEntry(updatedFormData.personalData);

    if (isValid) {
      // If the updated form data is valid, update the formData state
      setFormData(updatedFormData);

      // Clear the error message
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: '',
      }));
    }
  }

  function validateEntry(entry: PersonalDataType): boolean {
    let isValid = true;

    for (const field in entry) {
      const value = entry[field as keyof PersonalDataType];
      if (typeof value === 'string') {
        if (['firstName', 'lastName', 'phoneNumber', 'email', 'linkedIn', 'github', 'title'].includes(field)) {
          isValid = validateNotEmpty(value);
        }

        if (isValid) {
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
      }
    }
    return isValid;
  }

  return (
    <div className="w-full">
      <div className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-2">Personal Information</div>

      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="firstName" className="text-sm/4">
            First Name
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="firstName"
            name="firstName"
            value={formData.personalData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="lastName" className="text-sm/4">
            Last Name
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="lastName"
            name="lastName"
            value={formData.personalData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="phoneNumber" className="text-sm/4">
            Phone No.
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="tel"
            className="rounded-md"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.personalData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          />
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="email" className="text-sm/4">
            Email Address
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="email"
            className="rounded-md"
            id="email"
            name="email"
            value={formData.personalData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="linkedIn" className="text-sm/4">
            LinkedIn Username
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="linkedIn"
            name="linkedIn"
            value={formData.personalData.linkedIn}
            onChange={(e) => handleInputChange('linkedIn', e.target.value)}
          />
          {errors.linkedIn && <p className="error-message">{errors.linkedIn}</p>}
        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="github" className="text-sm/4">
            Github Username
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="github"
            name="github"
            value={formData.personalData.github}
            onChange={(e) => handleInputChange('github', e.target.value)}
          />
          {errors.github && <p className="error-message">{errors.github}</p>}
        </div>
      </div>
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
            value={formData.personalData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
        </div>
      </div>
    </div>
  )
}

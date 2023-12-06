import { useEffect, useState } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import { validateDate, validateNotEmpty } from '../../lib/utils';
import ProfessionalForm from './ProfessionalForm';
import { PiPlusBold } from "react-icons/pi";
import type { ProfessionalDataType } from '../../lib/types'

export default function Professional() {
  const { formData, setFormData } = useFormContext();
  const [errors, setErrors] = useState<Record<string, string>>({});

  /**
   * The Professional component.
   *
   * This component renders the professional information page of the form.
   *
   * It uses the `useFormContext` hook to access and update the form data.
   *
   * The `handleAddEntry` function is used to add a new entry to the professional
   * data. In order to add a new blank entry to the form data, the current entry
   * will be validated first using the validateEntry function. If the current
   * entry is valid, then it will create a new entry with empty fields and adds
   * it to the `professionalData` array in the form data, ready to be written to.
   *
   * The `validateEntry` function checks each field in the entry. If a field is
   * empty or invalid, it returns `false`. Otherwise, it returns `true`. It
   * specifically checks the 'title', 'companyName', and the `cityState` fields
   * to ensure they are not empty, and the 'startDate' and 'endDate' fields to
   * ensure they are valid dates.
   *
   * The format for a valid date is YEAR-MONTH-DAY, where year is four
   * characters, and the month and day are each two (XXXX-XX-XX).
   *
   * @returns Professional
   */

  function handleAddEntry(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const currentEntry = formData.professionalData[formData.professionalData.length - 1];

    const isValid = validateEntry(currentEntry);

    if (!isValid) {
      return;
    }

    const newEntry = {
      title: '',
      companyName: '',
      startDate: '',
      endDate: '',
      cityState: '',
      accomplishments: []
    };

    setFormData({
      ...formData,
      professionalData: [
        ...formData.professionalData,
        newEntry
      ]
    });
  }

  function validateEntry(entry: ProfessionalDataType): boolean {
    let isValid = true;

    for (const field in entry) {
      if (field === 'accomplishments') continue;

      const value = entry[field as keyof ProfessionalDataType];
      if (typeof value === 'string') {
        if (['title', 'companyName', 'cityState'].includes(field)) {
          isValid = validateNotEmpty(value);
        } else if (['startDate', 'endDate'].includes(field)) {
          isValid = validateDate(value);
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

  useEffect(() => {
    const index = formData.professionalData.length - 1

    if (index >= 0) {
      setFormData((prev) => ({
        ...prev,
        professionalData: prev.professionalData.map((item, i) => {
          return i === index
            ? {
              title: '',
              companyName: '',
              startDate: '',
              endDate: '',
              cityState: '',
              accomplishments: []
            }
            : item;
        })
      }))
    }

  }, [formData.professionalData.length]);


  return (
    <div className="w-full">
      <div className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-2">Professional Information</div>
      <div>
        <p className="text-xs italic subpixel-antialiased my-2 px-8">Click the &apos;Add Job&apos; button to add an additional position. For the &apos;Accomplishments&apos; section, please click the &apos;Add Accomplishment&apos; button between each entry.</p>
        <div className="w-full flex justify-end items-baseline py-2">
          <span className="mt-2 text-xs tracking-tight italic subpixel-antialiased mr-2">Add Job</span>
          <button onClick={handleAddEntry} className="add-entry-button">
            <PiPlusBold />
          </button>
        </div>
        {formData.professionalData.map((entry, index) => (
          <ProfessionalForm
            key={index}
            entry={entry}
            index={index}
            errors={errors}
          />
        ))}
      </div>
    </div>
  );
};

import { useEffect } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import EducationForm from './EducationForm';
import { PiPlusBold } from "react-icons/pi";

/**
 * The Education component.
 *
 * This component renders the education information page of the form.
 *
 * It uses the `useFormContext` hook to access and update the form data.
 *
 * The `handleAddEntry` function is used to add a new entry to the education
 * data. It creates a new entry with empty fields and adds it to the
 * `educationData` array in the form data.
 *
 * The `useEffect` hook is used to clear the fields of the last entry in the
 * `educationData` array whenever the component re-renders. This ensures that
 * the fields of the new entry added by the `handleAddEntry` function are
 * always empty.
 *
 * @returns Education
 */

export default function Education() {
  const { formData, setFormData } = useFormContext();

  function handleAddEntry(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const newEntry = {
      schoolName: '',
      cityState: '',
      degreeTitle: '',
      startDate: '',
      endDate: ''
    };

    setFormData({
      ...formData,
      educationData: [
        ...formData.educationData,
        newEntry
      ]
    });
  }

  useEffect(() => {
    const index = formData.educationData.length - 1;

    if (index >= 0) {
      setFormData((prev) => ({
        ...prev,
        educationData: prev.educationData.map((item, i) => {
          return i === index
            ? {
              schoolName: '',
              cityState: '',
              degreeTitle: '',
              startDate: '',
              endDate: ''
            }
            : item;
        })
      }));
    }
  }, [formData.educationData.length]);

  return (
    <div className="w-full">
      <div className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-2">Education Information</div>
      <div>
        <p className="text-xs italic subpixel-antialiased my-2 px-8">Click the &apos;Add Institution&apos; button to add an additional institution.</p>

        <div className="w-full flex justify-end items-baseline py-2">
          <span className="mt-2 text-xs tracking-tight italic subpixel-antialiased mr-2">Add Institution</span>
          <button onClick={handleAddEntry} className="add-entry-button">
            <PiPlusBold />
          </button>
        </div>
        {formData.educationData.map((entry, index) => (
          <EducationForm key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
};

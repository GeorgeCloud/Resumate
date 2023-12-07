import { useEffect, useState } from 'react';

import { useFormContext } from '../../contexts/FormContext';
import { validateDate, validateNotEmpty } from '../../lib/utils';

import ProjectsForm from './ProjectsForm';
import { PiPlusBold } from "react-icons/pi";
import type { ProjectsDataType } from '../../lib/types';

/**
 * The Projects component.
 *
 * This component is responsible for rendering the projects information page of
 * the form.
 *
 * It uses the `useFormContext` hook to access and update the form data.
 *
 * The `handleAddEntry` function is used to add a new entry to the projects
 * data. In order to add a new blank entry to the form data, the current entry
 * will be validated first using the validateEntry function. If the current
 * entry is valid, then it will create a new entry with empty fields and adds
 * it to the `projectsData` array in the form data, ready to be written to.
 *
 * The `validateEntry` function checks each field in the entry. If a field is
 * empty or invalid, it returns `false`. Otherwise, it returns `true`. It
 * specifically checks the 'projectTitle', 'url', 'description', 'startDate',
 * and 'endDate' fields to ensure they are not empty, and the 'startDate' and
 * 'endDate' fields to ensure they are valid dates.
 *
 * The format for a valid date is YEAR-MONTH-DAY, where year is four characters, and the month and day are each two (XXXX-XX-XX).
 *
 * @returns The Projects component.
 */

export default function Projects() {
  const { formData, setFormData } = useFormContext();
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleAddEntry(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const currentEntry = formData.projectsData[formData.projectsData.length - 1];

    const isValid = validateEntry(currentEntry);

    if (!isValid) {
      return;
    }

    const newEntry = {
      projectTitle: '',
      url: '',
      description: '',
      startDate: '',
      endDate: '',
      accomplishments: []
    };

    setFormData({
      ...formData,
      projectsData: [
        ...formData.projectsData,
        newEntry
      ],
    });
  };

  function validateEntry(entry: ProjectsDataType): boolean {
    let isValid = true;

    for (const field in entry) {
      if (field === 'accomplishments') continue;

      const value = entry[field as keyof ProjectsDataType];
      if (typeof value === 'string') {
        if (['projectTitle', 'url', 'description'].includes(field)) {
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
    const index = formData.projectsData.length - 1;

    if (index >= 0) {
      setFormData((prev) => ({
        ...prev,
        projectsData: prev.projectsData.map((item, i) => {
          return i === index
            ? {
              projectTitle: '',
              url: '',
              description: '',
              startDate: '',
              endDate: '',
              accomplishments: []
            }
            : item;
        })
      }));
    }
  }, [formData.projectsData.length]);

  return (
    <div className="w-full">
      <div className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-2">Projects Information</div>
      <div>
        <p className="text-xs italic subpixel-antialiased my-2 px-8">Click the &apos;Add Project&apos; button to add an additional project. For the &apos;Accomplishments&apos; section, please click the &apos;Add Accomplishment&apos; button between each entry.</p>
        <div className="w-full flex justify-end items-baseline mb-2">
          <span className="mt-2 text-xs tracking-tight italic subpixel-antialiased mr-2">Add Project</span>
          <button onClick={handleAddEntry} className="add-entry-button">
            <PiPlusBold />
          </button>
        </div>
        {formData.projectsData.map((entry, index) => (
          <ProjectsForm
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

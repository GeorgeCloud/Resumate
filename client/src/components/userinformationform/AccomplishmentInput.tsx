import { useState, ChangeEvent } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import { PiPlusBold } from "react-icons/pi";
import type { AccomplishmentInputProps } from '../../lib/types';

/**
 * The AccomplishmentInput component.
 *
 * This component renders an input field for a new accomplishment to be
 * entered, and a button to add that new accomplishment to the list of
 * accomplishments on the `formDataSubType`.
 *
 * It takes the `formDataSubType` and `index` props to identify the current
 * entry in the form data state.
 *
 * The `newAccomplishment` state variable stores the current value of the new
 * accomplishment input field.
 *
 * The `handleInputChange` function is used to handle changes to the new
 * accomplishment input field. It updates the `newAccomplishment` state
 * variable with the new value of the input field.
 *
 * The `handleAccomplishmentUpdate` function is used to handle the click event
 * of the add button. It first checks if the new accomplishment is not empty.
 * If it is not, it adds the new accomplishment to the list of accomplishments
 * in the form data and clears the new accomplishment input field.
 *
 * @param {keyof FormDataType, number}
 * @return AccomplishmentInput,
 * `handleAccomplishmentUpdate` Button
 */

export default function AccomplishmentInput({ formDataSubType, index }: AccomplishmentInputProps): JSX.Element {
  const [newAccomplishment, setNewAccomplishment] = useState('');

  const { setFormData } = useFormContext();

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setNewAccomplishment(e.target.value);
  }

  function handleAccomplishmentUpdate(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (newAccomplishment.trim() !== '') {
      setFormData((prevFormData) => {
        const updatedFormData = { ...prevFormData };
        const data = updatedFormData[formDataSubType];
        if (Array.isArray(data)) {
          const item = data[index];
          if ('accomplishments' in item) {
            item.accomplishments = [...(item.accomplishments || []), newAccomplishment];
          }
        }
        return updatedFormData;
      });
      setNewAccomplishment('');
    }
  }

  return (
    <>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="accomplishments" className="text-sm/4">
            Accomplishments
          </label>
        </div>
        <div className="col2 w-full flex justify-center">
          <input
            type="text"
            className="rounded-md"
            name="accomplishments"
            value={newAccomplishment}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-end">
        <span className="mt-2 text-xs tracking-tight italic subpixel-antialiased mr-2">Add Accomplishment</span>
        <button onClick={handleAccomplishmentUpdate} className="add-entry-button">
          <PiPlusBold />
        </button>
      </div>
    </>
  );
};

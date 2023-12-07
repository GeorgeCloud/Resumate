import { useState } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import type { StackDataType } from '../../lib/types';
import { PiPlusBold } from "react-icons/pi";

/**
 * The Stack component.
 *
 * This component renders the stack information page of the form.
 *
 * It uses the `useFormContext` hook to access and update the form data.
 *
 * The `inputValues` local state variable stores the current input values for
 * the languages, frameworks, developer tools, and libraries fields.
 *
 * The `errors` local state variable stores the error messages for these fields.
 *
 * The `handleInputChange` function is used to handle changes to the input
 * fields. It updates the `inputValues` state variable with the new value of the
 * updated field.
 *
 * The `validateInput` function checks if the input is empty. If it is, it sets
 * an error message for the field and returns `false`. Otherwise, it returns
 * `true`.
 *
 * The `handleAddEntry` function is used to add a new entry to the stack data.
 * It first validates the input using the `validateInput` function. If the
 * input is valid, it adds the input to the `stackData` array in the form data
 * and clears the input field.
 *
 * @returns Stack
 */

export default function Stack() {
  const { setFormData } = useFormContext();

  const [inputValues, setInputValues] = useState({
    languages: '',
    frameworks: '',
    developer_tools: '',
    libraries: ''
  });

  const [addedEntries, setAddedEntries] = useState({
    languages: [],
    frameworks: [],
    developer_tools: [],
    libraries: []
  });

  const [errors, setErrors] = useState({
    languages: '',
    frameworks: '',
    developer_tools: '',
    libraries: ''
  });

  function handleInputChange(category: keyof StackDataType, value: string) {
    setInputValues((previousValues) => ({
      ...previousValues,
      [category]: value
    }));
  }

  function validateInput(category: keyof StackDataType, value: string): boolean {
    if (value.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [category]: 'This field cannot be empty',
      }));
      return false;
    }
    return true;
  }

  function handleAddEntry(category: keyof StackDataType, event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!validateInput(category, inputValues[category])) {
      return;
    }
    // Update the form data with the new entry
    setFormData((prevData) => ({
      ...prevData,
      stackData: {
        ...prevData.stackData,
        [category]: [...prevData.stackData[category], inputValues[category]],
      },
    }));

    // Update the local state with the added entry
    setAddedEntries((prevEntries) => ({
      ...prevEntries,
      [category]: [...prevEntries[category], inputValues[category]]
    }));

    // Clear input values
    setInputValues((prevValues) => ({
      ...prevValues,
      [category]: '',
    }));

    // Clear error message
    setErrors((prevErrors) => ({
      ...prevErrors,
      [category]: '',
    }));
  }

  return (
    <div className="w-full">
      <div className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-2">Stack Information</div>
      <p className="text-xs italic my-2 px-8">Please add one item at a time by clicking the button with the plus sign between each entry.</p>
      <div className="row mb-2 flex justify-between items-center">
        <div className="col1">
          <label htmlFor="languages" className="text-sm/4">
            Languages
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            id="languages"
            name="languages"
            type="text"
            value={inputValues.languages}
            onChange={(e) => handleInputChange('languages', e.target.value)}
            className="rounded-md"
          />
          {errors.languages && <p className="error-message">{errors.languages}</p>}
        </div>
        <button
          onClick={(e) => handleAddEntry('languages', e)}
          className="add-entry-button mx-2">
          <PiPlusBold />
        </button>
      </div>

      <div className="row mb-2 flex justify-between items-center">
        <div className="col1">
          <label htmlFor="frameworks" className="text-sm/4">
            Frameworks
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            id="frameworks"
            name="frameworks"
            type="text"
            value={inputValues.frameworks}
            onChange={(e) => handleInputChange('frameworks', e.target.value)}
            className="p-2 border rounded-md"
          />
          {errors.frameworks && <p className="error-message">{errors.frameworks}</p>}
        </div>
        <button onClick={(e) => handleAddEntry('frameworks', e)} className="add-entry-button mx-2">
          <PiPlusBold />
        </button>
      </div>

      <div className="row mb-2 flex justify-between items-center">
        <div className="col1">
          <label htmlFor="developer_tools" className="text-sm/4">
            Developer Tools
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            id="developer_tools"
            name="developer_tools"
            type="text"
            value={inputValues.developer_tools}
            onChange={(e) => handleInputChange('developer_tools', e.target.value)}
            className="p-2 border rounded-md"
          />
          {errors.developer_tools && <p className="error-message">{errors.developer_tools}</p>}
        </div>
        <button onClick={(e) => handleAddEntry('developer_tools', e)} className="add-entry-button mx-2">
          <PiPlusBold />
        </button>
      </div>

      <div className="row mb-2 flex justify-between items-center">
        <div className="col1">
          <label htmlFor="libraries" className="text-sm/4">
            Libraries
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            id="libraries"
            name="libraries"
            type="text"
            value={inputValues.libraries}
            onChange={(e) => handleInputChange('libraries', e.target.value)}
            className="p-2 border rounded-md"
          />
          {errors.libraries && <p className="error-message">{errors.libraries}</p>}
        </div>
        <button onClick={(e) => handleAddEntry('libraries', e)} className="add-entry-button mx-2">
          <PiPlusBold />
        </button>
      </div>
      <div className="flex justify-evenly items-baseline mt-8">
        <div className="flex-col">
          <h3 className="mx-2">Languages</h3>
          {addedEntries.languages.map((entry, index) => (
            <p key={`languages_${index}`}>{entry}</p>
          ))}
        </div>
        <div className="flex-col">
          <h3 className="mx-2">Frameworks</h3>
          {addedEntries.frameworks.map((entry, index) => (
            <p key={`frameworks_${index}`}>{entry}</p>
          ))}
        </div>
        <div className="flex-col">
          <h3 className="mx-2">Developer Tools</h3>
          {addedEntries.developer_tools.map((entry, index) => (
            <p key={`developer_tools_${index}`}>{entry}</p>
          ))}
        </div>
        <div className="flex-col">
          <h3 className="mx-2">Libraries</h3>
          {addedEntries.libraries.map((entry, index) => (
            <p key={`libraries_${index}`}>{entry}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

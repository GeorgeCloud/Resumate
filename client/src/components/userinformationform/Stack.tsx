import { useState } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import type { StackDataType } from '../../lib/types';

export default function Stack() {
  const { setFormData } = useFormContext();

  const [inputValues, setInputValues] = useState({
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

  function handleAddEntry(category: keyof StackDataType) {
    setFormData((prevData) => ({
      ...prevData,
      stackData: {
        ...prevData.stackData,
        [category]: [...prevData.stackData[category], inputValues[category]],
      },
    }));
    // Clear the input value after adding data to array
    setInputValues((prevValues) => ({
      ...prevValues,
      [category]: '',
    }));
  }

  return (
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-4 m-6 w-full">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-4">Stack Form</h2>

      <div className="row mb-4 flex justify-between">
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
            className="p-2 border rounded-md"
          />
          <button onClick={() => handleAddEntry('languages')}>Add</button>
        </div>
      </div>

      <div className="row mb-4 flex justify-between">
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
          <button onClick={() => handleAddEntry('frameworks')}>Add</button>
        </div>
      </div>

      <div className="row mb-4 flex justify-between">
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
          <button onClick={() => handleAddEntry('developer_tools')}>Add</button>
        </div>
      </div>

      <div className="row mb-4 flex justify-between">
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
          <button onClick={() => handleAddEntry('libraries')}>Add</button>
        </div>
      </div>
    </div>
  );
}

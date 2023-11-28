import { ChangeEvent } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import type { StackDataType, FormDataType } from '../../lib/types';


export default function Stack() {
  const { formData, setFormData } = useFormContext();
  const {
    languages,
    frameworks,
    developer_tools,
    libraries
  } = formData.stackData;

  const handleArrayInputChange = (
    field: keyof StackDataType,
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const updateFormData = function updateForm(prev: FormDataType) {
      const updatedStackData = { ...prev.stackData };
      const stackDataProperty = updatedStackData[field];
      if (Array.isArray(stackDataProperty)) {
        stackDataProperty[index] = value;
      }
      const newStackData = { ...prev, stackData: updatedStackData };

      return newStackData;
    }

    setFormData(updateFormData);

  }

  return (
    <div>
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="languages">Languages</label>
        </div>
        <div className="col2 flex justify-center">
          {languages.map((language, index) => (
            <input
              key={index}
              type="text"
              className="rounded-md"
              value={language}
              onChange={handleArrayInputChange('languages', index)}
            />
          ))}
        </div>
      </div>
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="frameworks">Frameworks</label>
        </div>
        <div className="col2 flex justify-center">
          {frameworks.map((framework, index) => (
            <input
              key={index}
              type="text"
              className="rounded-md"
              value={framework}
              onChange={handleArrayInputChange('frameworks', index)}
            />
          ))}
        </div>
      </div>
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="developer_tools">Developer Tools</label>
        </div>
        <div className="col2 flex justify-center">
          {developer_tools.map((tool, index) => (
            <input
              key={index}
              type="text"
              className="rounded-md"
              value={tool}
              onChange={handleArrayInputChange('developer_tools', index)}
            />
          ))}
        </div>
      </div>
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="libraries">Libraries</label>
        </div>
        <div className="col2 flex justify-center">
          {libraries.map((library, index) => (
            <input
              key={index}
              type="text"
              className="rounded-md"
              value={library}
              onChange={handleArrayInputChange('libraries', index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

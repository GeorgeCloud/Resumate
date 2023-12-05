import { useState, ChangeEvent } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import { PiPlusBold } from "react-icons/pi";
import type { FormDataType } from '../../lib/types';

interface AccomplishmentInputProps {
  formDataSubType: keyof FormDataType;
  index: number;
}

export default function AccomplishmentInput({ formDataSubType, index }: AccomplishmentInputProps) {
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
    <section>
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
    </section>
  );
};

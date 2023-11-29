import { useEffect } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import ProfessionalForm from './ProfessionalForm';
import { PiPlusBold } from "react-icons/pi";

export default function Professional() {
  const { formData, setFormData } = useFormContext();

  function handleAddEntry(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const newEntry = {
      title: '',
      companyName: '',
      startDate: '',
      endDate: '',
      cityState: ''
    };

    setFormData({
      ...formData,
      professionalData: [
        ...formData.professionalData,
        newEntry
      ]
    });
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
              cityState: ''
            }
            : item;
        })
      }))
    }

  }, [formData.professionalData.length]);


  return (
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-4 m-6">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl">Professional Information</h2>
      <div>
        <button onClick={handleAddEntry}><PiPlusBold /></button>
        {formData.professionalData.map((entry, index) => (
          <ProfessionalForm key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
};

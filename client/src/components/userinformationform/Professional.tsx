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
      cityState: '',
      contribution1: '',
      contribution2: '',
      contribution3: ''
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
              cityState: '',
              contribution1: '',
              contribution2: '',
              contribution3: ''
            }
            : item;
        })
      }))
    }

  }, [formData.professionalData.length]);


  return (
    <div className="">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-4">Professional Information</h2>
      <div>
        <div className="w-full flex justify-end items-baseline py-2">
          <span className="mt-2 text-xs tracking-tight italic subpixel-antialiased mr-2">Add Job</span>
          <button onClick={handleAddEntry} className="add-entry-button">
            <PiPlusBold />
          </button>
        </div>
        {formData.professionalData.map((entry, index) => (
          <ProfessionalForm key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
};

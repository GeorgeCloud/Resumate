import { useEffect } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import EducationForm from './EducationForm';
import { PiPlusBold } from "react-icons/pi";

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
    <div className="">
      <div className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-4">Education Information</div>
      <div>
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

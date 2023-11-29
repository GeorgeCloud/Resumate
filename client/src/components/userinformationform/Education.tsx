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
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-4 m-6">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl">Education Information</h2>
      <div>
        <button onClick={handleAddEntry}><PiPlusBold /></button>
        {formData.educationData.map((entry, index) => (
          <EducationForm key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
};

import { useFormContext } from '../../contexts/FormContext';
import EducationForm from './EducationForm';
import { PiPlusBold } from "react-icons/pi";

export default function Education() {
  const { formData, setFormData } = useFormContext();

  function handleAddEntry() {
    setFormData({
      ...formData,
      "Education Data": [
        ...formData["Education Data"],
        {
          schoolName: '',
          cityState: '',
          degreeTitle: '',
          startDate: '',
          endDate: '',
        },
      ],
    });
  };

  return (
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-4 m-6">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl">Education Detail</h2>
      <div>
        <button onClick={handleAddEntry}><PiPlusBold /></button>
        {formData["Education Data"].map((entry, index) => (
          <EducationForm key={index} entry={entry} />
        ))}
      </div>
    </div>
  );
};

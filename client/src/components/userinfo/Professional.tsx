import { useFormContext } from '../../contexts/FormContext';
import ProfessionalForm from './ProfessionalForm';
import { PiPlusBold } from "react-icons/pi";

export default function Professional() {
  const { formData, setFormData } = useFormContext();

  function handleAddEntry() {
    setFormData({
      ...formData,
      "Professional Data": [
        ...formData["Professional Data"],
        {
          title: '',
          companyName: '',
          startDate: '',
          endDate: '',
          cityState: '',
        },
      ],
    });
  };

  return (
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-4 m-6">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl">Professional Detail</h2>
      <div>
        <button onClick={handleAddEntry}><PiPlusBold /></button>
        {formData["Professional Data"].map((entry, index) => (
          <ProfessionalForm key={index} entry={entry} />
        ))}
      </div>
    </div>
  );
};

import { useFormContext } from '../../contexts/FormContext';
import ProjectsForm from './ProjectsForm';
import { PiPlusBold } from "react-icons/pi";

export default function Projects() {
  const { formData, setFormData } = useFormContext();

  function handleAddEntry() {
    setFormData({
      ...formData,
      "Projects Data": [
        ...formData["Projects Data"],
        {
          projectTitle: '',
          url: '',
          description: '',
          startDate: '',
          endDate: '',
        },
      ],
    });
  };

  return (
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-4 m-6">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl">Projects Detail</h2>
      <div>
        <button onClick={handleAddEntry}><PiPlusBold /></button>
        {formData["Projects Data"].map((entry, index) => (
          <ProjectsForm key={index} entry={entry} />
        ))}
      </div>
    </div>
  );
};

import { useFormContext } from '../../contexts/FormContext';
import ProjectsForm from './ProjectsForm';
import { PiPlusBold } from "react-icons/pi";

export default function Projects() {
  const { formData, setFormData } = useFormContext();

  function handleAddEntry() {
    setFormData({
      ...formData,
      projectsData: [
        ...formData.projectsData,
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
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl">Projects Information</h2>
      <div>
        <button onClick={handleAddEntry}><PiPlusBold /></button>
        {formData.projectsData.map((entry, index) => (
          <ProjectsForm key={index} entry={entry} />
        ))}
      </div>
    </div>
  );
};

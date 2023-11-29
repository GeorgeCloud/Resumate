import { useEffect } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import ProjectsForm from './ProjectsForm';
import { PiPlusBold } from "react-icons/pi";

export default function Projects() {
  const { formData, setFormData } = useFormContext();

  function handleAddEntry(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const newEntry = {
      projectTitle: '',
      url: '',
      description: '',
      startDate: '',
      endDate: ''
    };

    setFormData({
      ...formData,
      projectsData: [
        ...formData.projectsData,
        newEntry
      ],
    });
  };

  useEffect(() => {
    const index = formData.projectsData.length - 1;

    if (index >= 0) {
      setFormData((prev) => ({
        ...prev,
        projectsData: prev.projectsData.map((item, i) => {
          return i === index
            ? {
              projectTitle: '',
              url: '',
              description: '',
              startDate: '',
              endDate: ''
            }
            : item;
        })
      }));
    }
  }, [formData.projectsData.length]);

  return (
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-4 m-6 w-full">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-4">Projects Information</h2>
      <div>
        <button onClick={handleAddEntry}><PiPlusBold /></button>
        {formData.projectsData.map((entry, index) => (
          <ProjectsForm key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
};

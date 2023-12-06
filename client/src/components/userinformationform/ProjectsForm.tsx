import { useFormContext } from '../../contexts/FormContext';
import AccomplishmentInput from './AccomplishmentInput';

import type { ProjectsDataType } from '../../lib/types';
import DatesInput from './DatesInput';

/**
 * The ProjectsForm component.
 *
 * This component renders a single project entry form.
 *
 * It uses the `useFormContext` hook to access and update the form data.
 *
 * The form data for the current entry and the error messages for each field
 * are stored in the `entry` prop and the `errors` state variable, respectively.
 *
 * The `handleInputChange` function is used to handle changes to the input
 * fields. It first validates the input using the `validateInput` function, and
 * then updates the form data and clears the error message for the updated
 * field.
 *
 * The `validateInput` function checks if the input is empty. If it is, it sets
 * an error message for the field and returns `false`. Otherwise, it returns
 * `true`.
 *
 * The `DatesInput` component is used to handle the input for the start and end
 * dates. It takes the `entry`, `handleInputChange`, and `errors` props to
 * manage the dates for the current entry.
 *
 * The `AccomplishmentInput` component is used to handle the input for the
 * accomplishments field. It takes the `formDataSubType` and `index` props to
 * identify the current entry in the form data.
 *
 * As the user adds accomplishments to the array, the list is displayed
 * to help track what they have added or not added. When the `Next` page is
 * clicked, the form data will be updated with all items from the displayed
 * list.
 *
 * @returns ProjectsForm
 */


export default function ProjectsForm({ entry, index, errors }: { entry: ProjectsDataType, index: number, errors: Record<string, string> }) {
  const { setFormData } = useFormContext();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      projectsData: prevData.projectsData.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    }));
  }

  return (
    <div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="projectTitle" className="text-sm/4">
            Project Title
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            id="projectTitle"
            name="projectTitle"
            type="text"
            value={entry.projectTitle}
            onChange={handleInputChange}
            className="rounded-md"
          />
          {errors.projectTitle && <span className="error">{errors.projectTitle}</span>}

        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="url" className="text-sm/4">
            URL
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="url"
            name="url"
            value={entry.url}
            onChange={handleInputChange}
          />
          {errors.url && <span className="error">{errors.url}</span>}

        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="description" className="text-sm/4">
            Description
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="tel"
            className="rounded-md"
            id="description"
            name="description"
            value={entry.description}
            onChange={handleInputChange}
          />
          {errors.description && <span className="error">{errors.description}</span>}

        </div>
      </div>

      <DatesInput
        entry={entry}
        handleInputChange={handleInputChange}
        errors={errors}
      />

      <AccomplishmentInput formDataSubType='projectsData' index={index} />
      <ul>
        {entry.accomplishments?.map((accomplishment, i) => (
          <li key={i}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  );
}

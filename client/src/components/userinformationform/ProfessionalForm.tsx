import { useFormContext } from '../../contexts/FormContext';
import DatesInput from './DatesInput';
import AccomplishmentInput from './AccomplishmentInput';

import type { ProfessionalDataType } from '../../lib/types';

/**
 * The ProfessionalForm component.
 *
 * This component renders a single professional entry form.
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
 * @returns ProfessionalForm
 */

export default function ProfessionalForm({ entry, index, errors }: { entry: ProfessionalDataType, index: number, errors: Record<string, string> }) {
  const { setFormData } = useFormContext();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      professionalData: prevData.professionalData.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    }));
  }

  return (
    <div className="flex flex-col items-between justify-start">

      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="title" className="text-sm/4">
            Title
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="title"
            name="title"
            value={entry.title}
            onChange={handleInputChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="companyName" className="text-sm/4">
            Company Name
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="companyName"
            name="companyName"
            value={entry.companyName}
            onChange={handleInputChange}
          />
          {errors.companyName && <span className="error">{errors.companyName}</span>}
        </div>
      </div>
      <DatesInput
        entry={entry}
        handleInputChange={handleInputChange}
        errors={errors}
      />
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="cityState" className="text-sm/4">
            City & State
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="cityState"
            name="cityState"
            value={entry.cityState}
            onChange={handleInputChange}
          />
          {errors.cityState && <span className="error">{errors.cityState}</span>}
        </div>
      </div>

      <AccomplishmentInput formDataSubType='professionalData' index={index} />

      <ul>
        {entry.accomplishments?.map((accomplishment, i) => (
          <li key={i}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  );
}

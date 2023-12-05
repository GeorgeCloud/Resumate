import { useFormContext } from '../../contexts/FormContext';
import DatesInput from './DatesInput';
import AccomplishmentInput from './AccomplishmentInput';

import type { ProfessionalDataType } from '../../lib/types';

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

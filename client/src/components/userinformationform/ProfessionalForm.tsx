import { useFormContext } from '../../contexts/FormContext';
import type { ProfessionalDataType } from '../../lib/types';

export default function ProfessionalForm({ entry, index }: { entry: ProfessionalDataType, index: number }) {
  const { setFormData } = useFormContext();

  function handleInputChange(field: string, value: string) {
    setFormData((prevData) => ({
      ...prevData,
      professionalData: prevData.professionalData.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  return (
    <div className="flex flex-col items-between justify-start">

      <div className="row mb-4 flex justify-between">
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
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4 flex justify-between">
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
            onChange={(e) => handleInputChange('companyName', e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="startDate" className="text-sm/4">
            Start Date
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="startDate"
            name="startDate"
            value={entry.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="endDate" className="text-sm/4">
            End Date
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="endDate"
            name="endDate"
            value={entry.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4 flex justify-between">
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
            onChange={(e) => handleInputChange('cityState', e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="contribution1" className="text-sm/4">
            Contribution 1
          </label>
        </div>
        <div className="col2 flex justify-center">
          <textarea
            className="rounded-md"
            id="contribution1"
            name="contribution1"
            value={entry.contribution1}
            onChange={(e) => handleInputChange('contribution1', e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="contribution2" className="text-sm/4">
            Contribution 2
          </label>
        </div>
        <div className="col2 flex justify-center">
          <textarea
            className="rounded-md"
            id="contribution2"
            name="contribution2"
            value={entry.contribution2}
            onChange={(e) => handleInputChange('contribution2', e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="contribution3" className="text-sm/4">
            Contribution 3
          </label>
        </div>
        <div className="col2 flex justify-center">
          <textarea
            className="rounded-md"
            id="contribution3"
            name="contribution3"
            value={entry.contribution3}
            onChange={(e) => handleInputChange('contribution3', e.target.value)}
          />
        </div>
      </div>

    </div>
  );
}

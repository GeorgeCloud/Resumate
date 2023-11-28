import { useFormContext } from '../../contexts/FormContext';
import type { ProfessionalDataType } from '../../lib/types';

export default function ProfessionalForm({ entry }: { entry: ProfessionalDataType }) {
  const { setFormData } = useFormContext();

  function handleInputChange(field: string, value: string) {
    setFormData((prevData) => ({
      ...prevData,
      professionalData: prevData.professionalData.map((item) =>
        item === entry ? { ...item, [field]: value } : item
      ),
    }));
  };
  return (
    <div>

      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="title" className="flex justify-between">
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
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="companyName" className="flex justify-between">
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
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="startDate" className="flex justify-between">
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
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="endDate" className="flex justify-between">
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
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="cityState" className="flex justify-between">
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

    </div>
  );
}

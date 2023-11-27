import { useFormContext } from '../../contexts/FormContext';
import type { EducationDataType } from '../../lib/types';

export default function EducationForm({ entry }: { entry: EducationDataType }) {
  const { setFormData } = useFormContext();

  function handleInputChange(field: string, value: string) {
    setFormData((prevData) => ({
      ...prevData,
      "Education Data": prevData["Education Data"].map((item) =>
        item === entry ? { ...item, [field]: value } : item
      ),
    }));
  }

  return (
    <div>

      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="schoolName">
            School Name
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="schoolName"
            name="schoolName"
            value={entry.schoolName}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="cityState" className="flex justify-between text-sm/4 ml-2">
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
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="degreeTitle" className="flex justify-between text-sm/4 ml-2">
            Degree Title
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="degreeTitle"
            name="degreeTitle"
            value={entry.degreeTitle}
            onChange={(e) => handleInputChange('degreeTitle', e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col1 px-6">
          <label htmlFor="startDate" className="flex justify-between text-sm/4 ml-2">
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
          <label htmlFor="endDate" className="flex justify-between text-sm/4 ml-2">
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

    </div>
  );
}

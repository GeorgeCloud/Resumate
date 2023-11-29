import { useFormContext } from '../../contexts/FormContext';
import type { EducationDataType } from '../../lib/types';

export default function EducationForm({ entry, index }: { entry: EducationDataType, index: number }) {
  const { setFormData } = useFormContext();

  function handleInputChange(field: string, value: string) {
    setFormData((prevData) => ({
      ...prevData,
      educationData: prevData.educationData.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  }

  return (
    <div>

      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="schoolName" className="text-sm/4">
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
          <label htmlFor="degreeTitle" className="text-sm/4">
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

    </div>
  );
}

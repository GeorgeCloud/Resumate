import { useFormContext } from '../../contexts/FormContext';

export default function Education() {
  const {
    formData,
    setFormData
  } = useFormContext();

  function handleInputChange(field: string, value: string) {
    setFormData({
      ...formData,
      educationData: {
        ...formData.educationData,
        [field]: value,
      },
    });
  }

  return (
    <div className="page">
      <h2 className="font-normal underline underline-offset-1 decoration-1 text-xl">Education Detail</h2>

      <div className="row">
        <div className="col1">
          <label htmlFor="schoolName" className="flex justify-between text-sm/4 ml-2">
            School Name
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="schoolName"
            name="schoolName"
            placeholder="School Name"
            value={formData.educationData.schoolName}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="cityState" className="flex justify-between text-sm/4 ml-2">
            City & State
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="cityState"
            name="cityState"
            placeholder="City & State"
            value={formData.educationData.cityState}
            onChange={(e) => handleInputChange('cityState', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="degreeTitle" className="flex justify-between text-sm/4 ml-2">
            Degree Title
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="degreeTitle"
            name="degreeTitle"
            placeholder="Degree Title"
            value={formData.educationData.degreeTitle}
            onChange={(e) => handleInputChange('degreeTitle', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="startDate" className="flex justify-between text-sm/4 ml-2">
            Start Date
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="startDate"
            name="startDate"
            placeholder="Start Date"
            value={formData.educationData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="endDate" className="flex justify-between text-sm/4 ml-2">
            End Date
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="endDate"
            name="endDate"
            placeholder="End Date"
            value={formData.educationData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </div>
      </div>

    </div>
  )
}

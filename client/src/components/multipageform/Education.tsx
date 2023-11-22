import { useFormContext } from '../../contexts/FormContext';

export default function Education() {
  const {
    formData,
    setFormData
  } = useFormContext();

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      educationData: {
        ...formData.educationData,
        [field]: value
      },
    });
  }

  return (
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-6 m-8">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl">Education Detail</h2>

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
            value={formData.educationData.schoolName}
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
            value={formData.educationData.cityState}
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
            value={formData.educationData.degreeTitle}
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
            value={formData.educationData.startDate}
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
            value={formData.educationData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </div>
      </div>

    </div>
  )
}

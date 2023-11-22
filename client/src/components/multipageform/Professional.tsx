import { useFormContext } from "../../contexts/FormContext";

export default function Professional() {
  const {
    formData,
    setFormData
  } = useFormContext();

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      professionalData: {
        ...formData.professionalData,
        [field]: value
      },
    });
  }
  return (
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-6 m-8">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl">Professional Detail</h2>

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
            value={formData.professionalData.title}
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
            value={formData.professionalData.companyName}
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
            value={formData.professionalData.startDate}
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
            value={formData.professionalData.endDate}
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
            value={formData.professionalData.cityState}
            onChange={(e) => handleInputChange('cityState', e.target.value)}
          />
        </div>
      </div>

    </div>
  )
}

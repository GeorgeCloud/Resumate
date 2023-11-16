import { useFormContext } from "../../contexts/FormContext";

export default function Professional() {
  const {
    formData,
    setFormData
  } = useFormContext();

  function handleInputChange(field: string, value: string) {
    setFormData({
      ...formData,
      professionalData: {
        ...formData.professionalData,
        [field]: value,
      }
    })
  }

  return (
    <div className="page">
      <h2 className="font-normal underline underline-offset-1 decoration-1 text-xl">Professional Detail</h2>

      <div className="row">
        <div className="col1">
          <label htmlFor="title" className="flex justify-between">
            Title
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="title"
            name="title"
            placeholder="Title"
            value={formData.professionalData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="companyName" className="flex justify-between">
            Company Name
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            value={formData.professionalData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="startDate" className="flex justify-between">
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
            value={formData.professionalData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="endDate" className="flex justify-between">
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
            value={formData.professionalData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="cityState" className="flex justify-between">
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
            value={formData.professionalData.cityState}
            onChange={(e) => handleInputChange('cityState', e.target.value)}
          />
        </div>
      </div>

    </div>
  )
}

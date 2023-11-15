import { useFormContext } from "../../contexts/FormContext";

export default function Professional() {
  const {
    formData,
    setFormData
  } = useFormContext();

  function handleInputChange(field: string, value: string) {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        [field]: value,
      }
    })
  }

  return (
    <div className="max-w-lg w-3/4 mx-auto">
      <div className="w-full mx-auto flex flex-col">
        <h2 className="text-2xl/3 my-4">Professional Detail</h2>
        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Title
          <input
            type="text"
            className="rounded-md"
            value={formData.professionalData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Company Name
          <input
            type="url"
            value={formData.professionalData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Start Date
          <input
            type="text"
            value={formData.professionalData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          End Date
          <input
            type="text"
            value={formData.professionalData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          City & State
          <input
            type="text"
            value={formData.professionalData.cityState}
            onChange={(e) => handleInputChange('cityState', e.target.value)}
          />
        </label>
      </div>

    </div>
  )
}

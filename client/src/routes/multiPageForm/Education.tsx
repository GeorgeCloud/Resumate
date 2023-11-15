import { useFormContext } from '../../contexts/FormContext';

export default function Education() {
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
      },
    });
  }

  return (
    <div className="max-w-lg w-3/4 mx-auto">


      <div className="w-full mx-auto flex flex-col items-center">
        <h2 className="">Education Detail</h2>
        <label className="">
          School Name
          <input
            type="text"
            className="rounded-md"
            value={formData.educationData.schoolName}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          City & State
          <input
            type="tel"
            value={formData.educationData.cityState}
            onChange={(e) => handleInputChange('cityState', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Degree Title
          <input
            type="text"
            value={formData.educationData.degreeTitle}
            onChange={(e) => handleInputChange('degreeTitle', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Start Date
          <input
            type="text"
            value={formData.educationData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          End Date
          <input
            type="text"
            value={formData.educationData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </label>
      </div>


    </div>
  )
}

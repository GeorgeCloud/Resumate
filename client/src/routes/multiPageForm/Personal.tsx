import { useFormContext } from "../../contexts/FormContext";

export default function Personal() {
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
      <div className="w-full mx-auto flex flex-col">
        <h2 className="">Personal Detail</h2>
        <label className="">
          First Name
          <input
            type="text"
            className="rounded-md"
            value={formData.personalData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Last Name
          <input
            type="text"
            value={formData.personalData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Phone No.
          <input
            type="tel"
            value={formData.personalData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Email Address
          <input
            type="email"
            value={formData.personalData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          LinkedIn Username
          <input
            type="text"
            value={formData.personalData.linkedIn}
            onChange={(e) => handleInputChange('linkedIn', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          GitHub Username
          <input
            type="text"
            value={formData.personalData.github}
            onChange={(e) => handleInputChange('github', e.target.value)}
          />
        </label>

        <label className='w-full flex justify-between my-4 py-2 px-4'>
          Title
          <input
            type="text"
            value={formData.personalData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </label>
      </div>





    </div>
  )
}

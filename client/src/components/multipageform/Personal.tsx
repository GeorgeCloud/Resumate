import { useFormContext } from "../../contexts/FormContext";

export default function Personal() {
  const {
    formData,
    setFormData
  } = useFormContext();

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        [field]: value
      },
    });
  }

  return (
    <div className="border-neutral-600 border-2 rounded-md shadow-md p-4 m-6">
      <h2 className="text-center font-normal underline underline-offset-1 decoration-1 text-xl">Personal Detail</h2>

      <div className="row mb-2">
        <div className="col1 px-6">
          <label htmlFor="firstName">
            First Name
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="firstName"
            name="firstName"
            value={formData.personalData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col1 px-6">
          <label htmlFor="lastName">
            Last Name
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="lastName"
            name="lastName"
            value={formData.personalData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col1 px-6">
          <label htmlFor="phoneNumber">
            Phone No.
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="tel"
            className="rounded-md"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.personalData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col1 px-6">
          <label htmlFor="email">
            Email Address
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="email"
            className="rounded-md"
            id="email"
            name="email"
            value={formData.personalData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col1 px-6">
          <label htmlFor="linkedIn">
            LinkedIn Username
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="linkedIn"
            name="linkedIn"
            value={formData.personalData.linkedIn}
            onChange={(e) => handleInputChange('linkedIn', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col1 px-6">
          <label htmlFor="github">
            Github Username
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="github"
            name="github"
            value={formData.personalData.github}
            onChange={(e) => handleInputChange('github', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col1 px-6">
          <label htmlFor="title">
            Title
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="title"
            name="title"
            value={formData.personalData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

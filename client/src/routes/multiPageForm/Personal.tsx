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
    <div className="container">
      <h2 className="font-normal underline underline-offset-1 decoration-1 text-xl">Personal Detail</h2>

      <div className="row">
        <div className="col1">
          <label htmlFor="firstName" className="flex justify-between text-sm/4 ml-2">
            First Name
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.personalData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="lastName" className="flex justify-between text-sm/4 ml-2">
            Last Name
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.personalData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="phoneNumber" className="flex justify-between text-sm/4 ml-2">
            Phone No.
          </label>
        </div>
        <div className="col2">
          <input
            type="tel"
            className="rounded-md"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone No."
            value={formData.personalData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="email" className="flex justify-between text-sm/4 ml-2">
            Email Address
          </label>
        </div>
        <div className="col2">
          <input
            type="email"
            className="rounded-md"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.personalData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="linkedIn" className="flex justify-between text-sm/4 ml-2">
            LinkedIn Username
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="linkedIn"
            name="linkedIn"
            placeholder="LinkedIn Username"
            value={formData.personalData.linkedIn}
            onChange={(e) => handleInputChange('linkedIn', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="github" className="flex justify-between text-sm/4 ml-2">
            Github Username
          </label>
        </div>
        <div className="col2">
          <input
            type="text"
            className="rounded-md"
            id="github"
            name="github"
            placeholder="Github Username"
            value={formData.personalData.github}
            onChange={(e) => handleInputChange('github', e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <label htmlFor="title" className="flex justify-between text-sm/4 ml-2">
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
            value={formData.personalData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

import { useFormContext } from '../contexts/FormContext';

export default function PersonalDetail() {
  const { personalData, setPersonalData, wholeFormData, nextPage, prevPage } = useFormContext();

  function handleNext() {
    // TODO: handle form validation
    nextPage(wholeFormData);
  };

  return (
    <div>
      <h2>Personal Detail</h2>
      <label>
        First Name:
        <input
          type="text"
          value={personalData.firstName}
          onChange={(e) => (
            setPersonalData({
              ...personalData,
              firstName: e.target.value
            })
          )}
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          value={personalData.lastName}
          onChange={(e) => (
            setPersonalData({
              ...personalData,
              lastName: e.target.value
            })
          )}
        />
      </label>

      <label>
        Phone No.:
        <input
          type="tel"
          value={personalData.phoneNumber}
          onChange={(e) => (
            setPersonalData({
              ...personalData,
              phoneNumber: e.target.value
            })
          )}
        />
      </label>

      <label>
        Email Address:
        <input
          type="email"
          value={personalData.email}
          onChange={(e) => (
            setPersonalData({
              ...personalData,
              email: e.target.value
            })
          )}
        />
      </label>

      <label>
        LinkedIn Username:
        <input
          type="text"
          value={personalData.linkedIn}
          onChange={(e) => (
            setPersonalData({
              ...personalData,
              linkedIn: e.target.value
            })
          )}
        />
      </label>

      <label>
        GitHub Username:
        <input
          type="text"
          value={personalData.github}
          onChange={(e) => (
            setPersonalData({
              ...personalData,
              github: e.target.value
            })
          )}
        />
      </label>

      <label>
        Title:
        <input
          type="text"
          value={personalData.title}
          onChange={(e) => (
            setPersonalData({
              ...personalData,
              title: e.target.value
            })
          )}
        />
      </label>

      <button onClick={handleNext}>Continue & Save</button>
      <button onClick={prevPage}>Previous</button>

    </div>
  )
}

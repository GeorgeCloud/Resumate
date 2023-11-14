import { useFormContext } from '../contexts/FormContext';

export default function EducationDetail() {
  const {
    educationData,
    setEducationData,
    wholeFormData,
    nextPage,
    prevPage
  } = useFormContext();

  function handleNext() {
    // TODO: handle form validation
    nextPage(wholeFormData);
  };

  return (
    <div>
      <h2>Education Detail</h2>
      <label>
        Schoole Name:
        <input
          type="text"
          value={educationData.schoolName}
          onChange={(e) => setEducationData({
            ...educationData,
            schoolName: e.target.value
          })}
        />
      </label>

      <label>
        City & State:
        <input
          type="text"
          value={educationData.cityState}
          onChange={(e) => setEducationData({
            ...educationData,
            cityState: e.target.value
          })}
        />
      </label>

      <label>
        Degree Title:
        <input
          type="text"
          value={educationData.degreeTitle}
          onChange={(e) => setEducationData({
            ...educationData,
            degreeTitle: e.target.value
          })}
        />
      </label>


      <label>
        Start Date:
        <input
          type="text"
          value={educationData.startDate}
          onChange={(e) => setEducationData({
            ...educationData,
            startDate: e.target.value
          })}
        />
      </label>

      <label>
        End Date:
        <input
          type="text"
          value={educationData.endDate}
          onChange={(e) => setEducationData({
            ...educationData,
            endDate: e.target.value
          })}
        />
      </label>

      <button onClick={handleNext}>Continue & Save</button>
      <button onClick={prevPage}>Previous</button>
    </div>
  );
}

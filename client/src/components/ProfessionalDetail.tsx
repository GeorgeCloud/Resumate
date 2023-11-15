import { useFormContext } from '../contexts/FormContext';

export default function ProfessionalDetail() {
  const {
    professionalData,
    setProfessionalData,
  } = useFormContext();

  return (
    <div>
      <h2>Professional Detail</h2>
      <label>
        Title:
        <input
          type="text"
          value={professionalData.title}
          onChange={(e) => setProfessionalData({
            ...professionalData,
            title: e.target.value
          })}
        />
      </label>

      <label>
        Name of Company:
        <input
          type="text"
          value={professionalData.companyName}
          onChange={(e) => setProfessionalData({
            ...professionalData,
            companyName: e.target.value
          })}
        />
      </label>

      <label>
        Start Date:
        <input
          type="text"
          value={professionalData.startDate}
          onChange={(e) => setProfessionalData({
            ...professionalData,
            startDate: e.target.value
          })}
        />
      </label>

      <label>
        End Date:
        <input
          type="text"
          value={professionalData.endDate}
          onChange={(e) => setProfessionalData({
            ...professionalData,
            endDate: e.target.value
          })}
        />
      </label>

      <label>
        City & State:
        <input
          type="text"
          value={professionalData.cityState}
          onChange={(e) => setProfessionalData({
            ...professionalData,
            cityState: e.target.value
          })}
        />
      </label>
    </div>
  );
}

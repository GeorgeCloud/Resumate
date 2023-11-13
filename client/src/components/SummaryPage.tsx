import { useFormContext } from '../contexts/FormContext'

export default function SummaryPage() {
  const { formData, prevPage } = useFormContext();

  return (
    <div>
      <h2>Page 4</h2>
      <p>Review and submit:</p>
      <p>Page 1: {formData.page1}</p>
      <p>Page 2: {formData.page2}</p>
      <p>Page 3: {formData.page3}</p>
      <p>Page 4: {formData.page4}</p>
      <button onClick={prevPage}>Previous</button>
      <button onClick={() => alert('Form submitted!')}>Submit</button>
    </div>
  );
}

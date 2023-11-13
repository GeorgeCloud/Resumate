import { useFormContext } from '../contexts/FormContext';

export default function FormPage3() {
  const { formData, nextPage, prevPage } = useFormContext();

  return (
    <div>
      <h2>Page 3</h2>
      <label>
        Field on Page 3:
        <input
          type="text"
          value={formData.page3}
          onChange={(e) => nextPage({ page3: e.target.value })}
        />
      </label>
      <button onClick={prevPage}>Previous</button>
    </div>
  );
}

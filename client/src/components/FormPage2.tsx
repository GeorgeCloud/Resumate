import { useFormContext } from '../contexts/FormContext';

export default function FormPage2() {
  const { formData, nextPage, prevPage } = useFormContext();

  return (
    <div>
      <h2>Page 2</h2>
      <label>
        Field on Page 2:
        <input
          type="text"
          value={formData.page2}
          onChange={(e) => nextPage({ page2: e.target.value })}
        />
      </label>
      <button onClick={prevPage}>Previous</button>
    </div>
  );
}

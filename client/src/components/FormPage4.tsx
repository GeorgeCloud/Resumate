import { useFormContext } from '../contexts/FormContext';

export default function FormPage4() {
  const { formData, nextPage, prevPage } = useFormContext();

  return (
    <div>
      <h2>Page 4</h2>
      <label>
        Field on Page 4:
        <input
          type="text"
          value={formData.page4}
          onChange={(e) => nextPage({ page4: e.target.value })}
        />
      </label>
      <button onClick={prevPage}>Previous</button>
    </div>
  );
}

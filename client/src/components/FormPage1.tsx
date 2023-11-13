import { useFormContext } from '../contexts/FormContext';

export default function FormPage1() {
  const { formData, nextPage } = useFormContext();

  return (
    <div>
      <h2>Page 1</h2>
      <label>
        Field on Page 1:
        <input
          type="text"
          value={formData.page1}
          onChange={(e) => nextPage({ page1: e.target.value })}
        />
      </label>
    </div>
  );
}

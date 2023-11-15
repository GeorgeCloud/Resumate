import { useFormContext } from '../contexts/FormContext';

export default function FormPage() {
  const { wholeFormData, nextPage, prevPage, currentPage } = useFormContext();

  function handleNext() {
    // TODO: form validation logic here
    nextPage(wholeFormData);
  };

  const handlePrev = () => {
    prevPage();
  };

  return (
    <div>
      {currentPage !== 5 && (
        <button onClick={handleNext}>Next & Save</button>
      )}

      {currentPage !== 1 && (
        <button onClick={handlePrev}>Previous</button>
      )}
    </div>
  );
};

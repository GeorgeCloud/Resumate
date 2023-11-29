import { useNavigate } from "react-router-dom";
import type { SaveButtonProps } from "../../lib/types";

export default function SaveFormButton({ formData }: SaveButtonProps) {
  const navigate = useNavigate();

  function handleSaveClick() {
    const key = 'formData'
    localStorage.setItem(key, JSON.stringify(formData));
    navigate("/intake");
  }

  return (
    <div className="">
      <button className='mx-2 mb-4' onClick={handleSaveClick}>Save</button>
    </div>
  );
}

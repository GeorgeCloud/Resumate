import { useNavigate } from "react-router-dom";
import type { SaveButtonProps } from "../../lib/types";

/**
 * The SaveFormButton component.
 *
 * This component is responsible for rendering a button that saves the form
 * data to local storage and navigates to the "/intake" route.
 *
 * It takes the `formData` prop to access the form data.
 *
 * The `useNavigate` hook from "react-router-dom" is used to navigate to the "/
 * intake" route.
 *
 * The `handleSaveClick` function is used to handle the click event of the
 * button.
 *
 * @returns SaveFormButton
 *
 */

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

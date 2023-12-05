import { useState } from 'react';
import { PiPlusBold } from "react-icons/pi";

interface AccomplishmentsInputProps {
  onAddAccomplishments: (Accomplishments: string) => void;
}

export default function AccomplishmentsInput({ onAddAccomplishments }: AccomplishmentsInputProps) {
  const [accomplishments, setAccomplishments] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAccomplishments(e.target.value);
  }

  function handleAddAccomplishments() {
    if (accomplishments.trim() !== '') {
      onAddAccomplishments(accomplishments);
      setAccomplishments('');
    }
  }

  return (
    <section>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="pro-Accomplishments" className="text-sm/4">
            Accomplishments
          </label>
        </div>
        <div className="col2 w-full flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="pro-Accomplishments"
            name="pro-Accomplishments"
            value={accomplishments}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-end">
        <span className="mt-2 text-xs tracking-tight italic subpixel-antialiased mr-2">Add Accomplishments</span>
        <button onClick={handleAddAccomplishments} className="add-entry-button">
          <PiPlusBold />
        </button>
      </div>

    </section>
  );
}

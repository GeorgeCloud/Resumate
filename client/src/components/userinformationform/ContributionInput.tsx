import { useState } from 'react';
import { PiPlusBold } from "react-icons/pi";

interface ContributionInputProps {
  onAddContribution: (contribution: string) => void;
}

export default function ContributionInput({ onAddContribution }: ContributionInputProps) {
  const [contribution, setContribution] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContribution(e.target.value);
  }

  function handleAddContribution() {
    if (contribution.trim() !== '') {
      onAddContribution(contribution);
      setContribution('');
    }
  }

  return (
    <section>
      <div className="row mb-4 flex justify-between">
        <div className="col1">
          <label htmlFor="pro-contribution" className="text-sm/4">
            Enter contribution
          </label>
        </div>
        <div className="col2 w-full flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="pro-contribution"
            name="pro-contribution"
            value={contribution}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-end">
        <span className="mt-2 text-xs tracking-tight italic subpixel-antialiased mr-2">Add Contribution</span>
        <button onClick={handleAddContribution} className="add-entry-button">
          <PiPlusBold />
        </button>
      </div>

    </section>
  );
}

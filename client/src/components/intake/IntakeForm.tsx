import React, { useState } from 'react';
import type { ApplicationIntakePropTypes } from '../../lib/types'
import IntakeButton from './IntakeButton';

export default function IntakeForm({ storageKey }: ApplicationIntakePropTypes) {
  const [inputText, setInputText] = useState<string>('');
  const [savedText, setSavedText] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSaveClick = () => {
    localStorage.setItem(storageKey, inputText);
    setSavedText(inputText);
    setInputText('');
  };

  return (
    <div>
      <div>
        <label>Insert Text:</label>
        <textarea value={inputText} onChange={handleInputChange} />
      </div>
      <IntakeButton handleSaveClick={handleSaveClick} />
      <div>
        <strong>Saved text:</strong>
        <p>{savedText}</p>
      </div>
    </div>
  );
};

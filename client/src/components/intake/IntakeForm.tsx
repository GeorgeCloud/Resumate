import React, { useState } from 'react';
import IntakeButton from './IntakeButton';
import axios from 'axios';

export default function IntakeForm({ storageKey }: ApplicationIntakePropTypes) {
  const [jobListingDesc, setJobListingDesc] = useState<string>('');

  const handleJobListingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobListingDesc(e.target.value);
  };

  const generateResumeClick = () => {
    axios({
      url: 'http://localhost:5000',  // Adjust the endpoint
      method: 'POST',
      data: {
        resumeDetails: JSON.parse(localStorage['formData']),
        jobListingDesc: jobListingDesc
      },
      responseType: 'blob',
    })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));

        window.open(url, '_blank');
      })
      .catch(error => console.error('Error fetching PDF:', error));
  };

  return (
    <div>
      <div>
        <label>Job Listing Text:</label>
        <textarea onChange={handleJobListingChange} />
      </div>
      <button onClick={generateResumeClick}>Generate Resume</button>
    </div>
  );
}

import React, { useState } from 'react';
import IntakeButton from './IntakeButton';
import axios from 'axios';

export default function IntakeForm({ storageKey }: ApplicationIntakePropTypes) {
  const [jobListingDesc, setJobListingDesc] = useState<string>('');

  const handleJobListingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobListingDesc(e.target.value);
  };

  const generateResumeClick = () => {
    const formData = JSON.parse(localStorage['formData'])

    const userInfo = {
      personal_data: {
        full_name        : formData['personalData']['firstName'],
        phone_number     : formData['personalData']['phoneNumber'],
        email            : formData['personalData']['email'],
        linkedin_username: formData['personalData']['linkedIn'],
        github_username  : formData['personalData']['github'],
        title            : formData['personalData']['title'],
      },
      education: {
        name        : formData['educationData']['schoolName'],
        city_state  : formData['educationData']['cityState'],
        degree_title: formData['educationData']['degreeTitle'],
        start_date  : formData['educationData']['startDate'],
        end_date    : formData['educationData']['endDate']
      },
      experiences: [{
        city_state  : formData['professionalData']['cityState'],
        company_name: formData['professionalData']['companyName'],
        bullets     : [],
        end_date    : formData['professionalData']['endDate'],
        start_date  : formData['professionalData']['startDate'],
        title       : formData['professionalData']['title'],
      }],
      projects: [{
        title      : formData['projectsData']['projectTitle'],
        url        : formData['projectsData']['url'],
        description: formData['projectsData']['description'],
        bullets    : [],
        start_date : formData['projectsData']['startDate'],
        end_date   : formData['projectsData']['endDate'],
        tech_stack : [],
      }],
      stack: {
        languages      : ["Python"],
        frameworks     : [],
        developer_tools: [],
        libraries      : []
      }
    }

    axios({
      url: 'http://localhost:5000',
      method: 'POST',
      data: {
        user_info: userInfo,
        job_listing: jobListingDesc
      },
      responseType: 'arraybuffer',
    })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);

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

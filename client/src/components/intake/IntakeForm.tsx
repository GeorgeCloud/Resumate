import React, { useState } from 'react';
import axios from 'axios';
import type { ApplicationIntakePropTypes, EducationDataType, ProfessionalDataType, ProjectsDataType, FormDataType } from '../../lib/types';

export default function IntakeForm({ storageKey }: ApplicationIntakePropTypes) {
  const [jobListingDesc, setJobListingDesc] = useState<string>('');

  const handleJobListingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobListingDesc(e.target.value);
  };

  const generateResumeClick = () => {
    const formData: FormDataType = JSON.parse(localStorage.getItem(storageKey) || '{}')

    const userInfo = {
      personal_data: {
        full_name: formData.personalData?.firstName,
        phone_number: formData.personalData?.phoneNumber,
        email: formData.personalData?.email,
        linkedin_username: formData.personalData?.linkedIn,
        github_username: formData.personalData?.github,
        title: formData.personalData?.title,
      },
      education: formData.educationData.map((data: EducationDataType) => ({
        name: data.schoolName,
        city_state: data.cityState,
        degree_title: data.degreeTitle,
        start_date: data.startDate,
        end_date: data.endDate,
      })),
      experiences: formData.professionalData.map((data: ProfessionalDataType) => ({
        city_state: data.cityState,
        company_name: data.companyName,
        bullets: [],
        end_date: data.endDate,
        start_date: data.startDate,
        title: data.title,
      })),
      projects: formData.projectsData.map((data: ProjectsDataType) => ({
        title: data.projectTitle,
        url: data.url,
        description: data.description,
        bullets: [],
        start_date: data.startDate,
        end_date: data.endDate,
        tech_stack: [],
      })),
      stack: {
        languages: ["JavaScript", "TypeScript", "Python"],
        frameworks: [],
        developer_tools: [],
        libraries: []
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

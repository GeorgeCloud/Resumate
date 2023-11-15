import type { PersonalDetailTypes, EducationDetailTypes, ProjectsDetailTypes, ProfessionalDetailTypes } from '../lib/types';

export function validatePersonalData(personalData: PersonalDetailTypes): boolean {
  return personalData.firstName !== '' && personalData.lastName !== '' && personalData.phoneNumber !== '' && personalData.email !== '' && personalData.linkedIn !== '' && personalData.github !== '' && personalData.title !== '';
}

export function validateEducationData(educationData: EducationDetailTypes): boolean {
  return educationData.schoolName !== '' && educationData.cityState !== '' && educationData.degreeTitle !== '' && educationData.startDate !== '' && educationData.endDate !== '';
}

export function validateProfessionalData(professionalData: ProfessionalDetailTypes): boolean {
  return professionalData.title !== '' && professionalData.companyName !== '' && professionalData.startDate !== '' && professionalData.endDate !== '' && professionalData.cityState !== '';
}

export function validateProjectsData(projectsData: ProjectsDetailTypes): boolean {
  return projectsData.projectTitle !== '' && projectsData.url !== '' && projectsData.description !== '' && projectsData.startDate !== '' && projectsData.endDate !== '';
}

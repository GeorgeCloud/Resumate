from user_profile import user
from resume_builder import ResumeBuilder
from job_parser import JobParser
from job_listing import job_listing
from chat_gpt import Bot

EXPERIENCE_NUM_OF_BULLETS = 4
PROJECTS_NUM_OF_BULLETS   = 3

if __name__ == '__main__':
    # Parses job listing and modifies user object with generated bullets
    bot = Bot(user, job_listing)

    resume = ResumeBuilder(user)
    resume.generate_resume()

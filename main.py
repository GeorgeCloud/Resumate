from user_profile import user
from resume_builder import ResumeBuilder
from job_parser import JobParser
from job_listing import job_listing
from chat_gpt import Bot

EXPERIENCE_NUM_OF_BULLETS = 4
PROJECTS_NUM_OF_BULLETS   = 3

if __name__ == '__main__':
    # job_listing_keywords = JobParser(user, job_listing).keywords
    bot = Bot(user, job_listing)

    # bot.bullets should be equal to num_of_experiences * EXPERIENCE_NUM_OF_BULLETS
    for i in range(len(user.experiences)):
        user.experiences[i]['bullets'] = bot.bullets[:EXPERIENCE_NUM_OF_BULLETS]

        bot.bullets = bot.bullets[EXPERIENCE_NUM_OF_BULLETS:]

    resume = ResumeBuilder(user)
    resume.generate_resume()

import openai
from job_parser import *
from user_profile import user
from dotenv import load_dotenv
import os

load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')

class Bot:
    def __init__(self, user, job_listing):
        self.probabilty = 0
        self.bullets = []
        self.job_listing = job_listing
        self.response = {'languages': [], 'frameworks': [], 'libraries': [], 'software_tools': [], 'other': []}
        self.category_mapping = {
            'programming languages': 'languages',
            'frameworks': 'frameworks',
            'libraries': 'libraries',
            'software tools': 'software_tools',
            'other skills': 'other'
        }

        self.parse_job_listing()
        self.create_bullets()

    def run_conversion(self, context, chat_gpt_query):
        messages = [
            { 'role': 'system', 'content': context},
            { 'role': 'user', 'content': chat_gpt_query }
        ]

        messages.append({'role': 'user', 'content': chat_gpt_query})
        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages=messages, temperature=0
        )

        reply = chat.choices[0].message.content
        return reply

    def parse_job_listing(self):
        print('[*] ChatGPT parsing job listing...')

        chat_gpt_parse_context = 'Your job to extract the programming languages, frameworks, libraries, software tools, and other important skills from a job listing'
        chat_gpt_parse_query = f'Here is the job listing: {self.job_listing}. Make sure to break the values by a comma.'

        chat_gpt_response = self.run_conversion(chat_gpt_parse_context, chat_gpt_parse_query)

        lines = [line.strip() for line in chat_gpt_response.strip().split('\n') if ':' in line]
        for line in lines:
            name, value = map(str.strip, line.split(': ', 1))
            key = self.category_mapping.get(name.lower())
            if key is not None and value.lower() != 'none mentioned':
                if ',' in value:
                    values = [v.strip() for v in value.split(',')]
                    self.response[key].extend(values)
                else:
                    self.response[key].append(value)

    def create_bullets(self):
        print('[*] ChatGPT generating bullets...')

        context=f'''I am applying to job and I want to tweak my resume. Your job
        is sort these keywords by importance: {self.response['other']}.'''

        query=f'''Now modify my these resume bullet points and utilize 1
        keyword for each bullet. Make sure to use the best keyword that matches
        the context of these bullets: {user.experience_bullets}.
        '''

        unsanitized_bullets = self.run_conversion(context, query)

        self.bullets = unsanitized_bullets.replace("\n", "").replace(".", "").split('- ')[1:]  # Sanitize special chars.

        for exp_idx, experience in enumerate(user.experiences):
            exp_bullet_len = len(experience['bullets'])
            user.experiences[exp_idx]['bullets'] = self.bullets[:exp_bullet_len]
            self.bullets = self.bullets[:exp_bullet_len]

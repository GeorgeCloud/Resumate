import openai
from job_parser import *
from user_profile import user
from dotenv import load_dotenv
import os

load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')

class Bot:
    def __init__(self, user, job_listing):
        self.bullets = []
        self.probabilty = 0
        self.job_listing = job_listing

        self.chat_gpt_query = f'''
        Return python lists for each of these categories from this job listing:
        {self.job_listing}
        1. Programming Languages
        2. Frameworks
        3. Libraries
        4. Any software tools
        5. Other
        '''

        self._generate_bullets()
        print('num of bullets:', len(self.bullets))

    def _generate_bullets(self) -> list:
        print('[*] ChatGPT building bullet points')
        messages = [
            {
                "role": "system",
                "content": "You are a intelligent assistant.\
                            Don’t justify your answers.\
                            Don’t give information not mentioned in the CONTEXT INFORMATION.\
                            Don't add nothing before bullets such as headers or anything.\
                            Make sure to write repsonse in third person."
            }
        ]
        message = self.chat_gpt_query

        messages.append({"role": "user", "content": message})
        chat = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
        reply = chat.choices[0].message.content

        bullets = reply.replace("\n", "").replace(".", "").split('- ')[1:]  # Sanitize special chars.
        self.bullets = bullets

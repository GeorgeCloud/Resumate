from user_profile import UserProfile
from resume_builder import ResumeBuilder
from job_parser import JobParser
from job_listing import job_listing
from chat_gpt import ChatGPT
from flask import Flask, request, send_file
from flask_cors import CORS
import os

EXPERIENCE_NUM_OF_BULLETS = 4
PROJECTS_NUM_OF_BULLETS   = 3

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def create_resume():
    user_info, job_listing = request.json['user_info'], request.json['job_listing']

    user = UserProfile(
        email             = user_info['personal_data']['email'],
        title             = user_info['personal_data']['title'],
        full_name         = user_info['personal_data']['full_name'],
        phone_number      = user_info['personal_data']['phone_number'],
        linkedin_username = user_info['personal_data']['linkedin_username'],
        github_username   = user_info['personal_data']['github_username'],
        experiences       = user_info['experiences'],
        projects          = user_info['projects'],
        education         = user_info['education'][0],
        stack             = user_info['stack'],
    )

    chatgpt = ChatGPT(user, job_listing)

    resume = ResumeBuilder(user)
    resume.generate_resume()

    response = send_file(resume.filename, as_attachment=True)
    os.remove(resume.filename)

    return response

if __name__ == '__main__':
    app.run(debug=True)

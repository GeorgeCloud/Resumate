from user_profile import UserProfile
from resume_builder import ResumeBuilder
from job_parser import JobParser
from job_listing import job_listing
from chat_gpt import ChatGPT
from flask import Flask, request, send_file
import os

EXPERIENCE_NUM_OF_BULLETS = 4
PROJECTS_NUM_OF_BULLETS   = 3

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def create_resume():
    user = UserProfile(
        email             = request.json['email'],
        title             = request.json['title'],
        full_name         = request.json['full_name'],
        phone_number      = request.json['phone_number'],
        linkedin_username = request.json['linkedin_username'],
        github_username   = request.json['github_username'],
        experiences       = request.json['experiences'],
        projects          = request.json['projects'],
        education         = request.json['education'],
        stack             = request.json['stack'],
    )

    chatgpt = ChatGPT(user, job_listing)

    resume = ResumeBuilder(user)
    resume.generate_resume()

    response = send_file(resume.filename, as_attachment=True)
    os.remove(resume.filename)

    return response

if __name__ == '__main__':
    app.run(debug=True)

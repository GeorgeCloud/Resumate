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
    user = UserProfile(
        email             = request.json['personalDetails'],
        title             = request.json['personalDetails'],
        full_name         = request.json['personalDetails'],
        phone_number      = request.json['personalDetails'],
        linkedin_username = request.json['personalDetails'],
        github_username   = request.json['personalDetails'],
        experiences       = request.json['professionalData'],
        projects          = request.json['projectsData'],
        education         = request.json['educationData'],
        # stack             = request.json['stack'],
    )

    chatgpt = ChatGPT(user, job_listing)

    resume = ResumeBuilder(user)
    resume.generate_resume()

    response = send_file(resume.filename, as_attachment=True)
    os.remove(resume.filename)

    return response

if __name__ == '__main__':
    app.run(debug=True)

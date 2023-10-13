full_name = 'George Ceja'
phone_number = '510-493-5532'
email = 'GeorgeCeja08@gmail.com'
linkedin_username = 'George-Ceja'
github_username = 'GeorgeCloud'
title = 'Software Engineer'

education = {
    'name': 'Dominican University of California',
    'city_state': 'San Rafael, CA',
    'degree_title': 'Bachelor\'s in Computer Science',
    'start_date': 'July 2021',
    'end_date': 'June 2023'
}

experiences = [{
    'title': 'Software Engineer',
    'company_name': 'ModernTax',
    'start_date': 'Aug. 2023',
    'end_date': 'Sep 2023',
    'city_state': 'San Francisco, CA',
    'stack': {
        'languages': ['Ruby', 'TypeScript', 'HTML', 'CSS'],
        'frameworks': ['Ruby on Rails'],
        'project management': ['Trello'],
        'databases': ['AWS'],
    },
    'bullets': [
        'Designed and created RESTful API to enable customers to query business tax transcripts',
        'Implemented a CSV upload feature that allows businesses to request tax information through the web UI',
        'Migrated our web application to Amazon Web Servers to decrease server costs by 40%',
        'Improved engineer workflow by implementing a Trello ticketing system',
        'Added pagination and caching to API responses to improve server latency by 25%'
    ]  # ChatGPT will modify these
}, {
    'title': 'Software Engineer',
    'company_name': 'Zight',
    'start_date': 'August 2020',
    'end_date': 'July 2023',
    'city_state': 'San Francisco, CA',
    'stack': {
        'languages': ['Ruby', 'TypeScript', 'HTML', 'CSS'],
        'frameworks': ['Ruby on Rails'],
        'project management': ['Trello'],
        'databases': ['AWS'],
    },
    'bullets': [
        'Implemented new features to web applications (user activity notifications, file expiration settings, webhooks, analytic tools, monthly user reports)',
        'Created an automated script to migrate over 200,000+ customers',
        'Added a video/audio player to enable playback on .wav, .mp4, mp3 files',
        'Created an automated script to fix over 10,000+ broken links due to database and account errors',
        'Saved the company $5,000 in annual savings by creating an in-house analysis software feature that tracks user information for our marketing and quality assurance teams]'
    ]  # ChatGPT will modify these
}]

projects = [{
    'title': 'PantryPal',
    'url': 'pantry-pal-colab.herokuapp.com',
    'description': 'PantryPal empowers individuals to easily find free food within their vicinity.',
    'tech_stack': 'React, Flask, JavaScript, Python, MongoDB',
    'start_date': 'May 2023',
    'end_date': 'Aug. 2023',
    'bullets': [
        'Designed and created database models for core feature',
        'Implemented Google Map View to display local organizations such as pantries, soup kitchens, food banks',
        'Web scraped over 15,000 organizations, sanitized data and created script to store data in MongoDB'
    ]
}, {
    'title': 'MyCollection',
    'url': 'yelp.reveal.dev',
    'description': '',
    'tech_stack': 'React, Javascript, Redux, Redis, Python, MongoDB, HTML5',
    'start_date': 'Feb. 2023',
    'end_date': 'May 2023',
    'bullets': [
        'Developed a full-stack web application using with Flask serving a REST API with React as the frontend',
        'Integrated Yelp API to look up businesses',
        'Lowered AWS database costs, by adding Redis caching to decrease database lookups'
    ]
}, {
    'title': 'SocialPent',
    'url': 'events.reveal.dev',
    'description': 'See events around your area and share them with friends! Always up-to-date with trending events in your area.',
    'tech_stack': 'React, Flask, JavaScript, Python, MongoDB',
    'start_date': 'Oct. 2022',
    'end_date': 'Jan. 2023',
    'bullets': [
        'Developed a full-stack flask web application from scratch',
        'Created functionality to display events from Ticketmaster onto a Google Map View',
        'Created Authentication and ability to add friends on platform'
    ]
}]

languages       = ['Python', 'JavaScript', 'C++', 'Ruby', 'NoSQL', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'HTML', 'CSS']
frameworks      = ['React', 'Rails', 'Django', 'Flask', 'Express', 'Frameworks']
libraries       = ['Redux', 'Axios', 'Auth0', 'Tailwind']
developer_tools = ['Github', 'Git', 'AWS', 'Amazon', 'Web', 'Services', 'Azure', 'Docker', 'Atlas', 'Jira', 'Trello', 'VSCode', 'Cron', 'APIs']
adjectives      = ['collaborate', 'collaborating', 'bug', 'designing', 'testing', 'engineering', 'experiences']
other           = ['backend', 'back-end' 'active', 'record', 'software', 'systems', 'applications', 'startups', 'start-ups', 'start up', 'developing', 'mvc', 'restful', 'reliability', 'scalability', 'features', 'scalable', 'databases', 'cache', 'caching', 'system', 'patterns', 'kanban', 'testing', 'tdd', 'axios', 'middleware', 'library', 'libraries']

skill_list = languages + frameworks + libraries + developer_tools + adjectives + other
skill_set = set(item.lower() for sublist in [skill_list] for item in sublist)

stack = {
    'languages': set(languages),
    'frameworks': set(frameworks),
    'developer_tools': set(developer_tools),
    'libraries': set(libraries),
    'other': set(other),
}

class UserProfile:
    def __init__(self, email, title, full_name, phone_number, linkedin_username, github_username, experiences, projects, education, skills, stack):
        self.email = email
        self.title = title
        self.full_name = full_name
        self.phone_number = phone_number
        self.linkedin_username = linkedin_username
        self.github_username = github_username
        self.experiences = experiences
        self.experience_bullets = [bullet for exp in self.experiences for bullet in exp['bullets']]
        self.projects = projects
        self.education = education
        self.skills = skills
        self.stack = stack

user = UserProfile(
    email = email,
    title = title,
    full_name = full_name,
    phone_number = phone_number,
    linkedin_username = linkedin_username,
    github_username = github_username,
    experiences = experiences,
    projects = projects,
    education = education,
    skills = skill_set,
    stack = stack
)

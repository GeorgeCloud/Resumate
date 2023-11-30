class UserProfile:
    def __init__(self, email, title, full_name, phone_number, linkedin_username, github_username, experiences, projects, education, skills=None, stack=None):
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

# Required fields

# full_name = 'John Doe'
# phone_number = '510-123-1234'
# email = 'JohnDoe@gmail.com'
# linkedin_username = 'John-Doe'
# github_username = 'JohnDoe'
# title = 'Software Engineer'
#
# education = {
#     'name': '_____ University of California',
#     'city_state': 'San Francisco, CA',
#     'degree_title': 'Bachelor\'s in Arts',
#     'start_date': 'July 2021',
#     'end_date': 'June 2023'
# }
#
# experiences = [{
#     'title': 'Software Engineer',
#     'company_name': 'XXX',
#     'start_date': 'August. 2023',
#     'end_date': 'September 2023',
#     'city_state': 'San Francisco, CA',
#     'stack': {
#         'languages': ['X', 'X', 'X', 'X'],
#         'frameworks': ['X'],
#         'project management': ['X'],
#         'databases': ['X'],
#     },
#     'bullets': [
#         'X',
#         'X',
#         'X',
#         'X',
#         'X'
#     ]  # ChatGPT will modify these
# }, {
#     'title': 'Software Engineer',
#     'company_name': 'X',
#     'start_date': 'August 2020',
#     'end_date': 'July 2023',
#     'city_state': 'San Francisco, CA',
#     'stack': {
#         'languages': ['X', 'X', 'X', 'X'],
#         'frameworks': ['X'],
#         'project management': ['X'],
#         'databases': ['X'],
#     },
#     'bullets': [
#         'X',
#         'X',
#         'X',
#         'X',
#         'X'
#     ]  # ChatGPT will modify these
# }]
#
# projects = [{
#     'title': 'PantryPal',
#     'url': 'pantry-pal-colab.herokuapp.com',
#     'description': 'PantryPal empowers individuals to easily find free food within their vicinity.',
#     'tech_stack': 'X, X, X, X, X',
#     'start_date': 'May 2023',
#     'end_date': 'August 2023',
#     'bullets': [
#         'X',
#         'X',
#         'X'
#     ]
# }, {
#     'title': 'MyCollection',
#     'url': 'yelp.reveal.dev',
#     'description': '',
#     'tech_stack': 'X, X, X, X, X, X, X',
#     'start_date': 'February 2023',
#     'end_date': 'May 2023',
#     'bullets': [
#         'X',
#         'X',
#         'X'
#     ]
# }, {
#     'title': 'SocialPent',
#     'url': 'events.reveal.dev',
#     'description': 'See events around your area and share them with friends! Always up-to-date with trending events in your area.',
#     'tech_stack': 'X, X, X, X, X',
#     'start_date': 'October 2022',
#     'end_date': 'January 2023',
#     'bullets': [
#         'X',
#         'X',
#         'X'
#     ]
# }],
# "stack": {
#     "languages": ["Python"],
#     "frameworks": [],
#     "developer_tools": [],
#     "libraries": []
# }

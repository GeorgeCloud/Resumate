import requests
import re

class JobParser:
    def __init__(self, user, job_listing):
        self.job_listing = job_listing
        self.keywords = {}
        self.banned_keywords = ['Senior', 'Staff', 'AI', 'Machine', 'Artifical', 'Crypto', 'Blockchain' 'web3']  # Ignore jobs if includes these keywords
        self.removed_keywords = []
        self.user = user

        self.parse_keywords()
        self.remove_banned_keywords()

    def parse_keywords(self):
        print('[*] Parsing job listing')
        job_listing_keywords = re.sub(r'[^\w\s]', '', self.job_listing).lower().split()

        for keyword in job_listing_keywords:
            if keyword in self.keywords:
                if word in self.keywords:
                    self.keywords[keyword] += 1
                else:
                    self.keywords[keyword] = 1
                break
        print('[*] Finished parsing job listing')

    def remove_banned_keywords(self):
        for keyword in self.keywords:
            if word in self.banned_keywords:
                del self.keywords[keyword]
                self.removed_keywords.append(word)

        print('removed key words:', self.removed_keywords)

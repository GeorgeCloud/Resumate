from resume_settings import file_configuration
import os

NUM_OF_PROJECTS = 3
OUTPUT_FILE_NAME = 'GeorgeCeja_Resume.pdf'

# Returns a resume in Jake's Resume format -> str
class ResumeBuilder:
    def __init__(self, user):
        self.user = user

    def generate_resume(self):
        resume = file_configuration

        resume += self.create_header()
        resume += self.create_experience()
        resume += self.create_projects()
        resume += self.create_education()
        resume += self.create_skills()

        try:
            # Write the TeX-encoded string to a temporary .tex file
            with open("temp.tex", "w") as tex_file:
                tex_file.write(resume)

            # Compile the .tex file to generate a .dvi file
            os.system("latex -interaction=batchmode temp.tex")

            # Convert the .dvi file to a PDF
            os.system(f"dvipdf temp.dvi {OUTPUT_FILE_NAME}")

            # Clean up temporary files
            os.remove("temp.tex")
            os.remove("temp.aux")
            os.remove("temp.out")
            os.remove("temp.dvi")
            os.remove("temp.log")

            print('\n[*] Resume Generated')
        except Exception as e:
            print("Error:", str(e))

    def create_header(self):
        header_template = r"""
        \begin{center}
            \textbf{\Huge \scshape %s} \\ \vspace{1pt}
            \small %s $|$ \href{mailto:%s}{\underline{%s}} $|$
            \href{https://linkedin.com/in/%s}{\underline{linkedin.com/in/%s}} $|$
            \href{https://github.com/%s}{\underline{github.com/%s}}
        \end{center}
        """

        return header_template % (
            self.user.full_name, self.user.phone_number, self.user.email, self.user.email, self.user.linkedin_username,
            self.user.linkedin_username, self.user.github_username, self.user.github_username
        )

    # start_date in format of 'Dec. 20XX', if present 'PRESENT'
    def create_experience(self):
        experience_section = r"""
        \section{Experience}
        \resumeSubHeadingListStart
        """

        for experience in self.user.experiences:
            bullets = ""
            for bullet in experience['bullets']:
                bullets += rf"\resumeItem{{{bullet}}}"

            experience_section += rf"""
            \resumeSubheading
                {{{experience['title']}}}{{{experience['start_date']} -- {experience['end_date']}}}
                {{{experience['company_name']}}}{{{experience['city_state']}}}
                \resumeItemListStart
                    {bullets}
                \resumeItemListEnd
            """

        return experience_section + r"""    \resumeSubHeadingListEnd"""

    def create_projects(self):
        project_section = r"""
        \section{Projects}
            \resumeSubHeadingListStart
        """

        for project in self.user.projects[:NUM_OF_PROJECTS]:
            bullets = ""
            for bullet in project['bullets']:
                bullets += rf"\resumeItem{{{bullet}}}"

            project_section += rf"""
                \resumeProjectHeading
                    {{\textbf{{{project['title']}}} $|$ \emph{{{project['tech_stack']}}}}}{{{project['start_date']} -- {project['end_date']}}}
                    \resumeItemListStart
                        {bullets}
                    \resumeItemListEnd
            """

        return project_section + r"""    \resumeSubHeadingListEnd"""

    def create_education(self):
        return r"""
        \section{Education}
        \resumeSubHeadingListStart
            \resumeSubheading
            {%s}{%s}
            {%s}{%s -- %s}
        \resumeSubHeadingListEnd
        """ % (
            self.user.education['name'], self.user.education['city_state'], self.user.education['degree_title'],
            self.user.education['start_date'], self.user.education['end_date']
        )

    def create_skills(self):
        return r"""
        \section{Technical Skills}
        \begin{itemize}[leftmargin=0.15in, label={}]
            \small{\item{
            \textbf{Languages}{: %s} \\
            \textbf{Frameworks}{: %s} \\
            \textbf{Developer Tools}{: %s} \\
            \textbf{Libraries}{: %s}
            }}
        \end{itemize}
        \end{document}
        """ % (self.user.stack['languages'], self.user.stack['frameworks'], self.user.stack['developer_tools'], self.user.stack['libraries'])

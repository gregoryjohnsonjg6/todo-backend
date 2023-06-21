import requests
import json
import os
from subprocess import call, Popen, PIPE
import subprocess
from datetime import datetime, date

def push_repository(url):
    print("Pushing " + url)
    os.chdir(url)
    os.system('gh repo create {} --private'.format(url))
    os.system('git remote remove origin')
    os.system('git remote add origin https://github.com/{}/{}'.format(g_name, url))
    os.system('git config user.name {}'.format(g_name))
    os.system('git config user.email {}'.format(g_email))
    os.system('git push -u origin main')
    os.chdir('../')

    print("Success push " + url)


def fake_repository(url):

    os.system('git branch -M main')
    os.system("""
                git filter-branch -f --env-filter \
                    "GIT_AUTHOR_NAME='{}'\
                     GIT_AUTHOR_EMAIL='{}'\
                     GIT_COMMITTER_NAME='{}'\
                     GIT_COMMITTER_EMAIL='{}'\
                     " HEAD\
                """.format(g_name, g_email, g_name, g_email))
    os.chdir('../')

    print("Success fake " + url)

    # push_repository(url)

if __name__ == '__main__':
    #response = requests.get('https://api.github.com/users/gitusername/repos')
    #repositories = json.loads(response.text)

    g_name = "gregoryjohnsonjg6"# input('Enter your github user name: ')
    g_email = "gregoryjohnsonjg6@gmail.com"# input('Enter your github user email: ')

    
    repositories = ['todo-backend', 'todo-frontend']

    fake_repository(repositories[0])

    f.close()
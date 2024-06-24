from .settings import *

# run manage.py with --settings=backend.settings_prod

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dj',
        'USER': 'root',
        'PASSWORD': 'web0202',
        'HOST': 'dj_mysql',
        'PORT': '3306',
    }
}

ALLOWED_HOSTS = [
    "wd0202.coe.psu.ac.th"
]
CSRF_TRUSTED_ORIGINS = [
    "https://wd0202.coe.psu.ac.th"
]

DEBUG = False

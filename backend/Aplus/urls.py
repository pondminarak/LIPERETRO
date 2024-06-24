from audioop import add
from django.urls import path, include
from .views import add

urlpatterns = [
    path('add',add)
]

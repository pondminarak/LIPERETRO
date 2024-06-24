from unittest import result
from urllib import response
from webbrowser import get
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

@api_view(['GET'])
def add(request):
    a = request.query_params.get('a')
    b = request.query_params.get('b')
    result = int(a) + int(b)
    return Response({'result' : result})

    
    
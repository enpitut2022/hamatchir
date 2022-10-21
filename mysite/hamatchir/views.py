from django.shortcuts import render
from django.http import HttpResponse
from matplotlib import image


def index(request):
    myapp_data = {
    'app': 'Django'
    }
    return render(request, 'index.html',myapp_data)

# Create your views here.

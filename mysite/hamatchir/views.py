from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def index(request):
    template = loader.get_template('hamatchir/index.html')
    # return render(request, 'hamatchir/index.html')
    return HttpResponse(template.render(None, request))

# Create your views here.

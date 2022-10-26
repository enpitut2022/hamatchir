from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from .forms import UploadForm
from .models import UploadImage

def index(request):
    params = {
        'upload_form': UploadForm(), #instance
        'id': None,

    }
    if (request.method == 'POST'):
        form = UploadForm(request.POST, request.FILES)
        if form.is_valid():
            upload_image = form.save()

            params['id'] = upload_image.id

    template = loader.get_template('hamatchir/index.html')
    return render(request, 'hamatchir/index.html', params)
    #return HttpResponse(template.render(None, request))

# Create your views here.

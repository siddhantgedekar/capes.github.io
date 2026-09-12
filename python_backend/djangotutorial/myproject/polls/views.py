from django.shortcuts import render
from .models import Feature

# Create your views here.
def index(request):
    feature = Feature.objects.all()
    return render(request, 'index.html', {'feature': feature})

def counter(request):
    text = request.POST['text']
    print(f"Received text is: ", text)
    words = len(text.split())
    return render(request, "counter.html", {'amount': words})

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')

        # check for matching passwords
        if password == password2:
            pass

    return render(request, 'register.html')
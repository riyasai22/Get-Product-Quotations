from rest_framework import serializers
from .models import Quote


# class SkinModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SkinModel
#         fields = '__all__'


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = '__all__'

    def create(self, validated_data):
        # skin_models_data = validated_data.pop('skin_models')
        quote = Quote.objects.create(**validated_data)
        # for skin_model_data in skin_models_data:
        #     SkinModel.objects.create(quote=quote, **skin_model_data)
        return quote
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail, EmailMessage

def send_contact(request):
    if request.method == 'POST':
        name1 = request.POST.get('name')
        email1 = request.POST.get('email')
        message1 = request.POST.get('message')
        print(name1, email1, message1)
        send_mail(
            name1,
            "Name : " + name1 + "\n Email Address  " +
            email1 + " \n Message typed " + message1,
            email1, ['riyasailesh@gmail.com'],
            fail_silently=False,
        )
        return HttpResponseRedirect('contact')
    else:
        return HttpResponse("INVALID REQUEST")
    
def send_profile_attach(request):
    if request.method == 'POST':
        name1 = request.POST.get('name')
        email1 = request.POST.get('email')
        email_req = EmailMessage(
            name1,
            "Name : " + name1 + "\n Email Address  " + email1,
            email1,['riyasailesh@gmail.com']
        )
        file = request.FILES['upload']
        email_req.attach(file.name, file.read(), file.content_type)
        email_req.send()
        return HttpResponseRedirect('join')
    else:
        return HttpResponse("INVALID REQUEST")
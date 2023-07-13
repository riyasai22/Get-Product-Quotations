# from django.shortcuts import render
# from rest_framework import generics
# from main.models import Quote
# from .serializers import QuoteSerializer


# class QuoteListCreateView(generics.ListCreateAPIView):
#     queryset = Quote.objects.all()
#     serializer_class = QuoteSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import QuoteSerializer
from .models import Quote
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.shortcuts import render, redirect


@api_view(['GET', 'POST'])
def quote_list_create(request):
    if request.method == 'GET':
        quotes = Quote.objects.all()
        serializer = QuoteSerializer(quotes, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = QuoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # # send email confirmation
            # subject = 'Quote Created - Biodimension'
            # message = 'Your quote has been successfully created.'
            # recipient_list = [serializer.validated_data['email']]
            # from_email = settings.DEFAULT_FROM_EMAIL
            # html_message = render_to_string(
            #     'email_template.html', {'name': serializer.validated_data['name']})
            # send_mail(subject, message, 'riyasailesh@gmail.com',
            #           recipient_list, html_message=html_message)

            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)

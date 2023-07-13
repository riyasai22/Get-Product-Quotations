from django.urls import path
# from .views import QuoteListCreateView
from .views import quote_list_create

urlpatterns = [
    # path('quotes/', QuoteListCreateView.as_view(), name='quote_list_create'),
    path('quotes/', quote_list_create, name='quote_list_create'),

]

from django.shortcuts import render
from rest_framework import generics
from api.models import Book
from api.serializer import BookSerializer
# Create your views here.


class BookView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookDetailedView(generics.RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    lookup_field = 'id'
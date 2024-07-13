from django.shortcuts import render
from .models import Book
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import json
from .models import Book
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from .models import Book
from .serializers import BookSerializer

@api_view(['GET'])
def book_list(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def book_search(request):
    book_name = request.GET.get('book_name', None)
    if book_name is not None:
        books = Book.objects.filter(book_name__icontains=book_name)
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)
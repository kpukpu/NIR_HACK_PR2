from django.db import connection
from searching.models import Book
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

@api_view(['DELETE']) 
def delete(request, id):
    try:
        item = Book.objects.get(pk=id)
        item.delete()
        return Response({'message' : 'Item deleted'}, status=status.HTTP_204_NO_CONTENT)
    except Book.DoesNotExist:
        return Response({'error' : 'Item not exist'}, status=status.HTTP_404_NOT_FOUND)
    
def available(request):
    book = Book.objects.filter(availability = True).values('book_name', 'publisher', 'author')
    book_list = list(book)
    return JsonResponse(book_list, safe=False)

def unavailable(request):
    book = Book.objects.filter(availability = False).values('book_name', 'publisher', 'author')
    book_list = list(book)
    return JsonResponse(book_list, safe=False)
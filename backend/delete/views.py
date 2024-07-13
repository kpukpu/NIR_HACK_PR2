from django.db import connection
from searching.models import Book
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['DELETE']) 
def delete(request, id):
    try:
        item = Book.objects.get(pk=id)
        item.delete()
        return Response({'message' : 'Item deleted'}, status=status.HTTP_204_NO_CONTENT)
    except Book.DoesNotExist:
        return Response({'error' : 'Item not exist'}, status=status.HTTP_404_NOT_FOUND)
    

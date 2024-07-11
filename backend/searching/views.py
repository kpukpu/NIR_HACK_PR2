from django.shortcuts import render
from .models import Book
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
from .models import Book
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404

@csrf_exempt
def book_search(request):
    query = request.GET.get('q', '')
    results = Book.objects.filter(book_name__icontains=query) if query else []
    return render(request, 'books/search_results.html', {'query': query, 'results': results})

@csrf_exempt
def book_insert(request):
    data = json.loads(request.body)

    book_name = data.get('bookname')
    author = data.get('auth')
    publisher = data.get('publish')
    publication_date = data.get('_date')
    availability = data.get('avail')
    new_book = Book(
                book_name=book_name,
                author=author,
                publisher=publisher,
                publication_date=publication_date,
                availability=availability
            )
    new_book.save()
    
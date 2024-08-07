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
from django.http import JsonResponse
from django.core.exceptions import ValidationError

@api_view(['GET'])
def book_list(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def book_search(request):
    book_name = request.GET.get('book_name', None)
    print(book_name)
    if book_name is not None:
        books = Book.objects.filter(book_name__icontains=book_name)
        serializer = BookSerializer(books, many=True)
        print(serializer.data)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def book_insert(request):
    if request.method == 'POST':
        try:
            # 수신된 데이터 로깅
            data = json.loads(request.body)
            print('Received data:', data)

            # 데이터 파싱
            book_name = data.get('book_name')
            author = data.get('author')
            publisher = data.get('publisher')
            publication_date = data.get('publication_date')
            availability = data.get('availability')

            last_book = Book.objects.order_by('-book_number').first()
            if last_book:
                new_book_number = last_book.book_number + 1
            else:
                new_book_number = 1

            # Book 객체 생성
            new_book = Book(
                book_number=new_book_number,
                book_name=book_name,
                publisher=publisher,
                availability=availability,
                author=author,
                publication_date=publication_date,
            )

            # 데이터 유효성 검사
            new_book.full_clean()
            new_book.save()  # 데이터베이스에 저장

            return JsonResponse({'message': 'Book added successfully!'}, status=201)

        except ValidationError as e:
            # 유효성 검사 오류
            return JsonResponse({'error': e.message_dict}, status=400)
        except Exception as e:
            # 기타 오류
            print('Error:', str(e))
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
@api_view(['GET'])
def book_loan(request):
    queryset = Book.objects.filter(availability=False)
    serializer = BookSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def book_return(request):
    try:
        book_ids = request.data.get('book_name', [])
        books = Book.objects.filter(id__in=book_ids, availability=False)
        books.update(availability=True)
        return Response({"message": "Books updated successfully."}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def book_update(request, pk):
    try:
        book = Book.objects.get(pk=pk)
    except Book.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = BookSerializer(book, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
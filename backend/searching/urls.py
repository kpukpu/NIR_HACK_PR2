from django.urls import path, include
from .views import book_insert, book_list, book_search, book_update
from . import views

urlpatterns = [
    #    path('search/', views.book_search, name='search_books'),
    path('post/', book_insert, name='book_insert'),
    path('books/', book_list, name='book-list'),
    path('books/search/', book_search, name='book-search'),
    path('books/<int:pk>/update/', book_update, name='book-update'),
]
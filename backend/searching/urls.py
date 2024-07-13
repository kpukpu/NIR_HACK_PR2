from django.urls import path, include
from .views import book_insert, book_list, book_search, book_loan, book_return
from . import views

urlpatterns = [
    #    path('search/', views.book_search, name='search_books'),
    path('post/', book_insert, name='book_insert'),
    path('books/', book_list, name='book-list'),
    path('books/search/', book_search, name='book-search'),
    path('book_loan/', book_loan, name='book_loan'),
    path('book_loan/return/', book_return, name='book_return')
]
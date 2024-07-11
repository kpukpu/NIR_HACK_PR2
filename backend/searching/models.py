# books/models.py
from django.db import models

class Book(models.Model):
    book_number = models.IntegerField(primary_key=True)  # 책 번호, 기본키
    book_name = models.TextField(null=True)  # 책 이름
    author = models.TextField(null=True, default='김승주')  # 저자 
    publisher = models.TextField(null=True)  # 출판사
    publication_date = models.IntegerField(default= '2024')  # 출판년도 
    availability = models.BooleanField(default=True)  # 대여 가능 유무

    class Meta:
        db_table = 'book'  # 테이블 이름을 명시적으로 설정
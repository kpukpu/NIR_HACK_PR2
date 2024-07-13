from django.urls import path
from .views import delete
from . import views

urlpatterns = [ 
    path('delete/<int:id>/', delete), # pk = id 값을 book_number로 가지는 book을 Book 모델에서 삭제
    path('available/', views.available), # 대출 가능 도서 목록
    path('unavailable/', views.unavailable), # 대출 불가능 도서 목록
]
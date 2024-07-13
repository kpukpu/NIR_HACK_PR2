from django.urls import path
from .views import delete

urlpatterns = [ 
    path('delete/<int:id>/', delete), # pk = id 값을 book_number로 가지는 book을 Book 모델에서 삭제
]
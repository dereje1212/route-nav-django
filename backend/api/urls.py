from django.urls import path

from .views import studList, studDelete,studDetail
from .views import EmployeeList, EmployeeDelete,EmployeeDetail
from .views import TeacherList, TeacherDelete,TeacherDetail

urlpatterns=[
    path('studList',studList.as_view()),
    path('studDelete/<int:pk>',studDelete.as_view()),
    path('studDetail/<int:pk>',studDetail.as_view()),
    path('EmployeeList',EmployeeList.as_view()),
    path('EmployeeDelete/<int:pk>',EmployeeDelete.as_view()),
    path('EmployeeDetail/<int:pk>',EmployeeDetail.as_view()),
    path('TeacherList',TeacherList.as_view()),
    path('TeacherDelete/<int:pk>',TeacherDelete.as_view()),
    path('TeacherDetail/<int:pk>',TeacherDetail.as_view())
]
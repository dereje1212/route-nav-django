from django.shortcuts import render

from rest_framework import generics
from .serializers import StudentSerializer
from .serializers import EmployeeSerializer
from .serializers import TeacherSerializer
from .models import Student,Employee,Teacher

class studList(generics.ListCreateAPIView):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer
class studDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer

class studDelete(generics.DestroyAPIView):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer
class EmployeeList(generics.ListCreateAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer
class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer

class EmployeeDelete(generics.DestroyAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer
class TeacherList(generics.ListCreateAPIView):
    queryset=Teacher.objects.all()
    serializer_class=TeacherSerializer
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Teacher.objects.all()
    serializer_class=TeacherSerializer

class TeacherDelete(generics.DestroyAPIView):
    queryset=Teacher.objects.all()
    serializer_class=TeacherSerializer


# Create your views here.

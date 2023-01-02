from django.db import models

# Create your models here.

class Student(models.Model):
    stufname=models.CharField(max_length=10)
    stulname=models.CharField(max_length=10)
    stugrade=models.CharField(max_length=2)
    def __str__(self):
        return self.stufname
class Employee(models.Model):
    Efname=models.CharField(max_length=10)
    Elname=models.CharField(max_length=10)
    Esalary=models.CharField(max_length=20)
    EphonNo=models.CharField(max_length=20)
    def __str__(self):
        return self.Efname
class Teacher(models.Model):
    Tfname=models.CharField(max_length=10)
    Tlname=models.CharField(max_length=10)
    Tsalary=models.CharField(max_length=20)
    def __str__(self):
        return self.Tfname
import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Feature(models.Model):
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=100)
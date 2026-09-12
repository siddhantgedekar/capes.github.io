from django.db import models

class Person(models.Model): # Can be considered as Table 'Person'
    first_name = models.CharField(max_length=30) # Each models.{field} is an attribute inside the table, that defines the type of data/column
    last_name = models.CharField(max_length=30)
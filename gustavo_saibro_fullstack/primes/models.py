from django.db import models

# Create your models here.

class Prime(models.Model):
	number = models.CharField(max_length=200)

	def __str__(self):
		return self.number

class Divisor(models.Model):
	number = models.CharField(max_length=200)	
	divisor = models.CharField(max_length=200)
	is_prime = models.CharField(max_length=200)

	def __str__(self):
		return self.number
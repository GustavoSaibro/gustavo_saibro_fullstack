from django.db import models

# Create your models here.

class Prime(models.Model):
	number = models.IntegerField()


	def __str__(self):
		return self.number
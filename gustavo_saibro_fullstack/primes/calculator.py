from sympy import *
from .models import Prime, Divisor


# divisors = Prime.objects.get().all()


class Calculator:

	# number = 0

	# def __init__(self, number):
	# 	self.number = number
	@staticmethod
	def create_divisor(number):
		# prime = Prime.objects.get(number='number')
		Divisor.objects.create(divisor=divisors(number),is_prime=isprime(number))		

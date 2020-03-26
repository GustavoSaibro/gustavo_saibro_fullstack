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
		divisor = divisors(number)
		is_prime = ""
		# print(isprime(number))
		if isprime(number):
			is_prime = "É um número primo!"
		else:
			is_prime = "Não é um número primo..."
		Divisor.objects.create(number=number,divisor=divisor,is_prime=is_prime)		

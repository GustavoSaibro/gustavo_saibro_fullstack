from sympy import *
from primes.models import Prime, Divisors


divisors = Prime.objects.get().all()



def create_divisor():
	divisor = Divisors.objects.create(is_prime=isprime(Prime.objects.get(i)), divisors=divisors(i))
	return divisor

from django.db import migrations
from rest_framework import serializers
from primes.models import Prime, Divisor

class PrimeSerializer(serializers.ModelSerializer):

	class Meta:
		model = Prime
		fields = '__all__'

class DivisorSerializer(serializers.ModelSerializer):

	class Meta:
		model = Divisor
		fields = '__all__'
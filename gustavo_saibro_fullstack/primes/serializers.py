from django.db import migrations
from rest_framework import serializers
from primes.models import Prime

class PrimeSerializer(serializers.ModelSerializer):

	class Meta:
		model = Prime
		fields = '__all__'
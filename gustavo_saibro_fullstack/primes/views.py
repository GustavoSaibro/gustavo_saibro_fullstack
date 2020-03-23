from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .calculator import *

from .models import Prime, Divisor
from .serializers import *

@api_view(['GET', 'POST'])
def primes_list(request):
    if request.method == 'GET':
        data = Prime.objects.all()

        serializer = PrimeSerializer(data, context={'request': request}, many=True)        

        return Response(serializer.data)

    elif request.method == 'POST':
        data2 = request.data.copy()
        calculator = Calculator()
        serializer = PrimeSerializer(data=request.data)
        number = int(data2.get('number'))
        print(number)
        # serializer2= DivisorSerializer(data=request.data)
        calculator.create_divisor(number)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def primes_detail(request, pk):
    try:
        prime = Prime.objects.get(pk=pk)
    except Prime.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PrimeSerializer(prime, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        prime.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


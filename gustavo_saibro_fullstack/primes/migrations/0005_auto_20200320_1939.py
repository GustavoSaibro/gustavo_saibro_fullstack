# Generated by Django 3.0.2 on 2020-03-20 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('primes', '0004_auto_20200320_1939'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prime',
            name='number',
            field=models.IntegerField(),
        ),
    ]

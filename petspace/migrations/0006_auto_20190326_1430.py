# Generated by Django 2.1.7 on 2019-03-26 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petspace', '0005_pet_lost'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='description',
            field=models.TextField(max_length=250),
        ),
        migrations.AlterField(
            model_name='pet',
            name='hobbies',
            field=models.TextField(default='', max_length=255),
        ),
    ]

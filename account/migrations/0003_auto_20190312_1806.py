# Generated by Django 2.1.7 on 2019-03-12 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_myuser_phone_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='myuser',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='myuser',
            name='is_admin',
        ),
        migrations.AlterField(
            model_name='myuser',
            name='email',
            field=models.EmailField(max_length=254, unique=True, verbose_name='email address'),
        ),
    ]

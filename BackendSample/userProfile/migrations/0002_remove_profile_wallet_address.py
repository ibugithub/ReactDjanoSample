# Generated by Django 5.1.4 on 2025-03-22 02:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userProfile', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='wallet_address',
        ),
    ]

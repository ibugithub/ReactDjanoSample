# Generated by Django 5.1.4 on 2025-03-22 02:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_remove_user_user_image_url_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='signUp_by',
            field=models.CharField(choices=[('email', 'Email'), ('google', 'Google'), ('facebook', 'Facebook'), ('microsoft', 'Microsoft')], default='email', max_length=20),
        ),
    ]

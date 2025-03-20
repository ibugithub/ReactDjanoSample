from rest_framework import serializers
from .models import Profile
from users.models import User
from users.serializers import UserSerializer

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = ['user', 'Display_name', 'profile_picture', 'created_at', 'updated_at']

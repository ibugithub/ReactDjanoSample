from django.urls import path
from .views import UserProfileView

urlpatterns = [
    path('getProfile/', UserProfileView.as_view(), name='user-profile'),
]

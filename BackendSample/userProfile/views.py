from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserProfileSerializer
from .models import Profile

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        try:
            profile = Profile.objects.get(user=request.user)
            serializer = UserProfileSerializer(profile)
            return Response(serializer.data)
        except Profile.DoesNotExist:
            return Response({'message': 'Profile not found'}, status=404)

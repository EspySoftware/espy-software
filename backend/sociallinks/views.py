from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SocialLinkSerializer
from .models import SocialLink

# Create your views here.
class SocialLinkViewSet(viewsets.ModelViewSet):
    serializer_class = SocialLinkSerializer
    queryset = SocialLink.objects.all()

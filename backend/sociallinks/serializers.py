from rest_framework import serializers
from .models import SocialLink

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = ('name', 'link', 'icon')
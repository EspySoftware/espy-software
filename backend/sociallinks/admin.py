from django.contrib import admin
from .models import SocialLink

class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('name', 'link', 'icon')

# Register your models here.
admin.site.register(SocialLink, SocialLinkAdmin)
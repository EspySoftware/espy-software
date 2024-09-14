from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from sociallinks import views

router = routers.DefaultRouter()
router.register(r'sociallinks', views.SocialLinkViewSet, 'sociallinks')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
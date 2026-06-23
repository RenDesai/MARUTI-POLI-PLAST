from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, GalleryImageViewSet, ContactMessageViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'gallery', GalleryImageViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

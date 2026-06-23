from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = (
        ('LUMPS', 'Plastic Lumps'),
        ('GRANULES', 'Plastic Granules'),
    )
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    image = models.ImageField(upload_to='products/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class GalleryImage(models.Model):
    title = models.CharField(max_length=200, blank=True)
    image = models.ImageField(upload_to='gallery/')
    order = models.IntegerField(default=0)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-uploaded_at']

    def __str__(self):
        return self.title or f"Gallery Image {self.id}"

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"

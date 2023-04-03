from django.db import models
from car.models import Category, Car
from django.conf import settings
User = settings.AUTH_USER_MODEL
# Create your models here.

class Ad(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=50, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, null=True, blank=True)
    manufacturer = models.CharField(max_length=50, null=True, blank=True)
    car = models.ForeignKey(
        Car, on_delete=models.CASCADE, null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)
    model = models.CharField(max_length=50, null=True, blank=True)
    year = models.IntegerField(null=True, blank=True)
    body_type = models.CharField(max_length=50, null=True, blank=True)
    petrol_type = models.CharField(max_length=50, null=True, blank=True)
    transmission = models.CharField(max_length=50, null=True, blank=True)
    mileage = models.IntegerField(null=True, blank=True)
    engine_capacity = models.IntegerField(null=True, blank=True)
    condition = models.CharField(max_length=50, null=True, blank=True)
    ownership_status = models.CharField(max_length=50, null=True, blank=True)
    vin = models.CharField(max_length=50, null=True, blank=True)
    images = models.JSONField(null=True, blank=True)
    location = models.CharField(max_length=50, null=True, blank=True)
    deleted = models.BooleanField(default=False)
    archived = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.title

class Image(models.Model):
    image = models.ImageField(upload_to='images/')

class Comment(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    ad = models.ForeignKey(Ad, on_delete=models.CASCADE, null = True, blank=True)
    comment = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

class Favorite(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)
    ad = models.ManyToManyField(Ad, null=True, blank=True)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

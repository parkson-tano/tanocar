from datetime import datetime, timedelta
from django.utils import timezone
from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework.views import APIView

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import ListAPIView

class AdAPIView(viewsets.ModelViewSet):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer

class AdListAPIView(viewsets.ModelViewSet):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer


class CommentAPIView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = AdSerializer


class CommentListAPIView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class FavoriteAPIView(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer


class FavoriteListAPIView(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer

class ImageAPIView(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
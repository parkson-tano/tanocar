from rest_framework import serializers
from .models import Ad, Image, Comment, Favorite
from auths.serializers import UserSerializer

class AdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ad
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class AdListSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    class Meta:
        model = Ad
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = "__all__"


class CommentListSerializer(serializers.ModelSerializer):
    ad = AdListSerializer(read_only=True, many=True)
    user = UserSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = "__all__"


class FavoriteListSerializer(serializers.ModelSerializer):
    ad = AdListSerializer(read_only=True, many=True)
    user = UserSerializer(read_only=True)
    class Meta:
        model = Favorite
        fields = "__all__"

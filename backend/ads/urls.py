from django.urls import path, include
from .views import *

urlpatterns = [
    path('add', AdAPIView.as_view({
        'get': 'list',
        'post' : 'create',
    })),
    path('', AdListAPIView.as_view({
        'get' : 'list',
    })),
    path('<int:pk>', AdAPIView.as_view({
        'get' : 'retrieve',
        'put' : 'update',
        'delete' : 'destroy',
        'patch': 'partial_update',
    })),
    path('comment/add', CommentAPIView.as_view({
        'get': 'list',
        'post': 'create',
    })),
    path('comment', CommentListAPIView.as_view({
        'get': 'list',
    })),
    path('comment/<int:pk>', CommentAPIView.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy',
        'patch': 'partial_update',
    })),
    path('favorite/add', FavoriteAPIView.as_view({
        'get': 'list',
        'post': 'create',
    })),
    path('favorite', FavoriteListAPIView.as_view({
        'get': 'list',
    })),
    path('favorite/<int:pk>', FavoriteAPIView.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy',
        'patch': 'partial_update',
    })),
    path('image', ImageAPIView.as_view({
        'get': 'list',
        'post': 'create',
    }))
]

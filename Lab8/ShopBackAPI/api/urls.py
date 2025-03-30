from django.contrib import admin
from django.urls import path
from api.views import getAllProducts, getOneProduct, getAllCategories, getOneCategory, ProductsByCategory

urlpatterns = [
    path('products/', getAllProducts),
    path('products/<int:id>/', getOneProduct),
    path('categories/', getAllCategories),
    path('categories/<int:id>/', getOneCategory),
    path('categories/<int:id>/products/', ProductsByCategory)


]
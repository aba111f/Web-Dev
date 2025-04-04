from django.shortcuts import render
from rest_framework import mixins, generics
from api.models import Product
from api.serializer import ProductSerializer
# Create your views here.


class ProductListView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)


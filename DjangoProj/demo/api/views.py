from django.http import JsonResponse
from django.shortcuts import render
from api.models import Product


# Create your views here.
def product_list(request):
    products = Product.objects.all()
    result = []
    for product in products:
        result.append({
            'id':product.id,
            'name':product.name,
            'price':product.price

        })
    return JsonResponse(result, safe=False)

def product_detail(request, id):
    product = Product.objects.filter(id=id)
    return JsonResponse(product)
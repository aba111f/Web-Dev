from django.http import JsonResponse
from django.shortcuts import render
from api.models import Product, Category

# Create your views here.
def getAllProducts(request):
    if request.method == "GET":
        products_data = list(Product.objects.all().values())
        return JsonResponse(products_data, safe=False)
    
    return JsonResponse({"error":"Data not found"}, status=400)


def getOneProduct(request, id: int):
    if request.method == "GET":
        product_data = Product.objects.filter(id = id).values().first()
        return JsonResponse(product_data, safe=False)
    return JsonResponse("Data not found", safe=False)


def getAllCategories(request):
    if request.method == "GET":
        categories_data = list(Category.objects.all().values())
        return JsonResponse(categories_data, safe=False)
    
    return JsonResponse("Data not found", safe=False)


def getOneCategory(request, id: int):
    if request.method == "GET":
        product_data = Category.objects.filter(id = id).values().first()
        return JsonResponse(product_data, safe=False)
    return JsonResponse("Data not found", safe=False)
    

def ProductsByCategory(request, id: int):
    if request.method == "GET":
        category = Category.objects.get(id = id)
        products = Product.objects.filter(category=category).values(
            'id', 'name', 'price', 'description', 'count', 'is_active'
        )
        return JsonResponse(list(products), safe=False)
    return JsonResponse("DATA NOT FOUND!!!", safe=False)

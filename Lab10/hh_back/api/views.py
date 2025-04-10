from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import generics
from api.models import Company, Vacancy
from api.serializer import CompanySerializer, VacancySerializer, VacancyNewSerializer
# Create your views here.

class CompanyView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

        
class CompanyDetailedView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

class CompanyVacanciesView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs.get("id")
        return Vacancy.objects.filter(company_id=company_id)

class VacancyView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'

class VacancyDetailedView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'

class TopTenVacancyView(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer

def ToptenVacancy(request):
    if request.method == "GET":
        vacancy_data = Vacancy.objects.order_by('-salary')[:10]
        serialized = VacancyNewSerializer(vacancy_data, many=True)
       
        return JsonResponse(serialized.data, safe=False)

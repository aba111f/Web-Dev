from django.urls import path
from api.views import CompanyView, VacancyView, TopTenVacancyView, VacancyDetailedView, CompanyDetailedView, ToptenVacancy, CompanyVacanciesView
urlpatterns = [
    path('companies/', CompanyView.as_view()),
    path('companies/<int:id>/', CompanyDetailedView.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacanciesView.as_view()),
    path('vacancies/', VacancyView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailedView.as_view()),
    path('vacancies/top_ten/', ToptenVacancy)
]
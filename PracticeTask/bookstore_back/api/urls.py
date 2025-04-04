from django.urls import path
from api.views import BookView, BookDetailedView
urlpatterns = [
    path('books/', BookView.as_view()),
    path('books/<int:id>/', BookDetailedView.as_view())

]
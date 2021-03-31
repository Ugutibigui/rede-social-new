from django.contrib import admin
from django.urls import path
from aplicativo import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('criapost/', views.criarPostagem),
    path('postagens/', views.pegarPostagens)
]

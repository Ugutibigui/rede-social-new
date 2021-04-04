from django.contrib import admin
from django.urls import path
from aplicativo import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cria-usuario-banco/', views.criarUsuarioBanco),
    path('usuarios-banco/', views.pegarUsuarioBanco)
]

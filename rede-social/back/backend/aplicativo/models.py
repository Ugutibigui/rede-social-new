from django.db import models

# Create your models here.
class Postagem(models.Model):
    nome = models.CharField(max_length=30)
    conteudo = models.CharField(max_length=2000)
    data = models.CharField(max_length=200)
    hora = models.CharField(max_length=200)
    fotoPerfil = models.CharField(max_length=2000)
    linkDoConteudo = models.CharField(max_length=2000)
    tipoPub = models.CharField(max_length=30)
    
    def _str_(self):
        return self.nome
from rest_framework import serializers
from aplicativo.models import Postagem

class PostagemSerializer( serializers.ModelSerializer):
    class Meta:
        model = Postagem
        fields = ['id','nome', 'conteudo','data','hora','fotoPerfil','linkDoConteudo','tipoPub']
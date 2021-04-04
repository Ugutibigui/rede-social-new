from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser
from aplicativo.models import Usuario
from aplicativo.serializer import UsuarioSerializer


@csrf_exempt
@api_view(['POST'])
@parser_classes([JSONParser])
def criarUsuarioBanco(request):
    if request.method == 'POST':
        nome = request.data['nome']
        Usuario.objects.all().delete()
        objeto = Usuario.objects.create(nome = nome)
        objeto.save()

        return JsonResponse({"mensagem": "postou"}, safe = False)

def pegarUsuarioBanco(request):
    if request.method == 'GET':
        usuario = Usuario.objects.all()
        serializer = UsuarioSerializer(usuario, many=True)
        return JsonResponse(serializer.data, safe=False)
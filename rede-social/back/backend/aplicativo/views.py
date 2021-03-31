from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser
from aplicativo.models import Postagem
from aplicativo.serializer import PostagemSerializer


@csrf_exempt
@api_view(['POST'])
@parser_classes([JSONParser])

def criarPostagem(request):
    if request.method == 'POST':
        nome = request.data['nome']
        conteudo = request.data['conteudo']
        data = request.data['data']
        hora = request.data['hora']
        fotoPerfil = request.data['fotoPerfil']
        linkDoConteudo = request.data['linkDoConteudo']
        tipoPub = request.data['tipoPub']
        objeto = Postagem.objects.create(nome = nome, conteudo = conteudo, data = data, hora = hora, fotoPerfil = fotoPerfil, linkDoConteudo = linkDoConteudo, tipoPub = tipoPub)
        objeto.save()

        return JsonResponse({"mensagem": "postou"}, safe = False)

def pegarPostagens(request):
    if request.method == 'GET':
        postagem = Postagem.objects.all()
        serializer = PostagemSerializer(postagem, many=True)
        return JsonResponse(serializer.data, safe=False)
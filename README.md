# gustavo_saibro_fullstack

Esse projeto foi criado com o intuito de se calcular divisores de numeros primos e mostrar se são ou não primos, 
e caso sejam, mostrar seus divisores.

## Descrição

Por meio de uma API rest, o usuario consegue requisitar os calculos por meio de uma interface web. 
Mostrando os numeros requisitados. Ainda não esta em pleno funcionamento, pois os divisores ainda não são mostrados. 
Então ainda falta algum trabalho a ser feito em versões futuras.

## Começando

### Dependencias

* Para funcionar você irá precisar: 
  * Django==3.0.2
  * django-cors-headers==3.2.1
  * djangorestframework==3.11.0
  * npm versão 6.13.4
  * node v12.16.1
  


### Instalação

É nescessaria a instalação do python 3.7, do node versão mais atual, axios versão mais atual, e do react versão mais atual
Após a instalação do python, utlize os comandos abaixo para a instalação das bibliotecas:
  * pip install django==3.0.2
  * pip install django-cors-headers==3.2.1
  * pip install djangorestframework==3.11.0
  

### Executando o programa

* Navegue até a diretório gustavo_saibro_fullstack por meio de um terminal/ prompt, e execute o seguinte comando:  
```
python3.7 manage.py runserver
```
  
* Navegue até a diretório primes-fe por meio de um terminal/ prompt, e execute o seguinte comando:
```
npm start
```


## Authors

Contribuidores do projeto:

Gustavo Saibro  
ex. [@GustavoSaibro](https://github.com/GustavoSaibro)

## Version History

* 0.2
    * API integrada com o front-end do React    
* 0.1
    * Primeira versão, funcionando a API

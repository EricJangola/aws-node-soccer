# AWS Soccer Node

# Dados dos alunos
   *  Eric Jangola e Silva - 139959
   *  Julia Casseb
   *  Michael Nakashima

# Stack

*  Nodejs com a utilização do express.js
*  Redis para a persistencia em cache
*  Utilizamos o RabbitMq para realizar os Post's do trabalho ( Redis as a service )
*  Como banco relacional utilizamos o Mysql via docker, para evitar o boilerplate da instalação localMecanismos
*  
# Mecanismos

Utilizamos o mecanismo de cache, no Redis, para obter uma melhor performance, em conjunto com a estrategia de fila, principalmente nos Post's, devido ao fato do Nodejs ser single thread, para aplicações com alta performance é interessante o uso de filas.

*  A empresa que você trabalha foi contratada pela CBF (Confederação Brasileira de Futebol) 
para a criação de uma API que auxiliará no gerenciamento de sua principal competição anual: O 
Campeonato  Brasileiro. Portanto, ficou  combinado  que, na primeira  Sprint, os seguintes 
recursos deverão ser implementados: Times, Jogadores e Transferências Sobre os atributos relacionados a cada recurso, use a sua imaginação. Aqui vão algumas sugestões: 
    * Time 
    * Nome 
    * Localidade 
    * Jogadores 
    * Nome 
    * Data de Nascimento 
    * País 
    * Time 
    * Transferências 
    * Time de Origem 
    * Time de Destino 
    * Data 
    * Valor 
# Descrição 
1. Neste primeiro momento, a única regra é: seguir, no mínimo, o nível 2 do Modelo de Maturidade 
de Richardson. Portanto: 
- Utilize a linguagem/framework que o seu grupo possui mais habilidade (ou alguma outra 
que vocês queiram aprender juntos). Talvez seja uma boa oportunidade para isto! 
- Utilize a forma de persistência que vocês acharem melhor: Banco Relacional, Banco Não-
Relacional, Arquivo (brincadeira!), etc. 

2. Enfim chegamos à segunda e última Sprint desse projeto. Neste momento, vocês deverão 
implementar o principal recurso desta API, chamado Torneio. Deverá ser possível realizar CRUD 
sobre:  
* Torneios,  
* Times cadastrados em Torneios 
* Partidas Cadastradas entre Times, em Torneios. 
Além disso, crie sub-recursos de Torneio, para cadastrar os eventos que podem ocorrer em uma 
partida. Exemplos: 
* POST /torneios/<id>/partidas/<id>/eventos/inicio 
* POST /torneios/<id>/partidas/<id>/eventos/gol 
* POST /torneios/<id>/partidas/<id>/eventos/intervalo 
* POST /torneios/<id>/partidas/<id>/eventos/acrescimo 
* POST /torneios/<id>/partidas/<id>/eventos/substituicao 
* POST /torneios/<id>/partidas/<id>/eventos/advertencia 
* POST /torneios/<id>/partidas/<id>/eventos/fim 
Além da persistência das informações relacionadas aos eventos no repositório que vocês 
escolheram utilizar, vocês deverão encaminhar as mensagens recebidas para um tópico ou para 
uma fila (sugestão: Amazon SNS/SQS, Kafka, RabbitMQ, etc).  

# Como rodar a aplicação
1. Primeiro faça download do repositório ou clone o mesmo na sua máquina.

2. com o projeto na sua máquina, no terminal de comando npm + i.

3. Assim que as dependências forem instaladas, será necessário configurar o config.json dentro da pasta src.

4. Edite o config.json para na chave do database com sua senha e password para rodar o mysql.

5. A aplicação rodará em http://localhost:1800 e o swagger da rota de APIs é a http://localhost:18000/doc/#/

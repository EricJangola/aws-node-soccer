# AWS Soccer Node

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
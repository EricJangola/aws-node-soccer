const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger_output.json'

const doc = {
    "info": {
        "description": "AWS Node Soccer",
        "version": "1.0",
        "title": "AWS Node Soccer"
    },
    "host": "localhost:18000",
    "basePath": "/",
    "schemes": [
        "http"
    ],
    "produces": [
        "application/json"
    ],
};

const endpointsFiles = [
    './src/routes/index.route.js',
    './src/routes/match.route.js',
    './src/routes/matchDetail.route.js',
    './src/routes/player.route.js',
    './src/routes/team.route.js',
    './src/routes/tournament.route.js',
    './src/routes/transfer.route.js'
]

swaggerAutogen(outputFile, endpointsFiles, doc)
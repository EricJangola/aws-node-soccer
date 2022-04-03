const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger_output.json'

const endpointsFiles = [
    './src/routes/match.route.js',
    './src/routes/matchDetail.route.js',
    './src/routes/player.route.js',
    './src/routes/team.route.js',
    './src/routes/tournament.route.js',
    './src/routes/transfer.route.js'
]

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})
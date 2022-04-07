const redis = require("redis");
let client;

module.exports = {
    client,
    initialize,
    setKey,
    getKey,
    getAllKey
};

async function initialize() {
    
    if(client) {
        return client;
    }

    client = redis.createClient();
    await client.connect();

    client.on("error", (error) => {
        console.error(error);
    });

    client.on('connect', function() {
        console.log('Connected!');
      });
      
    return client;
}

async function setKey(key, value) {
    if(!client) {
        await initialize();
    }
    client.set(key, JSON.stringify(value));
}

async function getKey(key, value) {
    if(!client) {
        await initialize();
    }
    return client.get(key);
}

async function getAllKey(key, value) {
    if(!client) {
        await initialize();
    }
    return client.keys(key+"*");
}
const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
    
    async index(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
        id, 
        name, 
        email, 
        whatsapp,
        city,
        uf,
    })   // não foi finalizado com ";".

    // Como o INSERT pode levar um "tempinho",
    // usamos o recurso de função assincrona na
    // função da rota POST. Assim coloca-se
    // ASYNC na função da rota e AWAIT na
    // Inserção de dados.


    return response.json( { id } );
    }
};
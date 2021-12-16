const mongoose = require('mongoose');

const MongoDBClient = {
    initialize: () => {
        try {
            const client = mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_SECRET}@cluster0.ayvxd.mongodb.net/deckbuilder?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            client.then(() => console.log(`🎉 🎉 successfully connected to DB: deckbuilder  `))
        } catch (e) {
            throw Error(e)
        }
    }
}
module.exports = MongoDBClient;
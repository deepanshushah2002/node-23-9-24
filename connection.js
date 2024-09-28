const mongoose = require('mongoose');




async function connection() {
    try {
        await mongoose.connect('mongodb://localhost:27017/batch-3-views')
        console.log('Connected to MongoDB')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connection;

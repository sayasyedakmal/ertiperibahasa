const mongoose = require('mongoose');

const peribahasaSchema = new mongoose.Schema({
    peribahasa: {
        type: String
    },
    maksud: {
        type: String
    },
    penjelasan: {
        type: String
    },
    contohAyat: {
        type: String
    }
});

module.exports = mongoose.model('Peribahasa', peribahasaSchema);
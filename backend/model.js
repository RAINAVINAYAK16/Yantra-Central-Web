const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    pH_level: {
        type: Number,
        required: true
    },
    avgwaterspeed: {
        type: Number,
        required: true
    },
    salinity: {
        type: Number,
        required: true
    },
    turbidity: {
        type: Number,
        required: true
    },
    spec_conductance: {
        type: Number,
        required: true
    },
    spo2: {
        type: Number,
        required: true
    },
    chlorophyll: {
        type: Number,
        required: true
    },
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users
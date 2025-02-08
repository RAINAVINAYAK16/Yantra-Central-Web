const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    record_number: {
        type: Number,
        required: false
    },
    avgwaterspeed: {
        type: Number,
        required: false
    },
    avgwaterdirection: {
        type: Number,
        required: false
    },
    chlorophyll: {
        type: Number,
        required: false
    },
    chlorophyll_quality: {
        type: Number,
        required: false
    },
    temperature: {
        type: Number,
        required: false
    },
    temperature_quality: {
        type: Number,
        required: false
    },
    dissolved_oxygen: {
        type: Number,
        required: false
    },
    dissolved_oxygen_quality: {
        type: Number,
        required: false
    },
    pH_level: {
        type: Number,
        required: false
    },
    pH_quality: {
        type: Number,
        required: false
    },
    salinity: {
        type: Number,
        required: false
    },
    salinity_quality: {
        type: Number,
        required: false
    },
    spec_conductance: {
        type: Number,
        required: false
    },
    spec_conductance_quality: {
        type: Number,
        required: false
    },
    turbidity: {
        type: Number,
        required: false
    },
    turbidity_quality: {
        type: Number,
        required: false
    },
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users
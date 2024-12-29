const mongoose = require('../db_init');
const {String} = mongoose.Schema.Types;

const AccomoSchema = new mongoose.Schema({
    accommodationName: {
        type: String,
        required: true,
    },
    roadAddress: {
        type: String,
        required: true,
    },
    jibunAddress: {
        type: String,
        required: true,
    },
    zoneCode: {
        type: String,
        required: true,
    },
    x: {
        type: String,
        required:true
    },
    y: {
        type: String,
        required:true
    },
    detailAddress: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    introduction: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true
    },
    service: {
        type: [String],
        required: false
    }
},{
    timestamps: {
        createdAt: true, //생성시간
    }
});

const Accomo = mongoose.model("accomdation", AccomoSchema);
module.exports = Accomo;
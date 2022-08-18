const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barrageSchema = new Schema({
    Nom_Fr: {
        type: String,
        required: true
    },
    Nom_Ar: { 
        type: String,
        required: true
    },
    apports: {
       type: Number,
       required: true
    },
    id_barrage: {
       type: Number,
       required: true
    },
    lachers: {
        type: Number,
        required: true
    },
    stock: {
       type: Number,
       required: true
    },
    cumul_mensuel_apports: {
       type: Number,
       required: true
    },
    cumul_annuel_apports: {
       type: Number,
       required: true
    },
    cumul_mensuel_lachers: {
       type: Number,
       required: true
    },
    cumul_annuel_lachers: {
       type: Number,
       required: true
    },
    moy_mois: {
       type: Number,
       required: true
    },
    cumul_annee_prec: {
       type: Number,
       required: true
    },
    moy_periode: {
       type: Number,
       required: true
    },
    stock_annee_prec: {
       type: Number,
       required: true
    },
    Cap_tot_act: {
       type: Number,
       required: true
    },
    Cote: {
       type: Number,
       required: true
    },
    Cap_tot_init: {
       type: Number,
       required: true
    },
    fonctionnel: {
       type: Number,
       required: true
    },
    Annee_prod: {
       type: Number,
       required: true
    },
    Latitude: {
       type: Number,
       required: true
    },
    Longitude: {
       type: Number,
       required: true
    },
    Bassin_versant: {
       type: Number,
       required: true
    },
    Date: {
       type: String,
       required: true
    }   
    

},{
   strict: false,
   versionKey: false

});

module.exports = mongoose.model('barrage', barrageSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barrageSchema = new Schema({
    Nom_Fr: {
        type: String,
        required: true
    },
    Nom_Ar: { 
        type: String
    },
    apports: {
       type: Number,
       required: true,
       default:0
    },
    id_barrage: {
       type: Number,
       

    },
    lachers: {
        type: Number,
        required: true,
        default:0
    },
    stock: {
       type: Number,
       required: true,
       default:0
    },
    cumul_mensuel_apports: {
       type: Number,
       required: true,
       default:0
    },
    cumul_annuel_apports: {
       type: Number,
       required: true,
       default:0
    },
    cumul_mensuel_lachers: {
       type: Number,
       required: true,
       default:0
    },
    cumul_annuel_lachers: {
       type: Number,
       required: true,
       default:0
    },
    moy_mois: {
       type: Number,
       required: true,
       default:0
    },
    cumul_annee_prec: {
       type: Number,
       required: true,
       default:0
    },
    moy_periode: {
       type: Number,
       required: true,
       default:0
    },
    stock_annee_prec: {
       type: Number,
       required: true,
       default:0
    },
    Cap_tot_act: {
       type: Number,
       required: true,
       default:0
    },
    Cote: {
       type: Number,
       required: true,
       default:0
    },
    Cap_tot_init: {
       type: Number,
       required: true,
       default:0
    },
    fonctionnel: {
       type: Number,
       required: true,
       default:1
    },
    Annee_prod: {
       type: Number
    },
    Latitude: {
       type: Number,
       
    },
    Longitude: {
       type: Number,
 
    },
    Bassin_versant: {
       type: Number,
    
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
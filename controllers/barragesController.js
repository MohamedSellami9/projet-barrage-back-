const Barrage = require('../model/Barrage');

const getAllBarrageNames= async (req, res) => {
    const Barrages = await Barrage.distinct("Nom_Fr");
    
    if (!Barrages) return res.status(204).json({ 'message': 'No Barrages found.' });
    res.json(Barrages);
}
const getAllBarrages = async (req, res) => {
    const Barrages = await Barrage.find();
    
    if (!Barrages) return res.status(204).json({ 'message': 'No Barrages found.' });
    res.json(Barrages);
}

const getAlldates = async (req, res) => {
    const Barrages = await Barrage.distinct("Date");
    
    if (!Barrages) return res.status(204).json({ 'message': 'No Barrages found.' });
    res.json(Barrages);
}


const createNewBarrage = async (req, res) => {
    if (!req?.body?.Nom_Fr) {
        return res.status(400).json({ 'message': 'Nom are required' });
    }

    try {
        const barrage=await Barrage.findOne({ Nom_Fr: req.body.Nom_Fr,
            Date: "2022-01-04 00:00:00"}).exec();
            console.log(barrage)
        const result = await Barrage.create({
            Nom_Fr: req.body.Nom_Fr,
            Date: req.body.Date,
            Cap_tot_act: barrage.Cap_tot_act,
            Nom_Ar: barrage.Nom_Ar,
            Cote: barrage.Cote,
            Bassin_versant:barrage.Bassin_versant,
            Latitude: barrage.Latitude,
            Longitude:barrage.Longitude,
            Annee_prod:barrage.Annee_prod

        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateBarrage = async (req, res) => {
    if ((!req?.body?.Nom_Fr)|| (!req?.body?.Date)||(!req?.body?.field)||(!req?.body?.value)){
        return res.status(400).json({ 'message': 'Date or nom parameter is required.' });
    }

    const barrage = await Barrage.findOne({Nom_Fr: req.body.Nom_Fr,
                                            Date:req.body.Date }).exec();
    if (!barrage) {
        return res.status(204).json({ "message": `No barrage matches date and nom fr.` });
    }
    barrage[req.body.field] =req.body.value;
    const result = await barrage.save();
    res.json(result);
}

const deleteBarrage = async (req, res) => {
    const barrage = await Barrage.findOne({Nom_Fr: req.params.Nom_Fr,
                                            Date:req.params.Date }).exec();
    if (!barrage) {
      return res.status(204).json({ 'message': `barrage not found` });
        }


    const result = await Barrage.deleteOne({Nom_Fr: req.params.Nom_Fr,
        Date:req.params.Date }); 
    res.json(result);
    
}

const getBarragesbyname = async (req, res) => {
    if (!req?.params?.name) return res.status(400).json({ 'message': 'Barrage name required.' });

    const Barrages = await Barrage.find({ Nom_Fr: req.params.name }).exec();
    if (!Barrages) {
        return res.status(204).json({ "message": `No Barrage matches nom ${req.params.name}.` });
    }
    res.json(Barrages);
}
const getBarragesbytime = async (req, res) => {

    if (!req.body?.date) return res.status(400).json({ 'message': 'Barrage date required.' });

    const Barrages = await Barrage.find({ Date: req.body.date }).exec();
    if (!Barrages) {
        return res.status(204).json({ "message": `No Barrage matches nom ${req.body.date}.` });
    }
    res.json(Barrages);
}
const addBarragesIndex = async (req,res) => {
    const barrage = await Barrage.findOne({Date: '2022-01-04 00:00:00',Nom_Fr: 'abid'})
   await Barrage.createIndexes({'valeur' : 1});
        barrage.valeur= 69;
        const result = await barrage.save();
       
       res.json(result);
}
module.exports = {
    createNewBarrage,
    updateBarrage,
    deleteBarrage,
    getBarragesbyname,
    getBarragesbytime,
    getAlldates,
    getAllBarrages,
    getAllBarrageNames,
    addBarragesIndex
}
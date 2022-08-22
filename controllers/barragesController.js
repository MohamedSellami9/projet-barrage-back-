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
        const result = await Barrage.create({
            Nom_Fr: req.body.Nom_Fr,
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
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Barrage ID required.' });

    const Barrage = await Barrage.findOne({ _id: req.body.id }).exec();
    if (!Barrage) {
        return res.status(204).json({ "message": `No Barrage matches ID ${req.body.id}.` });
    }
    const result = await Barrage.deleteOne(); //{ _id: req.body.id }
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
       const Barrages =Barrage.index({valeur : 1});
       res.json(Barrages);
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
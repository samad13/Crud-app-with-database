const Crude = require('../models/crude')





exports.createNewProfile = function (req, res){

    Crude.create({
        name:req.body.name,
        email:req.body.email,
        country:req.body.country,
    },(err, newCrude)=>{
        if (err) {
            return res.status(500).json({message: err})
        } else {
            return res.status(200).json({message: "new profile created",newCrude})
        }
    })
};

    exports.fetchNewProfile = (req, res)=>{

        Crude.find({},(err,crudes)=>{
            if (err){
                return res.status(500).json({message: err})
            }else {
                return res.status(200).json({crudes})
            }
        })
    };

    exports.fetchNewSingleProfile = (req, res) => {
        Crude.findById(req.params.id, (err, crude) => {
            if (err){
              return res.status(500).json({message: err})
            }
            else if (!crude){
                return res.status(404).json({message: "profile not found"})
            }else{
                return res.status(200).json({ crude })
            }
        })
    
    };

    exports.updateSingleProfile = (req, res) =>{
        Crude.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email
    },(err, crude)=> {
        if (err) {
            return res.status(500).json({message: err})
        }else if (!crude) {
            return res.status(404).json({message: "profie not found"})
        }else {
            crude.save((err, savedCrude)=>{
                if (err) {
                    return res.status(400).json({message: err})
                }else{
                    return res.status(200).json({message: "profile updated succesfully"})
                }
            })
        }
    })
    };

    exports.deleteSingleProfile =(req, res) =>{
        Crude.findByIdAndDelete(req.params.id, (err, crude) =>{
            if (err) {
                return res.status(500).json({message: err})
            }
            else if (!crude){
                return res.status(404).json({message:"profile was not found"})
            }else{
                return res.status(200).json({message: "profile succesfully deleted"})
            }
            })
        }

        
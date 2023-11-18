//require the messages model
const Color = require("../../../models/Color");

const index = async (req, res) => {
    let color1 = req.query.color1;
    let color2 = req.query.color2;
    let color3 = req.query.color3;
    let color4 = req.query.color4;
    let color5 = req.query.color5;
    let colors = [];
    if(req.query.color1) {
        try {
            let color1 = await Color.find({ color1: req.query.color1 });
            let color2 = await Color.find({ color2: req.query.color2 });
            let color3 = await Color.find({ color3: req.query.color3 });
            let color4 = await Color.find({ color4: req.query.color4 });
            let color5 = await Color.find({ color5: req.query.color5 });
            res.json({
                "status": "success",
                "message": "GETTING colors",
                "data": {
                    "color1": color1,
                    "color2": color2,
                    "color3": color3,
                    "color4": color4,
                    "color5": color5
                }
            });
        } catch (err) {
            console.error(err);
            res.json({
                "status": "error",
                "message": "An error occurred while getting the colors."
            });
        }
    }
    else {
        try{
            colors = await Color.find({});
            res.json({
                status: "success",
                message: "GETTING colors",
                data: [{
                    messages: color1,color2,color3,color4,color5
                }],
            });
        }
        catch(err){
            console.error(err);
            res.json({
                status: "error",
                message: "An error occurred while getting the colors.",
            });
        }
    }
    
};

const create = async(req, res) => {
    let m = new Color();
    m.color1 = req.body.color1;
    m.color2 = req.body.color2;
    m.color3 = req.body.color3;
    m.color4 = req.body.color4;
    m.color5 = req.body.color5;
     try {
        let doc = await m.save();
        res.json({
            "status": "success",
            "message": "Color sent",
            "data": {
                "message": doc
            }
        });
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "message": "Could not save color"
        });
    }

};

module.exports.index = index;
module.exports.create = create;
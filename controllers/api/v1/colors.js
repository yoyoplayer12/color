//require the messages model
const Color = require("../../../models/Color");

const index = async (req, res) => {
    let colors;
    if(req.query.color1) {
        try{
            let colors = await Color.find({ color1: req.query.color1 });
            if (colors.length > 0) {
                res.json({
                    "status": "success",
                    "message": "GETTING colorarray for color" + req.query.color1,
                    "data": {
                        "messages": colors
                    }
                });
            } else {
                res.json({
                    "status": "error",
                    "message": "No colorarray found for color " + req.query.color1
                });
            }
        } catch (err) {
            console.error(err);
            res.json({
                "status": "error",
                "message": "An error occurred while getting the colorarray."
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
                    messages: colors
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
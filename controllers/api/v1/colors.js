//require the color model
const Color = require("../../../models/Color");

const index = async (req, res) => {
    let color1 = req.query.color1;
    let color2 = req.query.color2;
    let color3 = req.query.color3;
    let color4 = req.query.color4;
    let color5 = req.query.color5;
    if(req.query.color1 || req.query.color2 || req.query.color3 || req.query.color4 || req.query.color5) {
        try {
            let color1 = await Color.find({ color1: req.query.color1 });
            let color2 = await Color.find({ color2: req.query.color2 });
            let color3 = await Color.find({ color3: req.query.color3 });
            let color4 = await Color.find({ color4: req.query.color4 });
            let color5 = await Color.find({ color5: req.query.color5 });
            if (color1.length > 0) {
                res.json({
                    "status": "success 1",
                    "message": "GETTING colors for color1 " + req.query.color1,
                    "data": {
                        "color": color1
                    }
                });
            } else {
                res.json({
                    "status": "error 2",
                    "message": "No color found for color " + req.query.color1
                });
            }

            if (color2.length > 0) {
                res.json({
                    "status": "success 3",
                    "message": "GETTING colors for color2 " + req.query.color2,
                    "data": {
                        "color": color2
                    }
                });
            } else {
                res.json({
                    "status": "error 4",
                    "message": "No color found for color " + req.query.color2
                });
            }

            if (color3.length > 0) {
                res.json({
                    "status": "success 5",
                    "message": "GETTING colors for color3 " + req.query.color3,
                    "data": {
                        "color": color3
                    }
                });
            } else {
                res.json({
                    "status": "error 6",
                    "message": "No color found for color " + req.query.color3
                });
            }

            if (color4.length > 0) {
                res.json({
                    "status": "success 7",
                    "message": "GETTING colors for color4 " + req.query.color4,
                    "data": {
                        "color": color4
                    }
                });
            } else {
                res.json({
                    "status": "error 8",
                    "message": "No color found for color " + req.query.color4
                });
            }

            if (color5.length > 0) {
                res.json({
                    "status": "success 9",
                    "message": "GETTING colors for color4 " + req.query.color5,
                    "data": {
                        "color": color5
                    }
                });
            } else {
                res.json({
                    "status": "error 10",
                    "message": "No color found for color " + req.query.color5
                });
            }
        } catch (err) {
            console.error(err);
            res.json({
                "status": "error 11",
                "message": "An error occurred while getting the colors."
            });
        }
    }
    else {
        try{
            colors = await Color.find({});
            res.json({
                status: "success 12",
                message: "GETTING colors",
                data: [{
                    messages: color1,color2,color3,color4,color5
                }],
            });
        }
        catch(err){
            console.error(err);
            res.json({
                status: "error 13",
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
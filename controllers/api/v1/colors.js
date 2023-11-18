//require the messages model
const Color = require("../../../models/Color");

const index = async (req, res) => {
    let colors = [req.query.color1, req.query.color2, req.query.color3, req.query.color4, req.query.color5];
    let results = [];
    for (let i = 0; i < colors.length; i++) {
        if (colors[i]) {
            try {
                let color = await Color.find({ ['color' + (i + 1)]: colors[i] });
                if (color.length > 0) {
                    results.push({
                        "status": "success",
                        "message": "GETTING colors for color" + (i + 1) + " " + colors[i],
                        "data": {
                            "color": color
                        }
                    });
                } else {
                    results.push({
                        "status": "error",
                        "message": "No color found for color " + colors[i]
                    });
                }
            } catch (err) {
                console.error(err);
                res.json({
                    "status": "error",
                    "message": "An error occurred while getting the colors."
                });
                return;
            }
        }
    }
    res.json(results);
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
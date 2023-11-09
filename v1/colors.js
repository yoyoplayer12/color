//require the colors model
const Color = require("../../../models/Color");

const index = async (req, res) => {
    let colors;
    if(req.query.user) {
        try {
            let colors = await Color.find({ username: req.query.user });
            if (colors.length > 0) {
                res.json({
                    "status": "success",
                    "message": "GETTING colors for user " + req.query.user,
                    "data": {
                        "colors": colors
                    }
                });
            } else {
                res.json({
                    "status": "error",
                    "message": "No colors found for user " + req.query.user
                });
            }
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
                    colors: colors
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
    m.color = req.body.color;
    m.username = req.body.username;
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
            "message": "Could not save message"
        });
    }

};
const show = async (req, res) => {
    try {
        let color = await Color.findById(req.params.id);
        if (color) {
            res.json({
                "status": "success",
                "message": "GETTING color with ID " + req.params.id,
                "data": {
                    "message": color
                }
            });
        } else {
            res.json({
                "status": "error",
                "message": "Color with ID " + req.params.id + " not found."
            });
        }
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "message": "An error occurred while retrieving the color."
        });
    };
}
const update = async (req, res) => {
    try {
        let color = await Color.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (color) {
            res.json({
                "status": "success",
                "message": "UPDATED color with ID " + req.params.id,
                "data": {
                    "message": color
                }
            });
        } else {
            res.json({
                "status": "error",
                "message": "Color with ID " + req.params.id + " not found."
            });
        }
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "message": "An error occurred while updating the color."
        });
    }
};
const destroy = async (req, res) => {
    try {
        let color = await Color.findByIdAndDelete(req.params.id);
        console.log(color);
        if (color) {
            res.json({
                "status": "success",
                "message": "DELETED color with ID " + req.params.id
            });
        } else {
            res.json({
                "status": "error",
                "message": "Color with ID " + req.params.id + " not found."
            });
        }
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "message": "An error occurred while deleting the color."
        });
    }
};


module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
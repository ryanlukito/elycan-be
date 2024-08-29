const express = require('express');
const cors = require('cors');
const db = require('./db.js');
const elycanmodel = require('./elycanmodel')

const app = express();

dotenv.config()
const port = process.env.API_PORT || 5050

app.use(cors());
app.use(express.json());

// post data into table
app.post('/post_sensor', async(req,res) => {
    console.log(req.body); // Log the incoming request body
    const {kecepatanCur, arahCur} = req.body;
    try {
        const data = await elycanmodel.create({
            kecepatan: parseFloat(kecepatanCur),
            arah: parseInt(arahCur),
        });
        res.status(200).json(data);
    } catch(err) {
        res.status(500).json({msg: err.message});
    }
});

// get time into table
app.get("/get_time", async (req, res) => {
    try {
        const data = await elycanmodel.findAll({
            attributes: ['createdAt'],
            order: [["createdAt", "DESC"]],
            limit:1
        });

        if (data.length > 0) {
            const createdAt = new Date(data[0].createdAt);
            const localTime = createdAt.toLocaleString('en-GB');
            res.status(200).json({time: localTime});
        } else {
            res.status(404).json({ msg: "No records found" });
        }
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
});

app.listen(port, () => {
    console.log(`app running in localhost:${port}`);
  });
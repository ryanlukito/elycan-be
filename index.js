const express = require('express');
const cors = require('cors');
const db = require('./db.js');
const elycanmodel = require('./elycanmodel')

const app = express();
const port = 5050;

app.use(cors());
app.use(express.json());

// post data into table
app.post('/post_sensor', async(req,res) => {
    const {temperatureCur, humidityCur} = req.body;
    try {
        const data = await elycanmodel.create({
            temperature: parseFloat(temperatureCur),
            humidity: parseFloat(humidityCur),
        });
        res.status(200).json(data);
    } catch(err) {
        res.status(500).json({msg: err.message});
    }
});

app.listen(port, () => {
    console.log(`app running in localhost:${port}`);
  });
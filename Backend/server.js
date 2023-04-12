const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb')
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Define storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // specify upload directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // use original filename
    }
});

const upload = multer({ storage });


const uri = 'mongodb+srv://Samyak970:Samyak970@data.a9ny5hi.mongodb.net/test'
const dbName = 'testDb'
const colName = 'testCol'

const client = new MongoClient(uri);

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define a route
app.post('/api/data', upload.single('image'), async (req, res) => {
    // Handle the request and send a response
    const title = req.body.title
    const desc = req.body.desc;
    const select = req.body.select;
    const price = req.body.price;
    const file = req.file;
    const fileName = file.originalname;
    // console.log(fileName);

    app.locals.imageUrl = `${req.protocol}://${req.get('host')}/${file.path}`;

    const imageFile = fs.readFileSync("uploads/" + fileName);
    const imageBuffer = Buffer.from(imageFile);

    await client.connect();
    const database = client.db(dbName)
    const collection = database.collection(colName)

    const object = {
        "title": title,
        "desc": desc,
        "select": select,
        "price": price,
        'image': app.locals.imageUrl
    }

    await collection.insertOne(object)
    await client.close()

});

app.post('/api/getData', async (req, res) => {
    await client.connect();
    const database = client.db(dbName)
    const collection = database.collection(colName)

    const projection = { name: 1 };

    const find = await collection.find({}, projection).toArray();
    res.send(find)
})

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://aishwarya625:Gunjal625%40@cluster0.xe2hay9.mongodb.net/PBL");

app.get("/", (req, res) => {
    res.send("app is running");
});

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating upload Endpoint for images
app.use('/images', express.static(path.join(__dirname, 'upload', 'images')));

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

//Schema for creating products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: Number,
        required: true,
    },

    options: {
        type: Array,
        required: true,
    },
});

// Corrected the typo here: app.post instead of apppost
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;

    }
    else {
        id = 1;
    }
    const product = new Product({
        id: id,
        question: req.body.question,
        answer: req.body.answer,
        options: req.body.options,
    });
    console.log(product);
    await product.save();
    console.log("Saved")
    res.json({
        success: true,
        question: req.body.question,
    });
});

//creating API for deleting products
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("removed!");
    res.json({
        success: true,
        question: req.body.question,
    })
})

//creating API for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("all products fetched!");
    res.send(products);
})

//schema creating for user model
const Users = mongoose.model('users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        unique: true,
    },
    query: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

//creating endpoint for Contactform

app.post('/contact', async (req, res) => {
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        query: req.body.query,
        cartData: cart,
    })

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })
})

app.get('/allusers', async (req, res) => {
    let users = await Users.find({});
    console.log("all users fetched!");
    res.send(users);
})


app.listen(port, (error) => {
    if (!error) {
        console.log(`server running on port ${port}`);
    } else {
        console.log("Error: " + error);
    }
});

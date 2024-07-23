// req isteği karşılar , res cevap verir.
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const logger = require("morgan");
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();
// config ile güvenlik ayarını yaptık
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongoDb");
    } catch (error) {
        throw error;
    }
}

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use("/api", mainRoute);

app.listen(port, () => {
    connect();
    console.log(` Sunucu ${5000} portunda çalışıyor.`);
})

//Express kullanarak bir Node.js sunucusu oluşturur ve MongoDB veritabanına bağlanır.
// Ayrıca, bazı ortak Express middleware'lerini kullanarak istekleri işler ve cevapları yönetir.
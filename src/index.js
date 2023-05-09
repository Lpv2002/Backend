const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/producto.routes");

const productoRoutes = require('./routes/producto.routes'); 
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(productoRoutes);
// Settings
app.listen(4000);
console.log("Server on port 4000")


/* Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(router);

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));*/
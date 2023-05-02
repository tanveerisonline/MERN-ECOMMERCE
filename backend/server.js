const app = require("./app");

const dotenv = require("dotenv");

// config

dotenv.config({path:"backend/config/config.env"});

app.listen(process.PORT, ()=>{
    console.log(`server is working on ${process.env.PORT}`)
});
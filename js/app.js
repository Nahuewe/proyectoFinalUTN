const express = require(`express`)
require(`dotenv`).config()
const path = require(`path`)
const mysql = require(`mysql2`)

const app = express()
const PORT = process.env.PORT || 8080

// Conexion de la DataBase
const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

conexion.connect((err) => {
    if (err) {
        console.error(`Error en la conexion ${err.stack}`)
        return;
    }
        console.log(`Conectado a la Base de Datos ${process.env.DATABASE}`);
    }
) 

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, `css`)))

app.get(`/`, (req,res, next) => {
    res.render(`index`,{
        titulo: `Disfruta nuestros descuentos exclusivos`
    })
})

app.listen(PORT, () => {
    console.log(`El servidor esta trabajando en el Puerto ${PORT}`);
})
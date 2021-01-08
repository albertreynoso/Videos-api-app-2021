/**
 * Configuracion del servidor
 */

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import config from './config'
import videoRoutes from './routes/videos.routes'

const app = express()
//Para que podamos ver todas las peticiones que se hacen a nuestra aplicacion desde la consola
app.use(morgan('dev'))
//Para que la aplicacion permita que se envien requests desde cualquier servidor
app.use(cors())
//Para que pueda entender la notacion de objetos de js
app.use(express.json())
//Para que cuando envien una peticion post desde un formulario lo pueda entender
app.use(express.urlencoded({extended: false}))
// Para configurar el puerto en una variable de entorno
app.set('port', config.PORT )
//Para usar el enrutador de express
app.use(videoRoutes)

export default app
import {Router} from 'express'
const router = Router()

//importar controladores, Dentro del archivo de controladores se interpreta a las constantes que tienen funciones como funciones, y se pueden utilizar como objetos.
import * as videosCtrl from './videos.controller'


router.get('/videos', videosCtrl.getVideos)

router.post('/videos', videosCtrl.createVideo)

router.get('/videos/:id', videosCtrl.getVideo)

router.put('/videos/:id', videosCtrl.updateVideo)

router.delete('/videos/:id', videosCtrl.deleteVideo)

export default router
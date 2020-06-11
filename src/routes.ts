import express from 'express'
import ItemsController from './controllers/ItemsController'
import PointController from './controllers/PointsController'
import multer from 'multer'
import multerConfig from './config/multer'

const routes = express.Router()
const upload = multer(multerConfig)

const itemsController = new ItemsController()
const pointController = new PointController()

routes.get('/items', itemsController.index)
routes.get('/points', pointController.index)
routes.get('/points/:id', pointController.show)
routes.post('/points', upload.single('image'), pointController.create)

export default routes

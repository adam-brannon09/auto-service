const express = require('express')
// mergeParams: true allows us to access the ticketId from the ticketRoutes
const router = express.Router({ mergeParams: true })
const { getImage, getImages, uploadImage, deleteImage } = require('../controllers/imageController')

const { protect } = require('../middleware/authMiddleware')
// .get, .post, .delete, .put are all methods that can be chained to a route
router.route('/').get(protect, getImages).get(protect, getImage).post(protect, uploadImage).delete(protect, deleteImage)

module.exports = router
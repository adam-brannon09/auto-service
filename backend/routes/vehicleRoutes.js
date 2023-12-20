const express = require('express');
const router = express.Router();
const { getVehicles, getVehicle, createVehicle, deleteVehicle, updateVehicle } = require('../controllers/vehicleController')
//protect middleware makes sure user is logged in before accessing route
const { protect } = require('../middleware/authMiddleware')


//if /api/vehicles/ is used for a get route it will use getTickets function from ticketController
router.route('/').get(protect, getVehicles).post(protect, createVehicle)
// .get, .post, .delete, .put are all methods that can be chained to a route
//if /api/tickets/:id is used for a get route it will use getTicket function from ticketController
// if /api/tickets/:id is used for a delete route it will use deleteTicket function from ticketController
// if /api/tickets/:id is used for a put route it will use updateTicket function from ticketController
router.route('/:id').get(protect, getVehicle).delete(protect, deleteVehicle).put(protect, updateVehicle)


module.exports = router;
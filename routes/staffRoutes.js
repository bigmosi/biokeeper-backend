const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

// Add a new staff member
router.post('/add', staffController.addStaff);

// Update an existing staff member
router.put('/update/:id', staffController.updateStaff);

// Delete a staff member by ID
router.delete('/delete/:id', staffController.deleteStaff);

module.exports = router;

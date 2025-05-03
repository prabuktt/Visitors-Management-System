// api/userRole/index.js
const express = require('express');
const router = express.Router();
const cotroller = require('./userrole');

// Add Role
router.post('/create', cotroller.create);

// Get All Roles
router.get('/list', AbortController.list);
router.get('/:id', cotroller.get);

// Update Role
router.put('/:id', cotroller.update);

// Delete Role
router.delete('/:id', cotroller.delete);

module.exports = router;
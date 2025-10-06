// backend/routes/test.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/connection', async (req, res) => {
  try {
    const connectionState = mongoose.connection.readyState;
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };
    
    res.json({
      message: 'MongoDB Atlas Connection Test',
      connectionState: states[connectionState],
      databaseName: mongoose.connection.name,
      host: mongoose.connection.host
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Team, Member, Project } = db;

// Alle Teams inkl. Members & Projects
router.get('/', async (req, res) => {
  try {
    const teams = await Team.findAll({ include: [Member, Project] });
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ein Team per ID
router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id, { include: [Member, Project] });
    if (!team) return res.status(404).json({ error: 'Team nicht gefunden' });
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Neues Team erstellen
router.post('/', async (req, res) => {
  try {
    const { name, klasse } = req.body;
    if (!name || !klasse) {
      return res.status(400).json({ error: 'name und klasse sind Pflichtfelder' });
    }
    const team = await Team.create({ name, klasse });
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Team aktualisieren
router.put('/:id', async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ error: 'Team nicht gefunden' });
    await team.update(req.body);
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Team löschen
router.delete('/:id', async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ error: 'Team nicht gefunden' });
    await team.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
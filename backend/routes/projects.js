const express = require('express');
const router = express.Router();
const db = require('../models');
const { Project, Team } = db;

// Alle Projekte inkl. Team
router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll({ include: Team });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ein Projekt per ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id, { include: Team });
    if (!project) return res.status(404).json({ error: 'Projekt nicht gefunden' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Neues Projekt anlegen
router.post('/', async (req, res) => {
  try {
    const { titel, beschreibung, praesentiertAm, teamId } = req.body;
    if (!titel || !teamId) {
      return res.status(400).json({ error: 'titel und teamId sind Pflichtfelder' });
    }
    
    const team = await Team.findByPk(teamId);
    if (!team) return res.status(404).json({ error: 'Referenziertes Team existiert nicht' });

    const project = await Project.create({ titel, beschreibung, praesentiertAm, teamId });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Projekt aktualisieren
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Projekt nicht gefunden' });
    await project.update(req.body);
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Projekt löschen
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Projekt nicht gefunden' });
    await project.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
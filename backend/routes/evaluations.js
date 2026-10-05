const express = require('express');
const router = express.Router();
const { fn, col } = require('sequelize');
const db = require('../models');
const { Evaluation, Project } = db;

// Bewertung abspeichern
router.post('/', async (req, res) => {
  try {
    const { score, comment, projectId, criterionId, jurorId } = req.body;

    if (score === null || !projectId || !criterionId || !jurorId) {
      return res.status(400).json({ 
        error: 'score, projectId, criterionId und jurorId sind Pflichtfelder' 
      });
    }

    if (Project) {
      const project = await Project.findByPk(projectId);
      if (!project) {
        return res.status(404).json({ error: 'Referenziertes Projekt existiert nicht' });
      }
    }

    const evaluation = await Evaluation.create({
      score,
      comment,
      projectId,
      criterionId,
      jurorId
    });

    res.status(201).json(evaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Durchschnitt
router.get('/durchschnitt/:projectId', async (req, res) => {
  try {
    const stats = await Evaluation.findAll({
      where: { projectId: req.params.projectId },
      attributes: [
        'criterionId',
        [fn('AVG', col('score')), 'durchschnittsScore']
      ],
      group: ['criterionId']
    });

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
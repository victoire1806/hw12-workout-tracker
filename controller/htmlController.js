const path = require('path');

function viewHomePage(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
}

function viewExercisePage(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
}

function viewStatsPage(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'stats.html'));
}

module.exports = {
  viewHomePage,
  viewExercisePage,
  viewStatsPage,
};
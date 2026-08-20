const fs = require('fs');
const path = require('path');
const tourFilePath = path.join(__dirname, '../data/tour.json');

const getAllTours = () => {
  const toursData = fs.readFileSync(tourFilePath, 'utf-8');
  return JSON.parse(toursData);
}

const getById = (id) => {
  const tours = getAllTours();
  return tours.find(tour => tour.id === id);
}

module.exports = {
  getAllTours,
  getById
};
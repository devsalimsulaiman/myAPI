let banks = require('../data/banks');
let centers = require('../data/centers');
let hospitals = require('../data/hospitals');
let hotels = require('../data/hotels');
let pharmacies = require('../data/pharmacies');
// let professions = require('../data/professions');
let food = require('../data/food');
let schools = require('../data/schools');
let securities = require('../data/security');
let shopping = require('../data/shopping');
let gas = require('../data/gas.json');
let routeCost = require('../data/routeCost.json');
let questions = require('../data/questions.json');
let allTranslations = require('../data/allTranslations.json');

/*
// get trends
function getTrends() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

*/

// get banks
function getBanks() {
    return new Promise((resolve, reject) => {
        resolve(banks)
    })
}

// get hospitals
function getHospitals() {
    return new Promise((resolve, reject) => {
        resolve(hospitals)
    })
}

// get hotels
function getHotels() {
    return new Promise((resolve, reject) => {
        resolve(hotels)
    })
}

// get pharmacies
function getPharmacies() {
    return new Promise((resolve, reject) => {
        resolve(pharmacies)
    })
}

// get restaurants
function getFood() {
    return new Promise((resolve, reject) => {
        resolve(food)
    })
}

// get schools
function getSchools() {
    return new Promise((resolve, reject) => {
        resolve(schools)
    })
}

// get security
function getSecurities() {
    return new Promise((resolve, reject) => {
        resolve(securities)
    })
}

// get shopping
function getShopping() {
    return new Promise((resolve, reject) => {
        resolve(shopping)
    })
}

// get centers
function getCenters() {
    return new Promise((resolve, reject) => {
        resolve(centers)
    })
}

// get gas
function getGas() {
    return new Promise((resolve, reject) => {
        resolve(gas)
    })
}

// get routeCost
function getRouteCost() {
    return new Promise((resolve, reject) => {
        resolve(routeCost)
    })
}

// get questions
function getQuestions() {
    return new Promise((resolve, reject) => {
        resolve(questions)
    })
}

// get all translations
function getAllTranslations() {
    return new Promise((resolve, reject) => {
        resolve(allTranslations)
    })
}

module.exports = {
    // getTrends,
    getBanks,
    getCenters,
    getHospitals,
    getHotels,
    getPharmacies,
    getRouteCost,
    getFood,
    getSchools,
    getSecurities,
    getShopping,
    getGas,
    getQuestions,
    getAllTranslations

}

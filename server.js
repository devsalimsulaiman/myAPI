const http = require('http');
const { getBanks, getCenters, getHotels, getPharmacies, getProfessions, getFood, getHospitals, getSchools, getSecurities, getShopping, getGas, getRouteCost, getQuestions, getAllTranslations } = require('./controllers/productController');



const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    // the line above helps you deal with CORS issue
    if(req.url === '/api/banks' && req.method === 'GET') {
        getBanks(req, res)
    } else if(req.url === '/api/centers' && req.method === 'GET') {
        getCenters(req, res)
    }
    else if(req.url === '/api/hospitals' && req.method === 'GET') {
        getHospitals(req, res)
    }
    else if(req.url === '/api/hotels' && req.method === 'GET') {
        getHotels(req, res)
    }else if(req.url === '/api/pharmacies' && req.method === 'GET') {
        getPharmacies(req, res)
    }
    else if(req.url === '/api/professions' && req.method === 'GET') {
        getProfessions(req, res)
    }
    else if(req.url === '/api/food' && req.method === 'GET') {
        getFood(req, res)
    }
    else if(req.url === '/api/schools' && req.method === 'GET') {
        getSchools(req, res)
    }
    else if(req.url === '/api/securities' && req.method === 'GET') {
        getSecurities(req, res)
    }
    else if(req.url === '/api/shopping' && req.method === 'GET') {
        getShopping(req, res)
    }
    else if(req.url === '/api/gas' && req.method === 'GET') {
        getGas(req, res)
    }
    else if(req.url === '/api/routeCost' && req.method === 'GET') {
        getRouteCost(req, res)
    }
    else if(req.url === '/api/questions' && req.method === 'GET') {
        getQuestions(req, res)
    }
    else if(req.url === '/api/allTranslations' && req.method === 'GET'){
        getAllTranslations(req, res)
    }
    else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }
    
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

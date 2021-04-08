require("isomorphic-fetch");
const fs = require("fs");
const router = require("express").Router();router.

get("/api/autocomplete/:city", async (req, res) => {
    const { city } = req.params;
    const cities = JSON.parse(fs.readFileSync("./cities.json")).filter(cityData =>
      cityData.city.toLowerCase().startsWith(city.toLowerCase())
    );
  
    res.json(cities);
  });
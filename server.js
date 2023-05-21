const express = require("express");
const app = express();

app.get("/weather/current", (req, res) => {

  const location = req.query.location;


  if (!location) {
    return res.status(400).json({ error: "Location parameter is required" });
  }

  res.json({ location, conditions: "sunny", temperature: 25 });
});

app.get("/weather/forecast", (req, res) => {

  const location = req.query.location;


  if (!location) {
    return res.status(400).json({ error: "Location parameter is required" });
  }

  res.json({ location, forecast: "partly cloudy", temperature: 22 });
});


app.get("/weather/history", (req, res) => {

  const location = req.query.location;

  const startDate = req.query.start;
  const endDate = req.query.end;

  if (!location || !startDate || !endDate) {
    return res
      .status(400)
      .json({ error: "Location, start date, and end date parameters are required" });
  }
  res.json({ location, startDate, endDate, conditions: "rainy", temperature: 18 });
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


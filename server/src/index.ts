import express from 'express';
import easyDB from 'easydb-io'
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3001;

import { SkiObj } from './SkiObj'

//data obtained from skimap.org's developer API !!must credit source!!
const data = require('../SkiInfo.json');

app.use(cors({ origin: 'http://localhost:3000', }));

app.get('/regions', (req, res) => {
  const regions: Set<string> = new Set(data.map((obj) => {
    return (typeof obj.Region[0] != 'undefined') ? obj.Region[0].name : 'null';
  }));
  res.send(JSON.stringify(Array.from(regions)));
});


app.get('/', async (req, res) => {
  const req_region: string = req.query.region as string;
  const region = req_region.replace('+', ' ');
  const inRegion = data.filter((obj) => {
    if(typeof obj.Region[0] == 'undefined') return false;
    else { return (obj.Region[0].name == region); }
  });
  res.send(JSON.stringify(inRegion));
});

app.listen(port, () => {
  console.log(`now listening at localhost:${port}`);
});

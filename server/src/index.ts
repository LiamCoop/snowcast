import express from 'express';
import easyDB from 'easydb-io'
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3001;
import { SkiObj } from './SkiObj'

const data = require('../SkiInfo.json');//contained in DB now
//data obtained from skimap.org's developer API !!must credit source!!
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
  //console.log(region);
  res.send(JSON.stringify(inRegion));
});


app.listen(port, () => {
  console.log(`now listening at localhost:${port}`);
});

/*const db = easyDB({
  database: '22d1aa9a-0f24-44fa-822f-28bc84c3dd12',
  token: '185bc469-3fff-4a47-a894-0706bc240da9'
})*/

/*
function clearDB(){
  db.list((err,value) => {
    db.delete(value, err => console.log(err));
  });
}
*/

/*
app.get('/list', (req, res) => {
  db.list((err, value) => {
    console.log(value,err)
  });
  res.send('listing DB to console');
}); 
*/


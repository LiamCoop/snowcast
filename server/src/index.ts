import express from 'express';
import easyDB from 'easydb-io'
const app = express();
const port = process.env.PORT || 3001;
import { SkiObj } from './SkiObj'

const data = require('../SkiInfo.json');//contained in DB now
//data obtained from skimap.org's developer API !!must credit source!!

const db = easyDB({
  database: '22d1aa9a-0f24-44fa-822f-28bc84c3dd12',
  token: '185bc469-3fff-4a47-a894-0706bc240da9'
})

app.get('/regions', (req, res) => {
  res.send("you're here");
  const regions = new Set(data.map((obj) => {
      if( typeof obj.Region[0] != 'undefined' ){
        return obj.Region[0].name;
      } 
  }));
});

app.get('/list', async () => {
  db.list((err, value) => {
    console.log(value,err)
  });
}); 

app.get('/', async (req, res) => {
  res.send('You made it! Welcome!');
  let region = req.query.region;
  const reply = data.filter(obj => {
    return (obj.Region[0].name == region);
  });
});

function clearDB(){
  db.list((err,value) => {
    db.delete(value, err => console.log(err));
  });
}

app.listen(port, () => {
  console.log(`now listening at localhost:${port}`);
});

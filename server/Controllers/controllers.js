
const models = require('../Models/models');
//CONTROLLERS HAVE THE DATA -- req/res

module.exports = { //routes requires us.. so export
   get: (req, res) => { //all movies

     models.getAll((err, data) => { //in form of Arr of Objs(rows) //
       if(err) {
        console.log('error in controllers getALL->', err);
        // res.end('error in controllers getALL->', err);
       } else {
        console.log('Data in controllers getAll->', data);
        res.end(JSON.stringify(data));
       }
     });
   },
    post: (req, res) => {//add movie
      // console.log('CONTROLLERS POST with req.title->', req.body.title);
      models.post(req.body.title, (err, data) => { //add to database
        if(err) {
          res.end('error in controllers getALL')
         } else {
          console.log('Data in controllers POST->', data);
          res.status(201).end(data);
         }
     });
    },
    put: (req, res) => {//update watched
      console.log('Put req params->', req.params);
      models.updateWatched(req.params.title, (err, data) => {
        if(err) {
          res.end('error in controllers updateWATCHED')
         } else {
          console.log('Data in controllers updateWATCHED->', data);
          // res.end(data);
         }
      });
    },
    del: (req, res) => {//update watched
      console.log('DEL req params->', req.params.title);
      models.del(req.params.title, (err, data) => {
        if(err) {
          res.end('error in controllers DelReq')
         } else {
          console.log('Data in controllers DelReq->', data);
          res.end(data);
         }
      });
    },
    getOne: (req, res) => {
      console.log('GETONE req params->', req.params.title);
      models.getOne(req.params.title, (err, data) => {
        if(err) {
          res.end('error in controllers getONE')
         } else {
          console.log('Data in controllers getONE->', data);
          res.end(JSON.stringify(data));
         }
      });
    }
}
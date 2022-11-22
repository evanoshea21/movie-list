const db = require('../../DB/index');

module.exports = {

  getAll: (cb) => { //35cbe9c0f83a096e93a2f2f7900b314b
    var apiKey
    const qString = `SELECT * FROM movies`;
    db.query(qString, (err, results) => {
      if(err) {
        console.log('ERROR IN MODELS->', err);
        cb(err);
      } else {
        console.log('these are movie results models-getALL (TG?)', results); //array of Obj
        // console.log('at0title results->', results['0'].title);
        cb(null, results);
      }
    })
  },

  getOne: (title, cb) => {
    const qString = `SELECT * FROM movies WHERE title LIKE '%${title}%'`;
    db.query(qString, (err, results) => {
      if(err) {
        console.log('ERROR IN MODELS->', err);
        cb(err);
      } else {
        console.log('these are movie results models-getALL (TG?)', results); //array of Obj
        // console.log('GETONE results----------->', results['0'].title);
        cb(null, results);
      }
    })
  },
  getWatched: (cb) => {
    const qString = `SELECT * FROM movies WHERE title LIKE '%${title}%'`;
    db.query(qString, (err, results) => {
      if(err) {
        console.log('ERROR IN MODELS->', err);
        cb(err);
      } else {
        console.log('these are movie results models-getALL (TG?)', results); //array of Obj
        console.log('GETONE results----------->', results['0'].title);
        cb(null, results);
      }
    })
  },
  getToWatch: (cb) => {
    const qString = `SELECT * FROM movies WHERE title LIKE '%${title}%'`;
    db.query(qString, (err, results) => {
      if(err) {
        console.log('ERROR IN MODELS->', err);
        cb(err);
      } else {
        console.log('these are movie results models-getALL (TG?)', results); //array of Obj
        console.log('GETONE results----------->', results['0'].title);
        cb(null, results);
      }
    })
  },
  del: (title, cb) => {
    const qString = `DELETE FROM movies WHERE title="${title}"`;
    db.query(qString, [title], (err, results) => {
      if(err) {
        cb(err);
      } else {
        cb(null, JSON.stringify(results));
      }
    })
  },

  post: (movieObject) => {
    const qString = `INSERT INTO movies (title, watched, metascore, release_date) values(?,0,?,?)`;
    db.query(qString, [movieObject.title, movieObject.vote_count, movieObject.release_date])
  },

  updateWatched: (title, cb) => {
    const qryString = `SELECT watched FROM movies WHERE title="${title}"`;
    console.log('qryString, ', qryString);

    db.query(qryString, (err, results) => {
      if(err) {
        console.log('error, ', err);
      } else {
        console.log('oldNum-->', results[0].watched);
        var newNum = results[0].watched === 0 ? 1 : 0;
        queryToUpdate(newNum);
      }
    });

    function queryToUpdate(newWatched) {
      const qString = `UPDATE movies SET watched=${newWatched} WHERE title="${title}"`;
      db.query(qString, (err, results) => {
        if(err) {
          console.log('err in updateWatched->', err);
        } else {
          cb(null, JSON.stringify(results));
        }
      })
    }



  }//updateWatched
}


// var Parse = {

//   server: `http://127.0.0.1:3000/`,

//   create: function(message, successCB, errorCB = null) {
//     $.ajax({
//       url: Parse.server,
//       type: 'POST',
//       data: JSON.stringify(message),
//       contentType: 'application/json',
//       success: successCB,
//       error: errorCB || function (error) {
//         console.error('chatterbox: Failed to create message', error);
//       }
//     });
//   },

//   readAll: function(successCB, errorCB = null) {
//     console.log('Parse server movies ->', Parse.server + 'movies');
//     $.ajax({
//       url: Parse.server + 'movies',
//       type: 'GET',
//       contentType: 'application/json',
//       success: successCB,
//       error: errorCB || function(error) {
//         console.error('failed to get movies (PARSE.js)', error);
//       }
//     });
//   }

// };

// module.exports = Parse;

require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')
const app = express()
const PORT = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || "UNDEFINED"

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.get('/zagster', (request, response) => {
  
  var limit = request.query.limit;

  const pool = new Pool({
    connectionString: DATABASE_URL,
  })

  if(limit != null && limit != '') {
    pool.query(`SELECT * FROM rides LIMIT ${limit};`, (err, results) => {
      response.send(results)
      pool.end()
    })
  } else {
    pool.query('SELECT * FROM rides;', (err, results) => {
      response.send(results)
      pool.end()
    })
  }
})

app.get('/search', (req, res) => {
	
	var term = req.query.q
	
	const pool = new Pool({
    connectionString: DATABASE_URL,
  })

  pool.query("SELECT DISTINCT user_id FROM rides WHERE membership_name LIKE '%" + term + "%';", (err, results) => {
    res.send(results.rows)
    pool.end()
  }) 
})

app.get('/rides/day', (req, res) => {
  var date = req.query.date;

  const pool = new Pool({
    connectionString: DATABASE_URL
  });

  if(date != null && date != "") {
    pool.query(`SELECT user_id, start_lat, start_lon, end_lat, end_lon FROM rides WHERE CONVERT(DATETIME, FLOOR(CONVERT(FLOAT, start_date))) = ${date};`, (err, results) => {
      if(results.rows != null) {
        res.send(results.rows);
        pool.end();
      } else {
        res.send("no data");
        pool.end();
      }
      
    })
  } else {
    pool.end();
    res.send("no date");
  }
})



app.get('/rides/count', (request, response) => {
  const pool = new Pool({
    connectionString: DATABASE_URL,
  })

  pool.query('SELECT COUNT(*) FROM rides;', (err, results) => {
	console.log("Requested rides")
	console.log(err)
    response.send(results.rows[0])
    pool.end()
  })
})

app.get('/', (request, response) => {
  response.send("Listening")
})

app.get('/ice_cream', (request,response) => response.send("Mint ice cream"))
app.get('/RKS', (request, response) => response.send("MintBerryCrunch"))
app.get('/HemenwayThanksgiving', (request, response) => response.send("SweetPotato"))
app.get('/Cat_nya', (request,response) => response.send("Nyaaaaaaaaaaaaaaa!"))
app.get('/stubaruu', (request, response) => response.send("stuff"))
app.get('/karp', (request, response) => response.send("Dogs"))
app.get('/NOID', (request, response) => response.send("enter the VOID"))
app.get('/can_I_get_a_hoo_yaa', (request,response) => response.send("hoo yaa"))
app.get('/Hungry', (request, response) => response.send("Eat Food"))
app.get('/wright', (request,response) => response.send("Pasta"))
app.get('/Stewart', (request,response) => response.send("My dogs"))
app.get('/Bertram', (request,response) => response.send("Fire Hue"))
app.get('/kolb', (request,response) => response.send("Nice"))
app.get('/best_town', (request, response) => response.send("Bend, obviously"))
app.get('/football_team', (request,response) => response.send("LA Chargers"))
app.get('/cookie_dough', (request,response) => response.send("rocky road"))
app.get('/YOTE', (request,response) => response.send("YEEEET"))
app.get('/Mock', (request,response) => response.send("Dolla Dolla Bills Y'all"))
app.get('/Orue', (request,response)=>response.send("Comic Books"))
app.get('/mashjam', (request, response)=>response.send("White Buffalo"))
app.get('/gomez', (request, response) => response.send("I am cool"))
app.get('/white', (request, response) => response.send ("Bulldog Puppies"))
app.get('/doodlebob', (request,response) => response.send("Hoy minoy miñoy"))
app.get('/manbearpig', (request, response) => response.send("Al Gore"))
app.get('/totallysecurechanneladminonly', (request,response) => response.send("Look at them."))

app.listen(PORT)

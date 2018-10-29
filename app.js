require('dotenv').config()
const express = require('express')
const {Pool} = require('pg')
const app = express()
const PORT = process.env.PORT || 3001
const DATABASE_URL = process.env.DATABASE_URL || "undefined"

app.get('/zagster', (request,response) => {
  const pool = new Pool({
    connectionString: DATABASE_URL
  })

  pool.query('SELECT * FROM rides LIMIT 1', (err, results)=> {
    response.send(results.rows[0])
    pool.end()
  })
})

app.get('/ice_cream', (request,response) => response.send("Mint ice cream"))
app.get('/RKS', (request, response) => response.send("MintBerryCrunch"))
app.get('/HemenwayThanksgiving', (request, response) => response.send("SweetPotato"))
app.get('/Cat_nya', (request,response) => response.send("Nyaaaaaaaaaaaaaaa!"))
app.get('/stubaruu', (request, response) => response.send("stuff"))
app.get('/karp', (request, response) => respons.send("Dogs"))
app.get('/NOID', (request, response) => response.send("enter the VOID"))
app.get('/can_I_get_a_hoo_yaa', (request,response) => response.send("hoo yaa"))
app.get('/Hungry', (request, response) => response.send("Eat Food"))
app.get('/wright', (request,response) => response.send("Pasta"))
app.get('/Stewart'), (request,response) => response.send("My dogs")
app.get('/Bertram'), (request,response) => response.send("Fire Hue")
app.get('/kolb', (request,response) => response.send("Nice"))
app.get('/best_town', (request, reponse) => response.send('Bend, obviously'))
app.get('/football_team'), (request,response) => resposne.send("LA Chargers")
app.get('/cookie_dough', (request,response) => response.send("rocky road"))
app.get('/YOTE', (request,response) => response.send("YEEEET"))
app.get('/Mock', (request,response) => response.send("Dolla Dolla Bills Y'all"))
app.get('/Orue',(request,response)=>response.send("Comic Books"))
app.get('/mashjam',(request, response)=>response.send("White Buffalo"))
app.get('/gomez', (request, response) => response.send("I am cool"))
app.get('/white', (request, response) => response.send ("Bulldog Puppies"))
app.get('/doodlebob', (request,response) => response.send("Hoy minoy miñoy"))
app.get('/manbearpig', (request, response) => response.send("Al Gore"))
app.get('/totallysecurechanneladminonly', (request,response) => response.send("Look at them, they come to this place when they know they are not pure. Tenno use the keys, but they are mere trespassers. Only I, Vor, know the true power of the Void. I was cut in half, destroyed, but through it's Janus Key, the Void called to me. It brought me here and here I was reborn. We cannot blame these creatures, they are being led by a false prophet, an impostor who knows not the secrets of the Void. Behold the Tenno, come to scavenge and desecrate this sacred realm. My brothers, did I not tell of this day? Did I not prophesize this moment? Now, I will stop them. Now I am changed, reborn through the energy of the Janus Key. Forever bound to the Void. Let it be known, if the Tenno want true salvation, they will lay down their arms, and wait for the baptism of my Janus key. It is time. I will teach these trespassers the redemptive power of my Janus key. They will learn it's simple truth. The Tenno are lost, and they will resist. But I, Vor, will cleanse this place of their impurity."))

app.listen(PORT)

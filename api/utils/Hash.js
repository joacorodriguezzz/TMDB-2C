const bcrypt = require ("bcrypt")

function encryptPassword (password) {
  
  bcrypt.hash(password, salt)
  .then(hash => {
    // base de datos
    console.log("HASH", hash)
  })
}

const salt = bcrypt.genSaltSync()
console.log("salt", salt)

encryptPassword("joaquinkpo", salt)
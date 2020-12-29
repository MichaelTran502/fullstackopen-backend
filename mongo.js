const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide password as an argument');
}

const password = process.argv[2]
const nameInput = process.argv[3]
const numberInput = process.argv[4]

const url = `mongodb+srv://binglee:${password}@cluster0.ha6ju.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (!nameInput && !numberInput) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name + " " + person.number)
    })
    mongoose.connection.close();
  })
} else {
  const person = new Person({
    name: nameInput,
    number: numberInput
  })

  person.save().then(result => {
    console.log(`added ${nameInput} number ${numberInput} to phonebook`)
    mongoose.connection.close();
  })
  
}
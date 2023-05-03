const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const url =
  `mongodb+srv://fstack:${password}@cluster0.3edlyem.mongodb.net/?retryWrites=true&w=majority`


mongoose.Promise = global.Promise
/*
async function run() {
  // With `useMongoClient`, `mongoose.connect()` returns a thenable
  await mongoose.connect(url);

  const Test = mongoose.model('Test', new mongoose.Schema({ name: String }));
  const doc = await Test.create({ name: 'Val' });
  console.log(doc);
} */


async function run() {

  mongoose.set('strictQuery', false)
  mongoose.set('bufferCommands', false)
  await mongoose.connect(url)

  const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  })

  const Note = mongoose.model('Note', noteSchema)

  const note = new Note({
    content: 'HTML is Easy',
    important: true,
  })

  const result = await note.save()
  console.log('note saved!:', result)
}

run()
  .catch(error => console.error(error.stack))
  .finally(() => mongoose.connection.close())
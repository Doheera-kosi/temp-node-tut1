// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instanceof

const EventEmitter = require('events');
const { orderBy } = require('lodash');

// Invoking the event created
const customEmitter = new EventEmitter()

// on and emmit events
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data received, user is:  ${name} and with id : ${id}`);
})
customEmitter.on('response', () => {
  console.log(`some other logic here `);
})

customEmitter.emit('response', 'john', 34)

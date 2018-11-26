console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ',command);
console.log('Yargs: ',  argv);

switch (command) {
  case 'add':
    var note = notes.addNote(argv.title, argv.body);
    if(!note) {
      console.log('Note title is already in use');
    }else {
      console.log('Note Created');
      notes.logNote(note);
    }
    break;
  case 'list':
    var noteList = notes.getAll();
    noteList.forEach((note) notes.logNote(note))
    break;
  case 'read':
    var note = notes.getNote(argv.title);
    if (note) {
      console.log('Note found.');
      notes.logNote(note);
    } else {
      console.log('Note not found');
    }
    break;
  case 'remove':
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed.' : 'Note not found.'
    console.log(message);
    break;
  default:
    console.log('Command not found.');
}

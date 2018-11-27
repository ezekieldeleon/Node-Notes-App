const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', ' Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,
  })
  .help()
  .argv;
var command = argv._[0];

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
     console.log(`Printing ${noteList.length} note(s)`);
     noteList.forEach((note) => notes.logNote(note));
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

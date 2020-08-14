import Note from '../models/note';

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  // to quote Prof. Cormen: left as an exercise to the reader
  // remember to return the mongoose function you use rather than just delete
  return Note.findByIdAndDelete(id);
};

export const createNote = (fields) => {
  // you know the drill. create a new Note mongoose object
  // return .save()
  const note = new Note({
    title: fields.title,
    x: fields.x,
    y: fields.y,
    zIndex: fields.zIndex,
    text: fields.text,
    isEditing: fields.isEditing,
    width: fields.width,
    height: fields.height,
  });
  return note.save();
};


export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        console.log('updateNote called with fields: ', fields, 'and k', k);
        note[k] = fields[k];
        console.log('note[k]', note[k]);
      });
      return note.save();
    });
};

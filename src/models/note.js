import mongoose, { Schema } from 'mongoose';
// create a PostSchema with a title field
const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
  isEditing: Boolean,
  width: Number,
  height: Number,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});
// create PostModel class from schema
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;

import {
  STRINGS,
  NOTES,
  SHAPES,
  CHORDS,
} from '@/constants';

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomString() {
  const index = getRandomNumber(STRINGS.length);

  return STRINGS[index];
}

export function getRandomNote() {
  const index = getRandomNumber(NOTES.length);

  return NOTES[index];
}

export function getRandomShape() {
  const index = getRandomNumber(SHAPES.length);

  return SHAPES[index];
}

export function getRandomChord() {
  const index = getRandomNumber(CHORDS.length);

  return CHORDS[index];
}

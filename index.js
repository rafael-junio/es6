/* eslint-disable no-restricted-globals */
/* eslint-disable max-classes-per-file */
class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }

  get created() {
    return this._created;
  }

  set created(created) {
    if (!created || isNaN(created)) {
      throw new Error('Invalid created');
    }
    this._cretead = created;
  }

  toString() {
    return `Message created at: ${this._created} - Text: ${this.text}`;
  }
}

class ImageMessage extends Message {
  constructor(
    text = '',
    created = Date.now(),
    url = '',
    thumbnail = '',
  ) {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString() {
    return `Photo${super.toString()}`
            + `- URL: ${this.url}`
            + `Thumbnail: ${this.thumbnail} `;
  }
}

const text = 'Some Text';
const created = Date.now();

const duckTypeMessage = {
  text,
  created,
};
console.log(duckTypeMessage);

const emptyMessage = new Message();
const textMessage = new Message('Yesterday message', Date.now() - 86400);
const photoMessage = new ImageMessage();

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(textMessage instanceof ImageMessage);
console.log(duckTypeMessage instanceof ImageMessage);

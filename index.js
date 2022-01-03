const path = require('path');
const fs = require('fs');
const Message = require('./message.model');

class MessagesService {
  constructor() {
    let resolvePromise;
    let rejectPromise;
    const filePath = path.join(__dirname, 'messages.json');
    this.messagesPromise = new Promise((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        rejectPromise(err);
      } else {
        const dataArray = JSON.parse(data);
        // eslint-disable-next-line max-len
        const dataObj = dataArray.map((item) => new Message(item.text, item.created));
        resolvePromise(dataObj);
      }
    });
  }

  get messages() {
    return this.messagesPromise;
  }
}

const messagesService = new MessagesService();
messagesService.messages.then((messages) => {
  console.log(messages);
}).catch(() => {
  console.log(err)
});
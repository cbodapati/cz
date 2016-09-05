import { Meteor } from 'meteor/meteor';
import '../imports/db/db.js';

Meteor.startup(() => {
  // code to run on server at startup
  if (ItemsDB.find().count() === 0) {
    const items = [{
      'name': 'Item 1'
    }, {
      'name': 'Item 2'
    }, {
      'name': 'Item 3'
    }];
 
    items.forEach((item) => {
    ItemsDB.insert(item)
    });
  }
});

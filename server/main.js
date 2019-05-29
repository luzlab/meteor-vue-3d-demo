import { Meteor } from 'meteor/meteor';
import '/imports/startup/server.js';

import { mockInstrument } from '/imports/lib/mockInstrument';

Meteor.startup(() => {
  console.log('started');
});

/**
Mongoose
npm install mongoose --save

Used to interact with MongoDB 
*/

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/**
Schema for task collection table:
name - created_data - status
*/
var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
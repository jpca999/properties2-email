'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Property Schema
 */
var PropertySchema = new Schema({
  address: {
    type: String,
    default: 'default',
    required: 'Please fill address',
    trim: true
  },
  county: {
    type: String,
    default: 'default',
    required: 'Please fill county',
    trim: true
  },
  city: {
    type: String,
    default: 'default',
    required: 'Please fill city ',
    trim: true
  },
  phone_no: {
    type: String,
    default: 'default',
    required: 'Please fill phone_no',
    trim: true
  },
  cell_phone: {
    type: String,
    default: 'default',
    required: 'Please fill phone_no',
    trim: true
  },  
  email_address: {
    type: String,
    default: 'default',
    required: 'Please fill email_address ',
    trim: true
  }, 
  listPrice: {
    type: String,
    default: 'default',
    required: 'Please fill listPrice ',
    trim: true
  }, 
  offerPrice: {
    type: String,
    default: 'default',
    required: 'Please fill offerPrice ',
    trim: true
  }, 
  agent_name: {
    type: String,
    default: 'default',
    required: 'Please fillin comments',     
    trim: true
  },   
  comments: {
    type: String,
    default: 'default',
    required: false,
    trim: true
  },   
  dateAdded: {
    type: String,
    default: 'default',
    required: 'Please fill dom',
    trim: true
  }, 
  DOM: {
    type: String,
    default: 'default',
    required: 'Please fill dom',
    trim: true
  }, 
  owner: {
    type: String,
    default: 'default',
    required: 'Please fill owner',
    trim: true
  },
  status: {
    type: String,
    default: 'default',
    required: 'Please fill status',
    trim: true
  },  
  last_date_email_sent_on: {
    type: String,
    default: 'default',
    required: 'Please fill last_date_email_sent_on',
    trim: true
  }, 
  dates_email_were_sent_on: {
    type: String,
    default: 'default',
    required: 'Please fill dates_email_were_sent_on',
    trim: true
  }, 
  no_of_emails_sent: {
    type: String,
    default: 'default',
    required: 'Please fill no_of_emails_sent',
    trim: true
  }, 
  last_date_email_open: {
    type: String,
    default: 'default',
    required: 'Please fill last_date_email_open',
    trim: true
  }, 
  no_of_emails_open: {
    type: String,
    default: 'default',
    required: 'Please fill no_of_emails_open',
    trim: true
  },   
  last_date_call_was_made: {
    type: String,
    default: 'default',
    required: false,
    trim: true
  },  
  call_priority: {
    type: String,
    default: 'Bi_weekly',
    required: 'Please fill call_priority',
    trim: true
  },      
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Property', PropertySchema);

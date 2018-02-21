const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema ({
  eventID : {
    type : String
  },
  date : {
    type : Number
  },
  time : {
    type : String
  },
  description : {
    type : String
  },
  time : {
    type : String
  },
  tripID : {
    type : Schema.Types.ObjectId,
    ref : 'trip'
  },
  locationID : {
    type : Schema.Types.ObjectId,
    ref : 'location'
  }
})

const Event = mongoose.model('event', eventSchema)
module.exports = Event

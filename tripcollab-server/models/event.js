const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema ({
  eventID : {
    type : String
  },
  date : {
    type : Number
  },
  description : {
    type : String
  },
  time : {
    type : String
  },
  tripID : {
    type : Schema.Types.ObjectId,
    ref : 'Trip'
  },
  locationID : {
    type : Schema.Types.ObjectId,
    ref : 'Location'
  }
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event

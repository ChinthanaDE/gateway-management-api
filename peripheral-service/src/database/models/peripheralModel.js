const mongoose = require('mongoose');

const peripheralSchema = new mongoose.Schema({
  uid: {
    type: Number,
    required: true
  },
  vendor: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['online', 'offline'],
    required: true
  },
  gatewayId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gateway'
  }
});

peripheralSchema.method('toJSON', function () {
    const { updatedAt, ...object } = this.toObject()
    return object
})


export default mongoose.model('Peripheral', peripheralSchema)



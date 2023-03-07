import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import isIPv4 from 'validator/lib/isIPv4';

const { Schema } = mongoose;

const gatewaySchema = new Schema(
  {
    serial: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    ipv4: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return isIPv4(value);
        },
        message: 'Invalid IPv4 address',
      },
    },
    devices: [
      {
        type: Schema.Types.ObjectId,
        ref: 'PeripheralDevice',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

gatewaySchema.path('devices').validate(function (value) {
  if (value.length > 10) {
    throw new Error('A gateway can have no more than 10 peripheral devices!');
  }
});

gatewaySchema.plugin(uniqueValidator);

gatewaySchema.method('toJSON', function () {
  const { updatedAt, ...object } = this.toObject();
  return object;
});

export default mongoose.model('Gateway', gatewaySchema);

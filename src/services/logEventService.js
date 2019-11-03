const uuid = require("uuid/v4");
const Log = require("./../models/Log");

module.exports = async (event, channel) => {
  const { serviceId = "", occurredAt = Date.now(), data = {} } = event;

  const log = {
    _id: uuid(),
    serviceId: serviceId,
    occurredAt: occurredAt,
    type: "event",
    data: { channel: channel, ...data }
  };

  try {
    await Log.create(log);
  } catch (e) {
    console.log("error: ", e);
  }
};

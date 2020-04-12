const PubNub = require('pubnub');
const uuid = PubNub.generateUUID();
const pubnub = new PubNub({
  publishKey: "pub-c-61c84398-283c-4923-a72e-e6804586a45a",
  subscribeKey: "sub-c-5c18f472-5eb1-11ea-b7ea-f2f107c29c38",
  uuid: uuid
});

const publishConfig = {
  channel: "pubnub_onboarding_channel",
  message: {"sender": uuid, "content": "Hi pubnub"}
}

pubnub.addListener({
  message: function(message) {
    console.log(message);
  },
  presence: function(presenceEvent) {
    console.log(presenceEvent);
  }
})

pubnub.subscribe({
  channel: "pubnub_onboarding_channel",
  withPresence: true,
});

pubnub.publish(publishConfig, function(status, response) {
  console.log(status, response);
});
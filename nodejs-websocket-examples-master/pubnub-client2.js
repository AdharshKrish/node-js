const PubNub = require('pubnub');

const pubnub = new PubNub({
    publishKey: 'pub-c-c50787c4-f562-42e1-be98-5b4bdc9a9d34',
    subscribeKey: 'sub-c-fb8fd17a-5ea6-11ea-b7ea-f2f107c29c38'
});

pubnub.subscribe({
    channels: ['my_channel']
});

pubnub.addListener({
    message: (pubnubMessage) => {
        console.log('New Message:', pubnubMessage.message);
    }
});

// Use Control + C to end the program
process.stdin.on('data', (key) => {
    // When the user presses the return key
    if (key.toString() === '\n') {
        pubnub.publish({
            message: 'Hello from client 2!',
            channel: 'my_channel'
        });
    }
});

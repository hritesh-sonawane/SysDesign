## Streaming & Polling

### Use case (here, Chat App):

- Polling: When data needs to be updated every 'x' seconds/minutes
- Streaming: When data needs to be updated instantly (real-time)

### Command to run (on different terminals)

`node server.js`

`MODE=stream NAME=Sasuke node client.js`

`MODE=stream NAME=Naruto node client.js`

### Walkthrough (excluding server and client)

- helpers.js: function to generate random integers
- messaging_api.js: axios and WebSocket setup

```
When we start the socket stream in 'poll' mode, the client waits 3 seconds for a response
However in the 'stream' mode, the client gets the message instantly
```

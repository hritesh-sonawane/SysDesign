# Publish/Subscribe Paradigm/Model

## There are broadly 4 entities

- Publisher
- Subscriber
- Topic
- Message

```
Publish/subscribe messaging, or pub/sub messaging, is a form of asynchronous service-to-service communication used in serverless and microservices architectures. In a pub/sub model, any message published to a topic is immediately received by all of the subscribers to the topic. Pub/sub messaging can be used to enable event-driven architectures, or to decouple applications in order to increase performance, reliability and scalability
```

### Command to run

### `TOPIC_ID=WhateverYouWant node server.js`

### `any loop to send data stream addressing the same TOPIC_ID`

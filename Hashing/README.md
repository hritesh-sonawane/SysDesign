## Hashing Strategies (Simple & Rendezvous)

- Simple Hashing works all fine, but is inefficient when servers are added/removed
- Rendezvous Hashing is highly optimal when servers are added/removed
- Alternative to Rendezvous Hashing: Consistent Hashing
- hashing_utils.js has the hash functions
- hashing_egs.js has the example code for demo
- server5 is removed from serverSet2 to check the effeciency

### Command to run

`node hashing_egs.js`

### Output

```
Simple Server Strategy
username0: server2 => server0 | equal: false
username1: server3 => server1 | equal: false
username2: server4 => server2 | equal: false
username3: server5 => server3 | equal: false
username4: server0 => server4 | equal: false
username5: server1 => server0 | equal: false
username6: server2 => server1 | equal: false
username7: server3 => server2 | equal: false
username8: server4 => server3 | equal: false
username9: server5 => server4 | equal: false
Rendezvous Server Strategy
username0: server5 => server4 | equal: false
username1: server4 => server4 | equal: true
username2: server2 => server2 | equal: true
username3: server1 => server1 | equal: true
username4: server0 => server0 | equal: true
username5: server5 => server4 | equal: false
username6: server4 => server4 | equal: true
username7: server3 => server3 | equal: true
username8: server1 => server1 | equal: true
username9: server0 => server0 | equal: true
```

### Rendezvous Hashing's effeciency is not affected after removing server5!

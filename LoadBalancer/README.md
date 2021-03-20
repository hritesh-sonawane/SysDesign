## Load balancer w/ nginx

- Used weighted round robin approach (weight=3)
- PORT 3000 will receive 3X hits than that at PORT 3000

### Commands (on different terminals)

`PORT=3000 node server.js`

`PORT=3001 node server.js`

`curl localhost:8081/hello`

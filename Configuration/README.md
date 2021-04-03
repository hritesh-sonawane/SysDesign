# Configuration

<details>
<summary>2 types of configuration</summary>
<br>
* Static Configuration
* Dynamic Configuration
</details>

### Command to run (on different terminals)

#### `node server.js`

#### `curl localhost:3000/static/new_feature.html`

### Output:

- Since, "newFeatureLaunched": false; we get the unauthorized message

```
Even if we change "newFeatureLaunched": false; we still get the unauthorized message
This is because we have a static confiugration
```

- To reflect Hello World, we need to restart the server

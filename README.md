# monkeytype-js

## About
monkeytype-js is the official Node.js client for the Monkeytype API.

# Example Usage

```js
const { MonkeytypeClient } = require('monkeytype-js');

const monkeytypeClient = new MonkeytypeClient('<YOUR-APE-KEY>');

(async () => {
    const { data } = await monkeyTypeClient.users.getPersonalBests('time', 15);
    console.log(data);
})();
```

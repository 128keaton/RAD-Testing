## Setup

Install the dependencies via npm:
```shell
$ npm i
```

Ensure the machine you're accessing the RADIUS server from is permitted in the server's configuration

## Running

Simply run:
```shell
$ npm run test
```

You will be prompted for the:
* RADIUS host
* Shared secret
* AD Username
* AD Password

Example output:

```text
> rad-client-testing@1.0.0 test
> node client.js

prompt: host:  192.168.1.123
prompt: secret: verySecretSHHHHH
prompt: username:  jsmith
prompt: password:  coolPass123!
```

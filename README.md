# apicurio-registry-client-sdk-js

This repo is deprecated.
"For 3.X we switched to the Kiota generated SDK here: https://github.com/Apicurio/apicurio-registry/tree/main/typescript-sdk".

Apicurio Registry client for JavaScript

## Installation

Install using npm:

```shell
npm install apicurio-registry-client
```

Import the library into your JavaScript or TypeScript application to begin using it:

```ts
import { AdminApi } from 'apicurio-registry-client';

const adminApi = new AdminApi(configuration);

adminApi.listGlobalRules().then((response) => {
  console.log(response);
})
```

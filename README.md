# apicurio-registry-client-sdk-js

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

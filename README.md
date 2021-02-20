# ts-condition-handler [![Version](https://img.shields.io/npm/v/ts-condition-handler.svg)](https://www.npmjs.com/package/ts-condition-handler)

Execute the corresponding handler by customized definition in a declarative way.

## Example

```ts
import { conditionHandler } from 'ts-condition-handler'

function main() {
  try {
    // do something that may throw an error in a specific type
    doSomething()
  } catch (err) {
    conditionHandler(err)
      .on(CustomerNotFound, handleCustomerNotFound)
      .on(CustomerCreditLimitExceeded, handleCustomerCreditLimitExceeded)
      .fallback(handleUnknownError)
  }
}

function doSomething() {
  throw new CustomerNotFound()
}
```

## Test
```
yarn test
```

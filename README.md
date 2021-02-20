# ts-condition-handler

Execute the corresponding handler by customized definition in a declarative way.

## Example

```ts
import { conditionHandler } from 'ts-condition-handler'

try {
  // do something that may throw an error in a specific type
} catch (err) {
  conditionHandler(error)
    .on(CustomerNotFound, handleCustomerNotFound)
    .on(CustomerCreditLimitExceeded, handleCustomerCreditLimitExceeded)
    .fallback(handleUnknownError)
}
```

## Test
```
yarn test
```

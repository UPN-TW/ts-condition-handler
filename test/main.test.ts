import { conditionHandler } from '../src';

class CustomerNotFound {}
class CustomerCreditLimitExceeded {}
class UnknownCondition {}

const handleCustomerNotFound = jest.fn()
const handleCustomerCreditLimitExceeded = jest.fn()
const handleUnknownCondition = jest.fn()

afterEach(() => {
  handleCustomerNotFound.mockClear()
  handleCustomerCreditLimitExceeded.mockClear()
  handleUnknownCondition.mockClear()
})

describe('Condition Handler Spec', () => {
  it('Execute corresponding handler depend on the class of given object.', () => {
    const error = new CustomerNotFound()
    conditionHandler(error)
      .on(CustomerNotFound, handleCustomerNotFound)
      .on(CustomerCreditLimitExceeded, handleCustomerCreditLimitExceeded)

    expect(handleCustomerNotFound).toBeCalledTimes(1)
    expect(handleCustomerCreditLimitExceeded).toBeCalledTimes(0)
  });

  it('Execute fallback when there no matched handler.', () => {
    const predicate = new UnknownCondition()

    conditionHandler(predicate)
      .on(CustomerNotFound, handleCustomerNotFound)
      .on(CustomerCreditLimitExceeded, handleCustomerCreditLimitExceeded)
      .fallback(handleUnknownCondition)

    expect(handleCustomerNotFound).toBeCalledTimes(0)
    expect(handleCustomerCreditLimitExceeded).toBeCalledTimes(0)
    expect(handleUnknownCondition).toBeCalledTimes(1)
  });
});

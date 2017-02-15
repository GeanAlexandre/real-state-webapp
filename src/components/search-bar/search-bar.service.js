import { Customer } from 'customerContext/model/customer'
import CustomerService from 'customerContext/service/customerService'

export default class SearchBarService {
  constructor() {
    this.customerService = new CustomerService()
  }

  AddCustomer(customer) {
    return new Promise(resolve => {
      const customerCreated = Customer.Factory(customer)
      customerCreated.Update().then(data => {
        resolve(data)
      })
    })
  }

  GetAll() {
    return this.customerService.GetAll()
  }

}

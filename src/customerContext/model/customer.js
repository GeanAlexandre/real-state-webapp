import CUSTOMER_STATUS from 'customerContext/model/constants/customerStatus'
import CustomerRepository from 'customerContext/infra/repository/CustomerRepository'

const Repository = new CustomerRepository()

class Customer {
  constructor(customer) {
    Object.assign(this, customer)
  }
  static Factory(customer) {
    return new Customer(customer)
  }
  Update() {
    return new Promise(resolve => {
      Repository.Add(this).then(key => {
        this.id = key
        resolve(this)
      })
    })
  }
}

export { CUSTOMER_STATUS, Customer }

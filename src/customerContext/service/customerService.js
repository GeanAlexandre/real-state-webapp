import CustomerRepository from 'customerContext/infra/repository/CustomerRepository'
import { Customer } from 'customerContext/model/customer'

const Repository = new CustomerRepository()

export default class CustomerService {
  GetAll() {
    return new Promise(resolve => {
      Repository.GetAll().then(customers => {
        resolve(customers.map(item => {
          return Customer.Factory(item)
        }))
      })
    })
  }
}

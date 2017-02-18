import Context from 'common/database/context'

export default class Repository {
  name: string
  constructor (child) {
    this.name = 'Gean Alexandre'
    let context = new Context()
    this.repository = context.Database().ref(child)
  }

  GetAll () {
    return new Promise(resolve => {
      this.repository.once('value').then(snapshot => {
        let data = snapshot.val()
        let values = Object.keys(data).map(key => { return data[key] })
        resolve(values)
      })
    })
  }

  GetByIdAsync (id) {
    return new Promise(resolve => {
      this.repository.child(id).once('value').then(snapshot => {
        resolve(snapshot.val())
      })
    })
  }

  Add (object) {
    return new Promise(resolve => {
      let key = this.repository.push().key
      this.repository.child(key).update(object).then(() => {
        resolve(key)
      })
    })
  }
}


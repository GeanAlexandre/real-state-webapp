import * as firebase from 'firebase'
import { CONFIG, DATABASE } from './config'

const Instance = firebase.initializeApp(CONFIG, DATABASE)

export default class Context {
  Database() {
    return Instance.database()
  }
}

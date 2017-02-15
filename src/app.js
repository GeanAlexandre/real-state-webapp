import 'angular-material/angular-material.css'
import 'font-awesome/css/font-awesome.css'
import angular from 'angular'
import angularMaterial from 'angular-material'

import SearchBar from './components/search-bar/search-bar.module'

export default angular.module('app', [
  SearchBar,
  angularMaterial
])


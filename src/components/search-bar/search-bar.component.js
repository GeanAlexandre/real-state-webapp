import Template from 'components/search-bar/search-bar.template.html'
import Controller from 'components/search-bar/search-bar.controller'

const SELECTOR = 'searchBar'

let Component = {
  controller: Controller,
  controllerAs: 'vm',
  template: Template
}

export { SELECTOR, Component }

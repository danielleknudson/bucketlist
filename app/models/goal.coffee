class window.Goal extends Backbone.Model
  initialize: ->

  defaults:
    goal: 'No goal provided'
    due_date: new Date
    notes: ''
    photos: ''
    categories: []
    private: false
    accomplished: false
Goal = new Backbone.Model.extend
  initialize: ->

  defaults:
    goal: 'No goal provided'
    due_date: new Date
    notes: ''
    photos: ''
    categories: []
    private: false
    accomplished: false
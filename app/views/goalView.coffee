class window.GoalView extends Backbone.View
  className: 'goal'

  initialize: ->
    @render
    @on 'change', @render, @

  events:
    'event' : 'event handler'

  template: _.template

  render: ->
    @$el .html @template $('#goal-template'), @model.attributes
    return @$el
class window.AppView extends Backbone.View
  el: '#app'

  events:
    'click #add-goal': 'addGoalHandler'

  initialize: ->
    @on 'rendered', @addDatepicker, @

  events:
    'click #add-goal': 'displayGoalPrompt'
    'click #save-goal': 'saveGoalHandler'

  displayGoalPrompt: ->
    html = _.template $('#goal-prompt-template') .html()
    goalPrompt = $('#goal-prompt-container') .html html
    @$el .append goalPrompt
    @trigger 'rendered', @
    @$el

  addDatepicker: ->
    $('#due-date').datepicker();

  saveGoalHandler: ->
   @collection saveGoal()
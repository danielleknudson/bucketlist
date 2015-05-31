AppView = Backbone.View.extend
  $el: $('#app')

  initialize: ->
    @on 'click #add-goal', @displayGoalPrompt

  displayGoalPrompt: ->
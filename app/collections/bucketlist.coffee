Bucketlist = new Backbone.Collection.extend
  model: Goal

  initialize: ->

    @set 'goalCount', @getGoalCount()

    @set 'goalsAccomplishedCount', @getGoalsAccomplishedCount()

    # Use window.localStorage to remember goals in bucketlist
    if not window.localStorage.getItem 'myBucketlist'
      window.localStorage.setItem 'myBucketlist', JSON.stringify @

    @on 'add' , -> 
      window.localStorage.setItem 'myBucketlist', JSON.stringify @
      return

  getGoalCount: ->

  getGoalsAccomplishedCount: ->  

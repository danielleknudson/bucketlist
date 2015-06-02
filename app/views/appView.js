// Generated by CoffeeScript 1.9.3
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

window.AppView = (function(superClass) {
  extend(AppView, superClass);

  function AppView() {
    return AppView.__super__.constructor.apply(this, arguments);
  }

  AppView.prototype.el = '#app';

  AppView.prototype.events = {
    'click #add-goal': 'addGoalHandler'
  };

  AppView.prototype.initialize = function() {
    return this.on('rendered', this.addDatepicker, this);
  };

  AppView.prototype.events = {
    'click #add-goal': 'displayGoalPrompt',
    'click #save-goal': 'saveGoalHandler'
  };

  AppView.prototype.displayGoalPrompt = function() {
    var goalPrompt, html;
    html = _.template($('#goal-prompt-template').html());
    goalPrompt = $('#goal-prompt-container').html(html);
    this.$el.append(goalPrompt);
    this.trigger('rendered', this);
    return this.$el;
  };

  AppView.prototype.addDatepicker = function() {
    return $('#due-date').datepicker();
  };

  AppView.prototype.saveGoalHandler = function() {
    return this.collection(saveGoal());
  };

  return AppView;

})(Backbone.View);

// Generated by CoffeeScript 1.9.3
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.GoalView = (function(superClass) {
    extend(GoalView, superClass);

    function GoalView() {
      return GoalView.__super__.constructor.apply(this, arguments);
    }

    GoalView.prototype.className = 'goal';

    GoalView.prototype.initialize = function() {
      this.render;
      return this.on('change', this.render, this);
    };

    GoalView.prototype.events = {
      'event': 'event handler'
    };

    GoalView.prototype.template = _.template;

    GoalView.prototype.render = function() {
      this.$el.html(this.template($('#goal-template'), this.model.attributes));
      return this.$el;
    };

    return GoalView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=goalView.js.map

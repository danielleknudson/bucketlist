// Generated by CoffeeScript 1.9.3
(function() {
  var GoalView;

  GoalView = new Backbone.View.extend({
    className: 'goal',
    initialize: function() {
      this.render;
      return this.on('change', this.render, this);
    },
    events: {
      'event': 'event handler'
    },
    template: _.template,
    render: function() {
      this.$el.html(this.template($('#goal-template'), this.model.attributes));
      return this.$el;
    }
  });

}).call(this);

//# sourceMappingURL=goalView.js.map
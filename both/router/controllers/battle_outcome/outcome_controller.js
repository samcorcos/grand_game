this.OutcomeController = RouteController.extend({
  template: "outcome",
  yieldTemplates: {
    /*YIELD_TEMPLATES*/
  },
  onBeforeAction: function() {
    this.render("loading");
    self = this;
    Meteor.setTimeout(function(){
      self.render("outcome");
      self.next();
    }, 2000)
  },

  action: function() {
    this.render();
    /*ACTION_FUNCTION*/
  },
  waitOn: function() {
    return [
    ];
    /*WAIT_FUNCTION*/
  },
  data: function() {
    return {
      params: this.params || {}
    };
    /*DATA_FUNCTION*/
  },
  onAfterAction: function() {
  }
});

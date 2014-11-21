this.PoliticsOutcomeController = RouteController.extend({
  template: "politicsOutcome",
  yieldTemplates: {
    /*YIELD_TEMPLATES*/
  },
  onBeforeAction: function() {
    this.render("loading");
    self=this;
    Meteor.setTimeout(function(){
      self.render("politicsOutcome");
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

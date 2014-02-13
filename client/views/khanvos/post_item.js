Template.postItem.helpers({
	submittedText: function() {
		return new Date(this.submitted).toString();
	},
	votedClass: function() {
		var userId = Meteor.userId();
		if (userId && !_.include(this.voters, userId)) {
			return 'btn-primary votable';
		} else {
			return 'disabled';
		}
	}
});
Template.postItem.events({
	'click .votable': function(e) {
		e.preventDefault();
		Meteor.call('vote', this._id);
	}
});
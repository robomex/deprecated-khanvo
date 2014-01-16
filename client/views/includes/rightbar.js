Template.rightbar.helpers({
	followedClass: function() {
		var userId = Meteor.userId();
		if (userId && !_.include(this.followers, userId)) {
			return 'btn-primary followable';
		} else {
			return 'disabled';
		}
	}
});

Template.rightbar.events({
	'click .followable': function(e) {
		e.preventDefault();
		Meteor.call('follow', this._id);
	}
});

$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});
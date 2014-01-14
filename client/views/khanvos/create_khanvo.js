Template.createKhanvo.events({
	'submit form': function(e) {
		e.preventDefault();

		var khanvo = {
			khanvoName: $(e.target).find('[name=khanvoName]').val(),
			description: $(e.target).find('[name=description]').val()
		}

		Meteor.call('khanvo', khanvo, function(error, id) {
			if (error)
				return alert(error.reason);

		Router.go('khanvo', {_id: id});;
		});
	}
});
Template.khanvo.helpers({
	posts: function() {
		return Posts.find({khanvoName: this.name});
	}
});
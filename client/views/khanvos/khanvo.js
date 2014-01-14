Template.khanvo.helpers({
	posts: function() {
		return Posts.find({khanvoId: this._id});
	}
});
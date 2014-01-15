Meteor.publish('khanvos', function() {
	return Khanvos.find();
});
Meteor.publish('posts', function(khanvoId) {
	return Posts.find({khanvoId: khanvoId});
});
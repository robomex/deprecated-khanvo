Notifications = new Meteor.collection('notifications');

Notifications.allow({
	update: ownsDocument
});

createPostNotification = function(post) {
	var post = Posts.findOne(post.)
}
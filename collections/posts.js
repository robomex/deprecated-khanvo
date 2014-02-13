Posts = new Meteor.Collection('posts');
Posts.allow({
	remove: ownsDocument
});

Meteor.methods({
	post: function(postAttributes) {
		var user = Meteor.user();
		var khanvo = Khanvos.findOne({khanvoName: postAttributes.khanvoName});
		// ensure the user is logged in
		if (!user)
			throw new Meteor.Error(401, 'You need to login to post, COMON');

		if (!postAttributes.content)
			throw new Meteor.Error(422, 'You gotta write something');

		if (!khanvo)
			throw new Meteor.Error(422, 'You gotta post to a Khanvo');

		post = _.extend(_.pick(postAttributes, 'khanvoName', 'content'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime(),
			voters: [],
			votes: 0
		});

		// create the post, save the id
		post._id = Posts.insert(post);

		return post._id;
	},
	vote: function(postId) {
		var user = Meteor.user();
		// ensure the user is logged in
		if (!user) 
			throw new Meteor.Error(401, "You need to login to vote");
		Posts.update({
			_id: postId,
			voters: {$ne: user._id}
		}, {
			$addToSet: {voters: user._id},
			$inc: {votes: 1}
		});
	}
});
Posts = new Meteor.Collection('posts');

Meteor.methods({
	post: function(postAttributes) {
		var user = Meteor.user();
		var khanvo = Khanvos.findOne(postAttributes.khanvoId);
		// ensure the user is logged in
		if (!user)
			throw new Meteor.Error(401, 'You need to login to post, COMON');

		if (!postAttributes.body)
			throw new Meteor.Error(422, 'You gotta write something');

		if (!khanvo)
			throw new Meteor.Error(422, 'You gotta post to a Khanvo');

		post = _.extend(_.pick(postAttributes, 'khanvoId', 'content'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});

		return post._id;
	}
});
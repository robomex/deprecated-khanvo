Posts = new Meteor.Collection('posts');

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
			submitted: new Date().getTime()
		});

		// create the post, save the id
		post._id = Posts.insert(post);

		return post._id;
	}
});
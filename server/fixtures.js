// Fixture data
if (Posts.find().count() === 0) {
	var now = new Date().getTime();

	// create one khanvo, two users, and three posts
	var roboId = Meteor.users.insert({
		profile: { name: 'robomex' }
	});
	var robo = Meteor.users.findOne(roboId);
	var knozId = Meteor.users.insert({
		profile: { name: 'knozgrul' }
	});
	var knoz = Meteor.users.findOne(knozId);
	var theYPId = Khanvos.insert({
		name: 'TheYP',
		description: 'we are not good people'
	});

	Posts.insert({
	  khanvoName: 'TheYP',
	  content: 'i am robomex',
	  //userId = robo._id,
	  author: robo.profile.name,
	  submitted: now - 47 * 3600 * 1000
	});
		
	Posts.insert({
	  khanvoName: 'TheYP',
	  content: 'and this is khanvo',
	  //userId = robo._id,
	  author: robo.profile.name,
	  submitted: now - 33 * 3600 * 1000
	});
	
	Posts.insert({
	  khanvoName: 'TheYP',
	  content: 'stfu',
	  //userId = knoz._id,
	  author: knoz.profile.name,
	  submitted: now - 17 * 3600 * 1000
	});
}
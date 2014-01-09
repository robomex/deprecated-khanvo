Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
	this.route('khan', {path: '/'});
	this.route('khanvo', {
		path: '/',
		data: function() { return Posts.findOne(this.param)}
	})
});
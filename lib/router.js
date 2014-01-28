Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { 
		return [Meteor.subscribe('khanvos'), Meteor.subscribe('posts')]; 
	}
});

Router.map(function() {
	this.route('khan', {path: '/'});
	this.route('createKhanvo', {path: '/create'});
	this.route('khanvo', {
		path: '/:name',
//		waitOn: function() {
//			return Meteor.subscribe('posts', this.params.name);
//		},
		data: function() { return Khanvos.findOne(this.params.name); }
	});
});
var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn())
			this.render(this.loadingTemplate);
		else
			this.render('accessDenied');
		this.stop();
	}
}
Router.before(requireLogin, {only: 'createKhanvo'});
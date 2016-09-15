Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/posts', {
	name: "posts",
	    data: function(){
	    return {
			posts: [
				{
					title: "Premier post",
					hide: true
				},
				{
					title: "Second post",
					hide: false
				},
				{
					title: "Troisième post",
					hide: false
				},
			]
		    };
	}
    });

Router.route('/', {
	name: "home",
	data: function(){
		var posts = Posts.find();

		return {
			posts: posts
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPostHeaders");
	}
});

Router.route('/user-register', {
	name: 'register'
});


Router.route('/login', {
	name: 'login'
});

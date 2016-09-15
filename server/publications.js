Meteor.publish("allPostHeaders", function(){
    return Posts.find({}, {
        fields: {content: 0}
    });
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
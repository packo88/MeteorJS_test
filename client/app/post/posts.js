Template.post.helpers({
    setAuthor: function(){
        return '<b>umar</b>';
    }
});

Template.post.events({
    'click .post': function(e){
        alert("Vous avez cliqué")
    }
});
Template.home.events({
    'submit form': function(e){
        e.preventDefault();

        var author = $("input[name='auteur']").val();
        var title = $("input[name='titre']").val();
        var content = $("textarea[name='contenu']").val();

        var post = {
            author: author,
            title: title,
            content: content
        }

        Posts.insert(post);
    },
    'click .rand': function(e){
        var list = $("#listPost li");
        var i = Math.floor((Math.random() * list.length - 1) + 1);
        document.getElementById("demo").innerHTML = $('#listPost').children('li').eq(i).html();
    },
    'click .remove': function(e){
        Posts.remove(this._id);
    }
});

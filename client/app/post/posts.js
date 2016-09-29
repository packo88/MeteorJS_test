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

AutoForm.hooks({
    postsInsertForm: { // ID du formulaire
        onSuccess: function(formType, result) {
            // Que faire après l'insertion/mise à jour ?
        }
    }
});

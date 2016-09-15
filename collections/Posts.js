Posts = new Mongo.Collection("posts");

// SCHEMA ENTITY
Posts.attachSchema(new SimpleSchema({
    title: { // Définition du champs "title"
        type: String,
        max: 200
    },
    author: { // Définition du champs "author"
        type: String,
        max: 200
    },
    content: { // Définition du champs "content"
        type: String,
        max: 2000
    },
    createdAt: { // Définition du champs "createdAt"
        type: Date,
        denyUpdate: true, // On refuse de mettre ce champs à jour (pas de "update")
        autoValue: function(){ // Particularité ici, la valeur est attribuée automatiquement
            if(this.isInsert){ // Uniquement sur les "inserts"...
                return new Date;
            }
            else if(this.isUpsert){ // ... ou sur les "upserts"
                return {$setOnInsert: new Date};
            }
            else{
                this.unset(); // Sinon on ne touche pas au champs
            }
        }
    }
}));


Posts.allow({
    insert: function(userId, doc){

        if(doc.author !== "Bibi"){
            throw new Meteor.Error(403, "Vous n'avez pas l'autorisation d'insérer un nouveau post !");
        }
        else{
            return Posts.insert(doc); // Une insertion retourne le nouvel identifiant
        }

    }
});


Posts.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});


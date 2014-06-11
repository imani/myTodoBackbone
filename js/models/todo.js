var Todo = Backbone.Model.extend({    
    defaults: {
       id: 0,
       title: '',
       completed: false
    },
    
    getId : function() {
        return this.id;
    },

    setId : function(_id){
        this.id = _id;

    },
    getTitle : function(){
        return	this.title;
    },
    setTitle : function(t){
        this.title = t;
    },
    isCompleted : function(){
        return this.completed;
    },
    setCompleted : function(c){
        this.completed = c;
    }

});
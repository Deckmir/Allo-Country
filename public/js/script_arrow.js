Vue.component('post', {
  template: "#post-template",
  props: ['post'],
  data: function() {
    return {
      upvoted: false,
      downvoted: false
    };
  },
  methods: {
    upvote: function() {
      this.upvoted = !this.upvoted;
      this.downvoted = false;
    },
    downvote: function() {
      this.downvoted = !this.downvoted;
      this.upvoted = false;
    },
    remove() {
            this.$emit('remove');
        }
  }
  ,
  computed: {
    votes: function() {

      if (this.upvoted) {
        return this.post.votes + 1;
      } else if (this.downvoted) {
        return this.post.votes - 1;
      } else {
        return this.post.votes;
      }

    }
  }
});
var vm = new Vue({
  el: "#arrow",
  data: {
    comments: [{
      title: "Love this site!",
      votes: 2,
      username:"Adam ",
      static:"1"
    },  {
      title: "France is amazing!",
      votes: 85,
      username:"François",
      static:"1"
    }],
    comment: ""
  },
  methods: {
    postComment: function() {
      this.comments.push({
        title: this.comment,
        votes: 0,
        username:"Me",
        static:0
      })
      this.comment = "";
    },
    delComment(index){
      this.comments.splice(index,1);
    },
       }
  
 
});



/*var app = new Vue({
	el: '#app',
	data: {
	message: 'Hello Vue!'
	}

})

var app2= new Vue({
	el: '#app-2',
	data: {
		message:'You loaded this page on ' + new Date().toLocaleString()

	}
})

var app3 = new Vue({
	el: '#app-3',
	data:{
		seen:true
	}
})
app3.seen = false

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 =new Vue({
	el : '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods:{
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}

	}
})

var app6= new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
})

Vue.component('todo-item', {
	props:['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7= new Vue ({
el: '#app-7',
data:{
	groceryList:[
	{id: 0, text :'Vegetables'},
	{id: 1, text : 'Cheese'},
	{id: 2, text : 'Whatever else humans are supposed to eat'}

	]


}

})
*/

Vue.component('modal', {
  template: '#modal-template'
})

// start app
new Vue({
  el: '#app',
  data: {
    showModal: false
  }
});





Vue.component('star-rating', {

  props: {
    'name': String,
    'value': null,
    'id': String,
    'disabled': Boolean,
    'required': Boolean
  },

  template: '<div class="star-rating">\
        <label class="star-rating__star" v-for="rating in ratings" \
        :class="{\'is-selected\': ((value >= rating) && value != null), \'is-disabled\': disabled}" \
        v-on:click="set(rating)" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">\
        <input class="star-rating star-rating__checkbox" type="radio" :value="rating" :name="name" \
        v-model="value" :disabled="disabled">★</label>\
        <button style="margin-top:10px; margin-left:5px;" \
        class ="btn btn-lg btn-success" v-on:click="show_Rating(value)">Submit</button> </div>',


  data: function() {
    return {
      temp_value: null,
      ratings: [1, 2, 3, 4, 5]
    };
  },

  methods: {
    /*
     * Behaviour of the stars on mouseover.
     */
    star_over: function(index) {
      var self = this;

      if (!this.disabled) {
        this.temp_value = this.value;
        return this.value = index;
      }

    },

    /*
     * Behaviour of the stars on mouseout.
     */
    star_out: function() {
      var self = this;

      if (!this.disabled) {
        return this.value = this.temp_value;
      }
    },


     show_Rating:function(value){

    	alert(value);
    },

    /*
     * Set the rating.
     */
    set: function(value) {
      var self = this;
      if (!this.disabled) {
        this.temp_value = value;
        return this.value = value;
      }
    }
  }
});

new Vue({
  el: '#star'
});








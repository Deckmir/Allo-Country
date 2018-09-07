

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





const app = new Vue({
  el:'#signin',
  data:{
    errors:[],
    name:null,
    email:null,
    password:null,
    password2:null
    
  },
  methods:{
    checkForm:function(e) {
      this.errors = [];
      if(!this.name) this.errors.push("Name required.");
      if(!this.email) {
        this.errors.push("Email required.");
      } else if(!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");        
      }
      if(!this.password)this.errors.push("Password required");
      if(this.password != this.password2)this.errors.push("Passwords are differents");
      if(!this.errors.length) return true;
      e.preventDefault();
    },
    validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
  }
})


const appa = new Vue({
  el:'#login',
  data:{
    errors:[],
    name_login:null, 
    password_login:null,
    
  },
  methods:{
    checkForm:function(e) {
      this.errors = [];
      if(!this.name_login) this.errors.push("Name required.");
      if(!this.password_login)this.errors.push("Password required");
      if(!this.errors.length) return true;
      e.preventDefault();
     },
    }
   } 
)











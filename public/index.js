/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      tasks: [ 
              {
                id: 1,
                text: "Mow the lawn",
                completed: true  
                },
                {
                id: 2,  
                text: "Hack darts",
                completed: true
                },
                {
                id: 3,
                text: "Win Parlays",
                completed: true
                }
                ],
      newTask: {
                id: "",
                text: "",
                completed: ""
                }

    };
  },
  created: function() {},
  methods: {
    addTask: function() {
      var newTaskInfo = {
                        id: this.newTask.id,
                        text: this.newTask.text,
                        completed: this.newTask.completed
                        };
    if (this.newTask.text) {
    this.tasks.push(newTaskInfo);
    this.newTask.text = "";
    }
  },

  markComplete: function(inputTask) {
    var indexOfTask = this.tasks.indexOf(inputTask);
    this.tasks.splice(indexOfTask, 1);
  }

  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
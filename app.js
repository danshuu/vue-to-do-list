// Vue.component('click-counter', {
//   template: '#click-counter-template',
//   data() {
//     return {
//       count: 0,
//     };
//   },
// });
let PlanComponent = {
  template: '#plan-template',
  // props: ['name'] //OR
  props: {
    name: {
      type: String,
      default: "random default value",
    },
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan;
    }
  },
  methods: {
    select() {
      this.$emit('select', this.name);
    }
  }
};

let PlanPickerComponent = {
  template: '#plan-picker-template',
  components: {
    plan: PlanComponent
  },
  // props: ['name'] //OR
  data() {
    return {
      plans: ['the hacker', 'the curious', 'the addict'],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    }
  }
}

// Vue.component('plan-picker', {
//   template: '#plan-picker-template',
//   components: {
//     plan: PlanComponent
//   }
//   // props: ['name'] //OR
//   data() {
//     return {
//       plans: ['the hacker1', 'the curious1', 'the addict1']
//     }
//   }
// })

// Vue.component('plan', {
//   template: '#plan-template',
//   // props: ['name'] //OR
//   props: {
//     name: {
//       type: String,
//       default: "random default value",
//       required: true
//     }
//   }
// })

//mounts on element with id of app
new Vue({
  el: "#app",
  components: {
    // 'plan': PlanComponent,
    'plan-picker': PlanPickerComponent
  },
  // data: {
  //   plans: ['the hacker', 'the curious', 'the addict']
  // }
})
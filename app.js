const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    couterUp() {

      return this.counter++;

    },
    removeCounter() {
      return this.counter = 0;
    }
  },
});

app.mount('#events');

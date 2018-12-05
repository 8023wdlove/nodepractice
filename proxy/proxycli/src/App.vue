<template>
  <div id="app">
    <button @click="txt1()">测试测试测试</button>
    <div>{{txt}}</div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      txt: ''
    }
  },
  methods: {
    txt1 () {
      console.log(77)
      this.$.get('/api', {}, (data) => {
        console.log(333)
        this.txt = data
        console.log(this.txt, 8888)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

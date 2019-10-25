<template>
  <div id="app">
    <full-page :options="options" id="fullpage">
      <div class="section">
        <h3>Section 1</h3>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
      <div class="section">
        <h3>Section 4</h3>
      </div>
    </full-page>
  </div>
</template>

<script>
import '../assets/css/fullpage.min.css'
export default {
  name: "app",
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        navigation: true,
        //anchors: ["page1", "page2", "page3"],
        sectionsColor: [
          "#41b883",
          "#ff5f45",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab"
        ]
      }
    };
  },
  methods: {}
};
</script>

<style>
body{
   margin:0;
   padding:0;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

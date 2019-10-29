<template>
  <div>
    <full-page :options="options" id="fullpage">
      <div class="section">
        <first-section></first-section>
        <down></down>
      </div>
      <div class="section">
        <second-section></second-section>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 3.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 3.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 3.3</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 4</h3>
      </div>
    </full-page>
  </div>
</template>

<script>
import '../assets/css/fullpage.min.css'
import FirstSection from '../components/index/FirstSection'
import SecondSection from '../components/index/SecondSection'
import down from '../components/down'

export default {
  components: {
    FirstSection,
    down,
    SecondSection
  },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        navigation: true,
        menu: '#menu',
        //anchors: ["page1", "page2", "page3"],
        sectionsColor: [
          "#rgba(0,0,0,0)",
          "#ddd2d5",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#ba5be9",
          "#b4b8ab"
        ],
      }
    };
  },
  methods: {

  }
};
</script>

<style>
body{
   margin:0;
   padding:0;
}
ul{
  list-style-type: none;
  padding: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #dae0de;
}


</style>

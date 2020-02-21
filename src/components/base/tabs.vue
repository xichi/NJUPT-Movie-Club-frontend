<template>
  <div class="tabs-wrap">
    <ul class="tabList">
      <li
        v-for="(item, index) in tabList"
        :key="index"
        :class="['tab',{active: currentTab === index}]"
        @click="toggleTab(index)"
      >
        <div>{{ item.name }}</div>
        <div class="line"></div>
      </li>
    </ul>
    <div class="tab-pane">
      <div v-for="(item, index) in tabList" :key="index">
        <!-- v-show不能控制slot的显示 。slot类似于template。-->
        <slot :name="item.id" v-if="currentTab == index"></slot> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0,
    };
  },
  props: {
    tabList: {
      type: Array,
      default: function() {
        return [
          { id: 0, name: "tabA" },
          { id: 1, name: "tabB" },
          { id: 2, name: "tabC" }
        ];
      }
    }
  },
  methods: {
    toggleTab(index) {
      this.currentTab = index;
      this.$emit("currentTab",index);
    }
  }
};
</script>

<style lang="stylus" scoped>
.tab
  cursor pointer
  .line
    width 0
    height 2px
    transition all .3s ease
.active
  color #3085a3
  .line
    margin 0 auto
    margin-top 5px
    width 80%
    background-color #3085a3
</style>

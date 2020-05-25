<template>
  <div class="members-info">
    <div class="tabbar">
      <div
        v-for="(item, index) in tabbar"
        class="tabbar-item"
        :key="index"
        :style="{ color: currentTabIndex === index ? '#2c3e50' : '' }"
        @click="changeTabIndex(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="tabbar-container">
      <transition name="tab" mode="out-in">
        <div class="members-container" v-if="currentTabIndex === 0" key="0">
          <div v-for="(members, i) in members19" class="member-card" :key="i">
            <div>
              <img :src="members.avatar" width="100" height="100" />
              <div>
                <div style="font-size: 20px;font-weight: bold;">
                  {{ members.name }}
                </div>
                <div>{{ members.position }}</div>
              </div>
              <div class="signature">
                <i class="fa fa-quote-left pull-left"></i>
                {{ members.signature }}
                <i class="fa fa-quote-right pull-left"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="members-container" v-if="currentTabIndex === 1" key="1">
          <div v-for="(members, i) in members19" class="member-card" :key="i">
            <div>
              <img :src="members.avatar" width="100" height="100" />
              <div>
                <div style="font-size: 20px;font-weight: bold;">
                  {{ members.name }}
                </div>
                <div>{{ members.position }}</div>
              </div>
              <div class="signature">
                <i class="fa fa-quote-left pull-left"></i>
                {{ members.signature }}
                <i class="fa fa-quote-right pull-left"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="members-container" v-if="currentTabIndex === 2" key="2">
          <div v-for="(members, i) in members19" class="member-card" :key="i">
            <div>
              <img :src="members.avatar" width="100" height="100" />
              <div>
                <div style="font-size: 20px;font-weight: bold;">
                  {{ members.name }}
                </div>
                <div>{{ members.position }}</div>
              </div>
              <div class="signature">
                <i class="fa fa-quote-left pull-left"></i>
                {{ members.signature }}
                <i class="fa fa-quote-right pull-left"></i>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar: ["19届成员团", "18届成员团", "17届成员团"],
      currentTabIndex: 0,
      members19: [
        {
          name: "刘羿",
          avatar: "http://njupt.xichi.xyz/avatar/avatar1.jpg",
          position: "社长",
          signature:
            "Life is not a race, but a journey to be savored each step of the way.",
        },
        {
          name: "何其凡",
          avatar: "http://njupt.xichi.xyz/avatar/avatar2.jpg",
          position: "放映部部长",
          signature:
            "你以为挑起生活的担子是勇气，其实去过自己真正想要的生活才更需要勇气",
        },
        {
          name: "孙杨",
          avatar: "http://njupt.xichi.xyz/avatar/avatar3.jpg",
          position: "宣传部部长",
          signature: "No expectations, no disappointments.",
        },
        {
          name: "xx",
          avatar: "http://njupt.xichi.xyz/avatar/avatar4.jpg",
          position: "放映部成员",
          signature: "生活就像海洋，只有意志坚强的人，才能到达彼岸。",
        },
        {
          name: "西池",
          avatar: "http://njupt.xichi.xyz/avatar/avatar5.jpg",
          position: "宣传部成员",
          signature: "未曾失败的人恐怕也未曾成功过",
        },{
          name: "neko",
          avatar: "http://njupt.xichi.xyz/avatar/avatar6.jpg",
          position: "宣传部成员",
          signature: "未曾失败的人恐怕也未曾成功过",
        },
      ],
      members18: [],
      members17: [],
    };
  },
  methods: {
    changeTabIndex(index) {
      this.currentTabIndex = index;
    },
  },
};
</script>

<style lang="stylus" scoped>
.members-info
  margin-top 100px
  .tabbar
    font-size 20px
    font-weight bold
    display flex
    justify-content space-between
    width 500px
    margin 0 auto
    .tabbar-item
      position relative
      color #a5a5a6
      cursor pointer
      &:last-child::after
        display none
    .tabbar-item::after
      content ""
      width 50px
      height 5px
      background-color #3085a3
      position absolute
      top 50%
      left 100%
      transform translate(50%, -50%)
  .tabbar-container
    height 400px
    width 800px
    margin 0 auto
    padding 50px 0
    .members-container
      position relative
      width 100%
      height 100%
      .member-card
        position absolute
        top 0
        font-size 15px
        width 200px
        height 250px
        border-radius 50px
        margin 0 30px
        padding 20px
        background-color #FEFAF9
        box-shadow 0 0 10px 0 rgba(163,177,191,.35)
        transition all .6s
        .signature
          margin 8px 0
          padding 0 20px
          text-align left
          position relative
          .fa
            color #a5a5a6
            font-size 15px
          .fa-quote-left
            position absolute
            top 0
            left 0
          .fa-quote-right
            position absolute
            bottom 0
            right 0
      for row in 2 3 4 5 6
        .member-card:nth-child({row})
          left 150px + 100px * (row - 1)
          &:hover
            left 150px + 100px * (row - 1)  - 100px
.tab-enter-active, .tab-leave-active
  transition all .3s ease-in
.tab-enter
  opacity 0
  transform translate3d(10%, 0, 0)
.tab-leave-to
  opacity 0
  transform translate3d(-10%, 0, 0)
.tab-enter-to,.tab-leave
  opacity 1
  transform translate3d(0, 0, 0)
</style>

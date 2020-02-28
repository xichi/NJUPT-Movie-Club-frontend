<template>
  <div>
    <my-header></my-header>
    <div class="profile-wrap">
      <div class="banner-wrap">
        <div
          class="banner"
          :style="'background-image:url(' + imageUrl + ');'"
        ></div>
        <div class="userinfo">
          <div
            class="avatar"
            :style="'background-image:url(' + avatar + ');'"
          ></div>
          <ul class="infoList">
            <li>
              <p class="title">用户名：</p>
              <p>{{ userInfo.username }}</p>
            </li>
            <li>
              <p class="title">邮箱：</p>
              <p>{{ userInfo.email }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="user-wrap">
      <div>
        <div class="title"><font-awesome-icon :icon="['fas', 'edit']" /><span>我发表的影评</span></div>
        <div calss="main">
          <p>暂无</p>
        </div>
      </div>
      <div>
        <div class="title"><font-awesome-icon :icon="['fas', 'book-open']" /><span>我推荐的电影</span></div>
        <div calss="main">
          <p>暂无</p>
        </div>
      </div>
      <div>
        <div class="title"><font-awesome-icon :icon="['fas', 'chart-bar']" /><span>我参与的投票</span></div>
        <div calss="main">
          <p>暂无</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "_c/common/Header";
import { mapState } from "vuex";
export default {
  components: {
    myHeader
  },
  data() {
    return {
      imageUrl: "http://njupt.xichi.xyz/th.jpg",
      avatar: "http://njupt.xichi.xyz/movies/avatar.jpg"
    };
  },
  computed: {
    ...mapState(["userLogin", "userInfo"])
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.profile-wrap
  width 100vw
  height 100%
  .banner-wrap
    position relative
    height 450px
    width 100%
    .banner
      height 100%
      width 100%
      background-position center center
      background-size cover
    .userinfo
      position absolute
      bottom -200px
      left 4rem
      width 200px
      height 400px
      background-color #fff
      border-radius 10px
      box-shadow 0 0 10px 0 rgba(#3085a3,0.5)
      .avatar
        width 190px
        height 190px
        margin 5px
        border-radius 10px
        background-position center center
        background-size cover
      .infoList
        font-size 13px
        text-align left
        .title
          font-size 15px
          font-weight bold
.user-wrap
  padding-left 400px
  font-size 16px
  > div
    margin 1rem 2rem 1rem 1rem
    height 300px
    border-radius 20px
    box-shadow 0 0 10px 0 rgba(#3085a3,0.4)
    .title
      font-size 18px
      line-height 50px
      color #999
      text-align left
      padding-left 20px
      > span 
        padding-left 5px


@media screen and (max-width: 1024px)
  .userinfo
    left 2rem !important
  .user-wrap
    padding-left calc(2rem + 200px)
    > div
      margin .5rem

@media screen and (max-width: 767px)
  .userinfo
    left 50% !important
    transform translateX(-50%)
  .user-wrap
    padding-top 220px
    padding-left 0
    > div
      margin 30px
</style>

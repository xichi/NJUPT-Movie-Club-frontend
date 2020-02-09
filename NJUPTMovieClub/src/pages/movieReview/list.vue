<template>
  <div>
    <my-header class="my-header" :lightMode="false">
      <li id="write_btn" slot="write">
        <router-link to="/movieReview/write"
          >我要撰写 <font-awesome-icon :icon="['far', 'edit']"
        /></router-link>
      </li>
    </my-header>
    <div id="movie-review-list">
      <div v-for="(t, i) in 5" :key="i">
        <detail-card
          v-for="(item, index) in detailCards"
          :key="index"
          class="detail-card"
        >
          <div slot="title" class="title" @click="clickFn('/movieReview/details/',item.id)">{{ item.title }}</div>
          <div slot="detail" class="detail">{{ item.detail }}</div>
          <div slot="postTime" class="postTime">
            <font-awesome-icon :icon="['far', 'calendar']" />
            {{ item.postTime }}
          </div>
          <div slot="author" class="author">
            <font-awesome-icon :icon="['far', 'user']" />
            {{ item.author }}
          </div>
          <div slot="pic" class="pic">
            <div class="pic-wrap">
              <div class="pic-title">{{ item.title }}</div>
              <div class="pic-author">{{ item.author }}</div>
            </div>
          </div>
        </detail-card>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "_c/Header";
import detailCard from "_c/detailCard";
export default {
  components: {
    myHeader,
    detailCard
  },
  data() {
    return {
      detailCards: [
        {
          id: '255467',
          title: "蒙太奇的诞生与发展",
          detail:
            "什么是蒙太奇？蒙太奇是法语“Montage”的音译，原为建筑学术语，是“剪切”的意思，但在前苏联它被发展成一种电影中镜头组合的理论。简单来说，当不同镜头拼接在一起时，往往又会产生各个镜头单独存在时所不具有的特定含义，这就是蒙太奇。当卢米埃尔兄弟在19世纪末拍出史上最早的影片时，他是不需要考虑到蒙太奇问题的。因为他们拍出的只是生活的片段。后来，电影史上的第一位导演乔治·梅里埃将这些生活片段戏剧化，但他总是把摄影机对着舞台，摆在一个固定的位置上，有点类似今天的舞台剧。什么是蒙太奇？蒙太奇是法语“Montage”的音译，原为建筑学术语，是“剪切”的意思，但在前苏联它被发展成一种电影中镜头组合的理论。简单来说，当不同镜头拼接在一起时，往往又会产生各个镜头单独存在时所不具有的特定含义，这就是蒙太奇。当卢米埃尔兄弟在19世纪末拍出史上最早的影片时，他是不需要考虑到蒙太奇问题的。因为他们拍出的只是生活的片段。后来，电影史上的第一位导演乔治·梅里埃将这些生活片段戏剧化，但他总是把摄影机对着舞台，摆在一个固定的位置上，有点类似今天的舞台剧。",
          postTime: "2020/02/09",
          author: "西池",
          pic: "url('../../assets/pic/home-bg.jpg')"
        }
      ]
    };
  },
  methods:{
    clickFn(baseUrl, id) {
      this.$router.push(baseUrl + id);
    }
  }
};
</script>

<style lang="stylus" scoped>
#movie-review-list
  padding-top 80px
  max-height 2000px
</style>
<style lang="stylus">
#write_btn
  float left
  padding 10px 20px
  a
    font-size 18px
    color #ffae8f
    text-decoration none
    &:hover
      color #ff677d
#movie-review-list
  .detail-card
    padding 0 20px
    .title
      font-size 22px
      padding 8px 0
      cursor pointer
      &:hover
        color #298cce
    .detail
      text-indent 2em
      font-size 18px
      color #999
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp 4
      -webkit-box-orient vertical
    .footer
      font-size 15px
      color #999
      .postTime
        padding-right 15px
    .pic
      position relative
      margin 0 auto
      margin-top 10px
      height 80%
      width 80%
      border-radius 5px
      background-image url("../../assets/pic/home-bg.jpg")
      background-size cover
      box-shadow 0 0 8px 0 #888
      transition all .5s ease
      .pic-title, .pic-author
        position absolute
        top 70%
        left 50%
        transform translate(-50%, -50%)
        color rgba(255,255,255,0.8)
        font-size 13px
        opacity 0
        transition all .5s ease
      .pic-author
        font-size 11px
        transition all .5s ease .2s
      &:hover
        .pic-wrap
          width 100%
          height 100%
          background-color rgba(0,0,0,0.3)
          .pic-title
            top 45%
            opacity 1
          .pic-author
            top 55%
            opacity 1
</style>

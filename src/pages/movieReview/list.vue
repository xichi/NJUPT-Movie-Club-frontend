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
      <!-- <div v-for="(t, i) in 5" :key="i"> -->
      <detail-card
        v-for="(item, index) in currentCards"
        :key="index"
        class="detail-card"
      >
        <div
          slot="title"
          class="title"
          @click="clickFn('/movieReview/details/' + item.id, item.id)"
        >
          {{ item.title }}
        </div>
        <div slot="detail" class="detail">{{ item.detail }}</div>
        <div slot="postTime" class="postTime">
          <font-awesome-icon :icon="['far', 'calendar']" />
          {{ item.postTime }}
        </div>
        <div slot="author" class="author">
          <font-awesome-icon :icon="['far', 'user']" />
          {{ item.author }}
        </div>
        <div slot="pic" class="pic" @click="clickFn('/movieReview/details/' + item.id, item.id)">
          <div class="pic-wrap">
            <div class="pic-title">{{ item.title }}</div>
            <div class="pic-author">{{ item.author }}</div>
          </div>
        </div>
      </detail-card>
      <!--  </div> -->
      <el-pagination
        class="pagination"
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="detailCards.length"
        :page-size="pageSize"
        hide-on-single-page
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import myHeader from "_c/common/Header";
import detailCard from "_c/detailCard";
import { getMovieReview } from "@/api/index";
import { scrollToTop } from "@/utils/index";

export default {
  components: {
    myHeader,
    detailCard
  },
  data() {
    return {
      detailCards: [],
      currentCards: [],
      pageSize: 5
    };
  },
  methods: {
    clickFn(baseUrl, id) {
      this.$router.push({
        path: baseUrl,
        params: {
          id: id
        }
      });
    },
    handleCurrentChange(val){
      const start = (val - 1)*this.pageSize;
      const end = (this.detailCards.length - start) > this.pageSize ? val*this.pageSize : this.detailCards.length;
      this.currentCards = this.detailCards.slice(start,end);
      scrollToTop();
    },
    async loadDetailCards() {
      const { data: movieReview } = await getMovieReview();
      this.detailCards = movieReview;
      if(this.detailCards.length > this.pageSize) this.currentCards = this.detailCards.slice(0,this.pageSize);
      else this.currentCards = this.detailCards;      
    }
  },
  mounted() {
    this.loadDetailCards();
  }
};
</script>

<style lang="stylus" scoped>
#movie-review-list
  padding-top 80px
  .pagination
    margin-top 20px
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
      cursor pointer
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

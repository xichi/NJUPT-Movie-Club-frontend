<template>
  <div>
    <my-header class="my-header" :lightMode="false">
      <li id="submit_btn" slot="submit">
        <span>提交影评</span>
      </li>
    </my-header>
    <div class="main">
      <div class="editor-wrap">
        <div class="upload-picture">
          <div class="upload-btn">
            <a class="title">设置题图</a>
            <i
              class="fa fa-camera camera"
              @click="toggleShow"
            ></i>
          </div>
          <my-upload
            field="img"
            @crop-success="cropSuccess"
            @crop-upload-success="cropUploadSuccess"
            @crop-upload-fail="cropUploadFail"
            v-model="show"
            :width="1200"
            :height="600"
            url="/upload"
            :params="params"
            :headers="headers"
            img-format="png"
          ></my-upload>
          <div
            :style="{ backgroundImage: 'url(' + imgDataUrl + ')' }"
            v-show="imgDataUrl"
            class="pic-profile"
          ></div>
        </div>
        <input
          type="text"
          class="title-input"
          v-model="title"
          placeholder="请输入标题（最多50个字）"
          autofocus
        />
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
      </div>
    </div>
  </div>
</template>

<script>
import "babel-polyfill"; // es6 shim
import myUpload from "vue-image-crop-upload/upload-2.vue";
import myHeader from "_c/common/Header";
export default {
  components: {
    myHeader,
    myUpload
  },
  data() {
    return {
      show: false,
      params: {
        token: "123456798",
        name: "avatar"
      },
      headers: {
        smail: "*_~"
      },
      imgDataUrl: "", // the datebase64 url of created image
      title: "",
      content: "<h2>快来撰写影评~</h2>",
      editorOption: {
        // some quill options
      }
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
      console.log("field: " + field);
    },
    /**
     * upload success
     *
     * [param] jsonData   服务器返回数据，已进行json转码
     * [param] field
     */
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    }
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.main
  padding 80px 0
  .editor-wrap
    width 80vw
    margin 0 auto
    margin-top 20px
    .title-input
      width 100%
      margin 0.5rem 0
      border 0
      outline 0
      font-size 0.8rem
    .upload-picture
        position relative
        width 100%
        height 5rem
        background-color #f6f6f6
      .upload-btn
        position absolute
        top 50%
        left 50%
        transform translateY(-50%)
        &:hover .title
          bottom -50%
          opacity 1
        .title
          position absolute
          bottom 0
          left -50%
          font-size 0.5rem
          width 200px
          text-align left
          opacity 0
          color #cacaca
          transition bottom .5s ease, opacity .3s ease
        .camera
          cursor pointer
          color #cacaca
      .pic-profile
        width 100%
        height 100%
        background-size cover
</style>

<style lang="stylus">
.ql-editor
  min-height 500px!important
#submit_btn
  float left
  padding 10px 20px
  span
    font-size 0.3rem
    letter-spacing 3px
    padding 10px 10px 10px 13px
    border-radius 5px
    background-color #298cce
    color #fff
    cursor pointer
    text-decoration none
    &:hover
      box-shadow 0px 0px 8px 0px rgba(#2775b6, 0.35)
</style>

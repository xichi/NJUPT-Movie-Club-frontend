<template>
   <ul class="myHeader">
        <a href="" class="header_left">
            <li>Movie Club</li>
        </a>
        <a href="" class="header_left">
            <li>更多电影</li>
        </a>
        <a href="" class="header_left">
            <li>关于我们</li>
        </a>
        <a href="" class="header_right">
            <li>sign in</li>
        </a>
   </ul>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
        },
        methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less" scoped>
.myHeader{
    position:absolute;
    width:100%;
    height:100px;
    line-height: 100px;
    font-size:20px;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.3);
    color:#fff;
    z-index:9999;
    overflow: hidden;
    margin:0;
    a:hover,:facous,:active{
        background-color: rgba(0,0,0,0.8);
    }
    .header_right{
        float:right;
    }
    .header_left{
        float:left;
    }
    
}
</style>
<template>
  <NavBar />
  <h1>Title</h1>
  <hr />
  <div>导演</div>
  <div>上映时间</div>
  <div>类型</div>
  <div>海报</div>
  <div>简介</div>
  <div>评分</div>
  <div>主演</div>
  <button>购票</button>
  <hr />
  <div>评论</div>
</template>

<script>
import NavBar from '@/components/user/NavBar.vue';

export default {
  name: "MovieDetail",
  props: ["id"],
  components: { NavBar }
}
</script>

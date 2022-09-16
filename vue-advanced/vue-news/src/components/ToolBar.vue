<template>
  <div class="header">
      <!-- router-link 태그는 기본적으로 a 태그로 변환시켜줌-->
      <router-link to="news">News</router-link> |
      <router-link to="ask">Ask</router-link> |
      <router-link to="jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
/* 활성화된 링크 */
.header .router-link-exact-active {
    color: #35495e;
}
.header a {
    color: white;
}
</style>
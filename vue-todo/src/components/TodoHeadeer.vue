<template>
  <header>
      <!-- <h1>TODO it!</h1> -->
      <h1>{{ this.$store.state.headerText}}</h1>
  </header>
</template>

<!-- scoprd: 다른 컴포넌트에 영향을 끼치지 않고 해당 컴포넌트 내에서만 스타일이 동작-->
<style scoped>
    h1 {
        color: #2f3b52;
        font-weight: 900;
        margin: 2.5rem 0 1.5rem;
    }
</style>
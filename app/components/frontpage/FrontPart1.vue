<template lang="jade">
.ui.vertical.stripe.segment
  .ui.text.container
    h1.ui.header 游戏发布不应成为负担
    p 专注于一款好的游戏本已烦人无数，何必为最后一步而憔悴？
    img(src="http://placehold.it/633x357")
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
    .ui.vertical.stripe {
      padding: 5em 0em;
    }

    img {
      max-width: 550px;
      padding-top: 1em;
      height: auto;
    }

    p {
      font-size: 1.1em;
    }

    h1.ui.header {
      font-size: 2.2em;
      padding-bottom: 0.5em;
    }
</style>

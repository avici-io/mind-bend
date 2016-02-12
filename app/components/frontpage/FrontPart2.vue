<template lang="jade">
  .ui.vertical.quote.segment
    .ui.text.container
      .center.aligned.row(align="center")
        .column
          h1.ui.header 绝对的自由
          p 游戏开发者应当对自己的游戏有完全的控制权，您的玩家甚至都不需要知道这是 Avici.io 提供的服务
      .ui.three.column.grid
        .column: .ui.segment
          p hi
        .column: .ui.segment
          p hi
        .column: .ui.segment
          p hi

</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .ui.vertical.segment {
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

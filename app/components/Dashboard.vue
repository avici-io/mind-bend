<template lang="jade">
  sidenav
  .pusher
    h2 账户设定
    .ui.top.attached.three.item.menu.firstorder
      a.active.teal.item 基本信息
      a.item 首选项
      a.item 状态设定
    .ui.bottom.attached.basic.segment
      h1 hi
</template>

<script>
  import Sidenav from "./dashboard/Sidenav.vue"

  export default {
    components: {
      sidenav: Sidenav
    }
  }
</script>

<style lang="less" scoped>
  .pusher {
    padding-left: 100px;
    padding-top: 24px;
    padding-right: 24px;
  }

  .firstorder.top.attached {
    a.item {
      text-align: left;
      height: 4em;
      font-size: 1.1em;
      font-weight: bold;
      border-bottom: solid #fff 2px;
    }
  }

</style>

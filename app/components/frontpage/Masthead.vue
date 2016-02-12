<template lang="jade">
.ui.inverted.vertical.masthead.center.aligned.segment
  .ui.container
    .ui.large.secondary.inverted.menu
      .right.item
        a.item(v-link="{path: '/'}") 探索
        a.item(v-link="{path: '/account/register'}") 注册
        a.item(v-link="{path: '/account/login'}") 登录
  .ui.text.container
    h1.ui.inverted.header RMMV 游戏在线发布
    h2 零门槛、免费、简单的 RPG Maker MV 游戏在线上传服务
    .ui.huge.inverted.basic.primary.button 下载 MvUCCU 插件
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
h1.section.header {
  font-size: 2.2em;
}

.ui.middle.aligned.stackable.grid.container {
  padding-left: 160px;
  padding-top: 40px;
}

.masthead.segment {
  min-height: 500px;
  padding: 1em 0em;
  background-color: #16a085;
}

.masthead h1.ui.header {
  margin-top: 1em;
  margin-bottom: 0em;
  font-size: 4em;
  font-weight: normal;
}

.masthead .ui.menu .ui.button {
  margin-left: 0.5em;
}

</style>

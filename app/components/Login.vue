<template lang="jade">
  .ui.middle.aligned.center.aligned.grid
    .column
      h2.ui.teal.image.header
        .content 登录账户!
      form.ui.large.form
        .ui.stacked.segment
          .field
            .ui.left.icon.input
              i.user.icon
              input(type="text", name="username", placeholder="用户名")
          .field
            .ui.left.icon.input
              i.lock.icon
              input(type="password", name="password", placeholder="密码")
          .ui.fluid.large.teal.submit.button 登录
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="less">
  body {
    background-color: #dadada;
  }

  body > .grid {
    height: 100%;
  }

  .column {
    max-width: 450px;
  }
</style>

<template>
  <div class="ui left vertical inverted icon menu sidebar overlay visible">
    <a class="logo item" data-content="首页">
      <i class="tag icon"></i>
    </a>
    <a class="item" data-content="游戏">
      <i class="game icon"></i>
    </a>
    <a class="item" data-content="数据">
      <i class="bar chart icon"></i>
    </a>
    <a class="item" data-content="账户设置">
      <i class="setting icon"></i>
    </a>
    <a class="item" data-content="工具下载">
      <i class="download icon"></i>
    </a>
    <a class="item" data-content="注销">
      <i class="power icon"></i>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
.sidebar {
  width: 65px !important;

  background-color: #424242 !important;
  .item {
    height: 65px !important;
  }

  .logo{
    background-color: #212121 !important;
  }

  .icon {
    font-size: 1.15em;
    width: 1.17em;
    height: 1.17em;
    padding-top: 9px;
  }

  .logo .icon {
    font-size: 1.6em;
    width: 1.62em;
    height: 1.62em;
    padding-top: 8px;
  }
}

</style>

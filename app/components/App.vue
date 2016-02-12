<template lang='jade'>
  masthead
  frontpart1
  frontpart2
  frontpart4
  front-footer
</template>

<script>
import FrontPart4 from './frontpage/FrontPart4.vue'
import FrontFooter from './frontpage/FrontFooter.vue'
import FrontPart1 from './frontpage/FrontPart1.vue'
import FrontPart2 from './frontpage/FrontPart2.vue'
import Masthead from './frontpage/Masthead.vue'

export default {
  components: {
    frontpart1: FrontPart1,
    frontpart2: FrontPart2,
    'front-footer': FrontFooter,
    frontpart4: FrontPart4,
    masthead: Masthead
  }
}
</script>

<style lang="less">
  .container {
    width: 800px;
  }

  body {
    background-color: #EEEEEE;
  }

  @contrast-color: #27ae60;

</style>

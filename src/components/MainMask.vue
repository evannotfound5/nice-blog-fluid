<template>
  <div id="main">
    <div class="w">
      七月，依然是多雨的季节。天气虽然炎热，却也因了下雨空气比较清新润泽，草木生长得比以住都要葱茏茂盛。
      一眼望去，青青翠翠，郁郁葱葱，感觉很好。去年的一场台风，把许多的树木都吹倒了，小区里的花木一度受到严重的破坏。
      那一会儿，许多树木的枝叶给砍去，本来茂密的绿化，一下子变成光光的，很是可惜，很不习惯。
      这会儿好了，草木都重新长了出来，新嫩的叶子，浓密鲜亮，满目翠色。
      特别是那几棵蒲桃，更是繁茂苍郁，且树上花开一片，硕果累累。
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  #main {
    padding: 50px 20px;
    
    .w {
      padding: 36px 56px;
      background-color: #fff;
      box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
      // border: 1px solid #eee;
      border-radius: .5rem;
    }
  }

  @media screen and (max-width: 789px) {
    #main {
      padding: 0;
      position: relative;
      top: -12px;
      left: 0;
 
      .w {
        padding: 36px 44px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    #main {   
      
      .w {
        padding: 36px 20px;
      }
    }
  }
</style>
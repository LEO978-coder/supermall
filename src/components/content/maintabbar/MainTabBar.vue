<template>
  <div>
    <router-view></router-view>
    <TabBar>
      <TabBarItem path="/home" activeColor="pink">
        <img slot="item-icon" src="../../assets/igm/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../assets/igm/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="pink">
        <img slot="item-icon" src="../../assets/igm/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../assets/igm/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/shopcart" activeColor="pink">
        <img slot="item-icon" src="../../assets/igm/tabbar//shopcart.svg" alt="">
        <img slot="item-icon-active" src="../../assets/igm/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="pink">
        <img slot="item-icon" src="../../assets/igm/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../assets/igm/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "../tabbar/TarBar"
import TabBarItem from "../tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
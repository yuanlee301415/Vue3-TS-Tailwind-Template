<template>
  <section class="layout">
    <LayoutSideBar class="sideBar" />

    <main>
      <LayoutHeader />
      <LayoutContent class="content" />
    </main>
  </section>
</template>

<script lang="ts" setup>
import LayoutSideBar from './SideBar/index.vue'
import LayoutHeader from './Header/index.vue'
import LayoutContent from './Content/index.vue'
</script>

<style scoped lang="less">
@sideWidth: 210px;

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .sideBar {
    position: fixed;
    width: @sideWidth;
    height: 100vh;
    background-color: #001529;
  }
  main {
    margin-left: @sideWidth;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .content {
      padding: 10px;
      flex: 1;
      overflow: auto;
    }
  }
}
</style>

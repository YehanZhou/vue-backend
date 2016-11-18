<template>
  <div v-if="isShow" class="page">
    <el-dropdown>
      <el-button size="small">
        更多菜单<i class="el-icon-caret-bottom el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-popover
        ref="popover5"
        placement="top"
        width="160">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text">取消</el-button>
        <el-button type="primary" size="mini">确定</el-button>
      </div>
    </el-popover>
    <el-button size="small" v-popover:popover5>删除</el-button>
    <slot></slot>
  </div>
</template>
<style>
  .el-dropdown {
    margin: 5px 10px 10px 0;
  }
</style>
<script>
  export default {
    props: {
      isShow: Boolean
    },
    methods: {}
  };
</script>
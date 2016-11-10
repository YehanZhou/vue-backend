<template>
  <el-tabs type="card" :closable="true" @tab-click="handleClick" @tab-remove="handleRemove">
    <el-tab-pane label="用户管理"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    props: {
      data: Array,
      base: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        highlights: [],
        navState: []
      };
    },
    methods: {
      handleNodeClick(obj) {
        // console.log(`${JSON.stringify(obj)}`);
        obj.path && this.$router.push({path: this.base + obj.path});
      }
    }
  };
</script>

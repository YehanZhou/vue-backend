<template>
  <el-tree :data="data"
           :highlight-current="true"
           @node-click="handleNodeClick"></el-tree>
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
        this.$emit('handleNodeClick', obj);
      }
    },
    mounted() {
      this.tbHeight = document.body.clientHeight - 250;
      window.onresize = function() {
        this.tbHeight = document.body.clientHeight - 200;
      };
    }
  };
</script>

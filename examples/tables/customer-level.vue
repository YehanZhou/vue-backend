<template>
  <div class="table-cont">
    <action :isShow="$route.path !== '/table/index'">
      <el-button size="small">add</el-button>
    </action>
    <el-table
        :data="tableData"
        style="width: 100%"
        :height="tbHeight">
      <el-table-column
          type="selection"
          width="50">
      </el-table-column>
      <el-table-column v-for="item in column"
                       :prop="item.prop"
                       :label="item.label"
                       :width="item.width"
                       :sortable="item.sortable">
      </el-table-column>
    
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tbHeight: '300px',
        column: [{
          prop: 'date',
          label: '日期',
          width: '180',
          sortable: 'true'
        }, {
          prop: 'name',
          label: '姓名',
          width: '180'
        }, {
          prop: 'address',
          label: '地址',
          width: ''
        }
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    created() {
      this.tbHeight = document.body.clientHeight - 250;
    }
  };
</script>
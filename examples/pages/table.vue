<style>
  .page-component {
  
  .el-tabs {
    width: 100%;
  }
  
  .el-tabs--border-card {
    background: #fff;
    border: none;
    box-shadow: none;
  }
  
  .el-col-4 {
    overflow: auto;
  }
  
  .el-tree {
    border: none;
  }
  
  .tab-btn {
    color: #8492a6;
    display: inline-block;
    padding: 5px 10px;
    margin-bottom: 5px;
  
  i {
    font-size: 10px;
    margin-left: 5px;
  }
    
  }
  .tab-active {
    background: #eff2f7;
  }
    
  }
</style>
<template>
  <div class="page-container page-component">
    <el-tabs type="border-card">
      <el-tab-pane v-for="tab in tabs" :label="tab.label">
        <el-row>
          <el-col :span="4">
            <side-nav :data="tab.data" base="/table" @handleNodeClick="sideNavClick"></side-nav>
          </el-col>
          <el-col :span="20">
            <div class="tab-btn" v-for="tab in tabsData" v-bind:class="{'tab-active':tab.isActive}"
                 @click="btnClick(tab)">
              {{tab.label}}
              <i v-if="tab.label !== '首页'" class="el-icon-close" @click.stop="closeTab(tab)"></i>
            </div>
            <router-view class="content"></router-view>
            <footer-nav :isShow="$route.path !== '/table/index'"></footer-nav>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import {navs} from '../route.config';
  export default {
    data() {
      return {
        navsData: navs,
        base: '/table',
        tabs: [
          {label: '柚客管理', data: navs[0]},
          {label: '系统管理', data: navs[1]}
          // {label: '信息发布管理', data: ''}
        ],
        tabsData: [
          {label: '首页', path: '/index', isActive: true}
        ]
      };
    },
    mounted() {
      var elem = document.getElementsByClassName('el-col-4');
      for (let i = 0, l = elem.length; i < l; i++) {
        elem[i].style.height = document.body.clientHeight - 120 + 'px';
      }
      window.onresize = function() {
        for (let i = 0, l = elem.length; i < l; i++) {
          elem[i].style.height = document.body.clientHeight - 120 + 'px';
        }
      };
    },
    methods: {
      sideNavClick(obj) {
        console.log(`${JSON.stringify(obj)}`);
        this.tabsData.forEach(function(tab) {
          tab.isActive = false;
        });
        if (obj.path) {
          for (var i = 0, l = this.tabsData.length; i < l; i++) {
            if (obj.label === this.tabsData[i].label) {
              this.tabsData[i].isActive = true;
              return;
            }
          }
          obj.isActive = true;
          this.tabsData.push(obj);
        }
      },
      btnClick(tab) {
        this.tabsData.forEach(function(elem) {
          elem.isActive = false;
        });
        tab.isActive = true;
        this.$router.push(this.base + tab.path);
      },
      closeTab(tab) {
        for (var i = 0, l = this.tabsData.length; i < l; i++) {
          if (tab.label === this.tabsData[i].label) {
            this.tabsData.splice(i, 1);
            this.$router.replace(this.base + this.tabsData[l - 2].path);
            this.tabsData[l - 2].isActive = true;
          }
        }
      }
    }
  };
</script>

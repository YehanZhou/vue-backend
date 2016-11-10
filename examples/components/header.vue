<style scoped>
  .headerWrapper {
    height: 80px;
  }
  .header {
    height: 80px;
    background-color: rgba(32, 160, 255, 1);
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: @height;
    z-index: 100;
    position: relative;

    .container {
      height: 100%;
    }

    h1 {
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: normal;

      a {
        color: #fff;
        text-decoration: none;
        display: block;
      }

      span {
        font-size: 12px;
        display: inline-block;
        width: 34px;
        height: 18px;
        border: 1px solid rgba(255, 255, 255, .5);
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 3px;
      }
    }
    .nav {
      float: right;
      height: 100%;
      line-height: 80px;
      background: transparent;
      @utils-clearfix;
      padding: 0;
      margin: 0;
    }
    .nav-item {
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      cursor: pointer;
      margin-left: 20px;
      a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 0 20px;
        opacity: .8;
        &.active,
        &:hover {
          opacity: 1;
        }
        &.active::before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background:#99d2fc;
        }
      }
    }
  }
</style>
<template>
  <div class="headerWrapper">
    <header class="header"
    ref="header"
    v-if="!isHome">
      <div class="container">
        <h1><router-link to="/">Element<span>Beta</span></router-link></h1>
        <ul class="nav">
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/guide">指南
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/table">组件
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/resource"
              exact>资源
            </router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: '',
        // isFixed: false,
        isHome: false,
        headerStyle: {}
        // hangUp: false
      };
    },
    watch: {
      '$route.path'(val) {
        this.isHome = val === '/';
      }
    },
    mounted() {
      this.isHome = this.$route.path === '/';
    }
  };
</script>

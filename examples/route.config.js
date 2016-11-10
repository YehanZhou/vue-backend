import ykConfig from './nav.config.json';
import sysConfig from './sys.config.json';
const registerRoute = (route, config) => {
  function addRoute(page) {
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.label
      },
      component: require(`./tables${page.path}.vue`)
    };
    route.children.push(child);
  }
  function getArray(arr) {
    for (var i = 0, l = arr.length; i < l; i++) {
      if ('children' in arr[i]) {
        getArray(arr[i].children);
      } else {
        addRoute(arr[i]);
      }
    }
  }
  for (var i = 0, l = config.length; i < l; i++) {
    getArray(config[i]);
  }
  return route;
};
let tableRoute = registerRoute({
  path: '/table',
  redirect: '/table/index',
  component: require('./pages/table.vue'),
  children: []
}, [ykConfig, sysConfig]);
tableRoute.children.push({
  path: 'index',
  meta: {
    title: '首页'
  },
  component: require('./tables/index.vue')
});
let indexRoute = {
  path: '/',
  name: '首页',
  component: require('./pages/index.vue')
};

let allRoute = [indexRoute, tableRoute];
allRoute.push({
  path: '*',
  component: require('./docs/zh-cn/404.md')
});
export const navs = [ykConfig, sysConfig];
export default allRoute;

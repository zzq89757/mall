import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Col,
  Row,
  Toast
} from 'vant';
import 'vant/lib/index.css';
Vue.use(Button).use(Row).use(Col).use(Toast)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  // 移动端不同屏幕适配
  ! function (win, lib) {
    var flexible = lib.flexible || (lib.flexible = {});

    function a() {
      if (parseInt(document.documentElement.clientWidth) > 720) {
        document.documentElement.style.fontSize = 720 / 7.5 + "px";
      } else {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px";
      }
    }
    var b = null;
    flexible.dpr = 1;
    flexible.rem = 100;
    flexible.rem2px = function (d) {
      var val = parseFloat(d * 75 / 100) * this.rem;
      if (typeof d === 'string' && d.match(/rem$/)) {
        val += 'px';
      }
      return val;
    }
    flexible.px2rem = function (d) {
      var val = parseFloat(d) / this.rem;
      if (typeof d === 'string' && d.match(/px$/)) {
        val += 'rem';
      }
      return val;
    }
    win.addEventListener("resize", function () {
      clearTimeout(b);
      b = setTimeout(a, 300);
    }, !1);
    a();
  }(window, window['lib'] || (window['lib'] = {}));
(function () {
  if (typeof window.WeixinJSBridge == "object" && typeof window.WeixinJSBridge.invoke == "function") {
    handleFontSize();
  } else {
    document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
  }

  function handleFontSize() {
    window.WeixinJSBridge.invoke('setFontSizeCallback', {
      'fontSize': 0
    });
    window.WeixinJSBridge.on('menu:setfont', function () {
      window.WeixinJSBridge.invoke('setFontSizeCallback', {
        'fontSize': 0
      });
    });
  }
})();
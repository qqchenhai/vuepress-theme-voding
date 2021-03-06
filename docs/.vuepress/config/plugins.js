// 插件配置
module.exports = [
  // 本地插件
  [require('../plugins/love-me'), { // 鼠标点击爱心特效
    // color: '#11a8cd', // 爱心颜色，默认随机色
    excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  }],
  // 看板娘
  ['vuepress-plugin-helper-live2d', {
    live2d: {
      // hijiki: 黑猫， tororo： 白猫， miku： 初音
      model: 'miku',
      display: {
        position: "left", // 显示位置：left/right(default: 'right')
        width: 135, // 模型的长度(default: 135)
        height: 180, // 模型的高度(default: 300)
        hOffset: 10, //  水平偏移(default: 65)
        vOffset: 50, //  垂直偏移(default: 0)
      },
      mobile: {
        show: true, // 是否在移动设备上显示(default: false)
      },
      react: {
        opacity: 0.8, // 模型透明度(default: 0.8)
      }
    }
  }],

  'vuepress-plugin-baidu-autopush', // 百度自动推送

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
        },
      ],
    },
  ],
  // 音乐组件
  [
    "music-bar",
    {
      playList: [],
      platform: [
        {
          // 目前仅支持网易云 TODO:多平台支持,默认为空数组
          name: "music.163.com",
          songIDs:[
            '1417166015',
            '191252',
            '165347',
            '1377748865',
            '1808492017',
            '1365393542',
            '1493083969',
            '1813864802',
            '1811147916',
            '1400256289',
            '28850451',
            '1335590077',
            '1426649237',
            '1435449062',
            '350909',
            '1440060692',
            '1431929338',
            '368764',
            '1431929338',
            '1412242872',
            '29816860',
            '1399920797',
            '1376861002',
            '1376867968',
            '1376861006',
            '1352831385',
            '1359559770',
            '1380834156',
            '1356350562',
            '28111646',
            '254191',
            '513360721',
            '474042450',
            '493735159',
          ], // 支持多个歌曲 ID
          playListIDs: ["2119127927"], // 支持多个歌单 ID
          timeOut: 2000, //加载超时,单位毫秒,默认2000
          firstClickPlay: true // 首次点击自动播放,对移动端友好
        }
      ]
    },
  ],
  // 点击复制
  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  // codepen示例
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  // 放大图片
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  // 百度统计
  [
    'vuepress-plugin-baidu-tongji',
    {
      hm: '503f098e7e5b3a5b5d8c5fc2938af002',
    },
  ],
  // 评论
  [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk',
      options: {
        clientID: '668959ac3e0deb6b3ca5',
        clientSecret: 'ac11d4046993d58f435da2e588f0df18eb4f4a43',
        repo: 'vuepress-theme-voding', // GitHub 仓库
        owner: 'qqchenhai', // GitHub仓库所有者
        admin: ['qqchenhai'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  // "上次更新"时间格式
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]

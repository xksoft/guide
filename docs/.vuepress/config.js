module.exports = {
    title: '侠客云开发文档',
    description: '侠客出品，必属精品',
    base:'/',
    head: [
        ['link', { rel: 'icon', href: `/icons/favicon.ico` }],
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
        // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    // markdown: {
    //   lineNumbers: true
    // },
    // theme: 'vue',
    themeConfig: {
        // displayAllHeaders: true,// 默认值：false
        // docsDir: 'docs',
        // sidebarDepth: 2,
        nav: [
            { text: '指南', link: '/guide/Start.html' },
            {
                text: '开发文档',
                items: [
                    {
                        text: 'API参考',
                        items: [
                            { text: '侠客云API', link: '/document/Api.html' },
                        ]
                    },
                    {
                        text: '其他',
                        items: [
                            { text: '模块参数配置', link: '/document/Module.html' },
                            { text: '第三方模块接口', link: '/document/Third.html' },
                            { text: 'God框架的用法', link: '/document/God.html' },
                            { text: '安卓按键对应keycode', link: '/document/Keycode.html' },
                            { text: '安卓输入法动作代码', link: '/document/Input.html' },

                        ]
                    }
                ]
            },
            {
                text: '教程',
                items: [
                    { text: '安装教程', link: '/tutorial/Install.html' },
                    { text: '发帖教程', link: '/tutorial/PostTip.html' },
                ]
            },
            { text: '侠客云官网', link: 'https://www.xky.com/' },
            { text: 'GitHub', link: 'https://github.com/XKSoft/xkydoc' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children:[
                        'Start'
                    ]
                },
                // {
                //   title: '软件开发',
                //   collapsable: false,
                //   children:[
                //   'Start'
                //   ]
                // },
            ],
            '/document/': [
                {
                    title: 'API参考',
                    collapsable: false,
                    children:[
                        'Api',
                    ]
                },
                {
                    title: '其他',
                    collapsable: false,
                    children:[
                        'Module',
                        'Third',
                        'God',
                        'Keycode',
                        'Input'
                    ]
                },
            ],
            '/tutorial/': [
                {
                    title: '教程',
                    collapsable: false,
                    children:[
                        'Install',
                        'PostTip',
                    ]
                },
            ]
        }
    }
}
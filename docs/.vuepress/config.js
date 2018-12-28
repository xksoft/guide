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
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: '侠客云开发文档',
            description: '侠客出品，必属精品'
        },
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'XiakeCloud Guid',
            description: 'Produced by the Xiake, it must be a boutique.'
        }
    },
    themeConfig: {
        // displayAllHeaders: true,// 默认值：false
        // docsDir: 'docs',
        // sidebarDepth: 2,
        editLinks: true,
        locales: {
            '/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: '指南', link: '/guide/Start.html' },
                    {
                        text: '开发文档',
                        items: [
                            {
                                text: 'API参考',
                                items: [
                                    { text: '模块API', link: '/api/ModuleApi.html' },
                                    { text: '客户端API', link: '/api/ClientApi.html' },
                                ]
                            },
                            {
                                text: '其他',
                                items: [
                                    { text: '模块参数配置', link: '/api/Module.html' },
                                    { text: '第三方模块接口', link: '/api/Third.html' },
                                    { text: 'God框架的用法', link: '/api/God.html' },
                                    { text: '安卓按键对应keycode', link: '/api/Keycode.html' },
                                    { text: '安卓输入法动作代码', link: '/api/Input.html' },

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
                    { text: 'GitHub', link: 'https://github.com/xksoft/guide' },
                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: '指南',
                            collapsable: false,
                            children:[
                                'Start'
                            ]
                        }
                    ],
                    '/api/': [
                        {
                            title: 'API参考',
                            collapsable: false,
                            children:[
                                'ModuleApi',
                                'ClientApi'

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
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: 'Guide', link: '/en/guide/Start.html' },
                    {
                        text: 'Development',
                        items: [
                            {
                                text: 'API',
                                items: [
                                    { text: 'Module API ', link: '/en/api/ModuleApi.html' },
                                    { text: 'Client API', link: '/en/api/ClientApi.html' },
                                ]
                            },
                            {
                                text: 'More',
                                items: [
                                    { text: 'Module Parameter Configuration', link: '/en/api/Module.html' },
                                    { text: 'Calling A Third-Party Interface', link: '/en/api/Third.html' },
                                    { text: 'God Framework Usage', link: '/en/api/God.html' },
                                    { text: 'Android KEYCODE', link: '/en/api/Keycode.html' },
                                    { text: 'Android Input Code', link: '/en/api/Input.html' },

                                ]
                            }
                        ]
                    },
                    {
                        text: 'Learn More',
                        items: [
                            { text: 'Installation Tutorial', link: '/en/tutorial/Install.html' },
                            { text: 'Posting Tutorial', link: '/en/tutorial/PostTip.html' },
                        ]
                    },
                    { text: 'Official Website', link: 'https://www.xky.com/' },
                    { text: 'GitHub', link: 'https://github.com/xksoft/guide' },
                ],
                sidebar: {
                    '/en/guide/': [
                        {
                            title: 'Guide',
                            collapsable: false,
                            children:[
                                'Start'
                            ]
                        }
                    ],
                    '/en/api/': [
                        {
                            title: 'API',
                            collapsable: false,
                            children:[
                                'ModuleApi',
                                'ClientApi'
                            ]
                        },
                        {
                            title: 'More',
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
                    '/en/tutorial/': [
                        {
                            title: 'Learn More',
                            collapsable: false,
                            children:[
                                'Install',
                                'PostTip',
                            ]
                        },
                    ]
                }
            },
        }
    }
}
export default {
    // 快捷键
    // 支持快捷键 例如 ctrl+shift+s
    hotkey: {
        search: {
            open: 's',
            close: 'esc'
        }
    },
    // 侧边栏默认折叠状态
    menu: {
        asideCollapse: false
    },
    // 在读取持久化数据失败时默认页面
    page: {
        opened: [
            {
                name: 'index',
                fullPath: '/index',
                meta: {
                    title: '首页',
                    auth: false
                }
            }
        ]
    },
    // 菜单搜索
    search: {
        enable: false
    },
    // 注册的主题
    theme: {
        list: [
            {
                title: 'd2admin 经典',
                name: 'd2',
                preview: 'image/theme/d2/preview@2x.png'
            },
            {
                title: '简约线条',
                name: 'line',
                backgroundImage: 'image/theme/line/bg.jpg',
                preview: 'image/theme/line/preview@2x.png'
            },
            {
                title: '流星',
                name: 'star',
                backgroundImage: 'image/theme/star/bg.jpg',
                preview: 'image/theme/star/preview@2x.png'
            }
        ]
    },
    // 是否默认开启页面切换动画
    transition: {
        active: true
    }
}

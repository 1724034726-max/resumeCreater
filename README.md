技术栈:react18 + typescript + antd + react-router-dom + axios + less + eslint + prettier

项目功能:
1. 登录
2. 首页简历列表
3. 简历编辑
注意：
简历编辑时，简历数据存于redux，通过home大组件获得redux数据后按需props传递给子组件
以减少不必要的子组件重新运行，提高性能。子组件修改时，通过导入context的各个修改函数进行修改
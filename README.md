# react-slider
a plug-in unit of react as an carousel component.
一个React.js 的轮播组件，可以直接使用，支持配置
# 本地 demo（使用 webpack 来管理的依赖）
```
npm install -d
// 启动本地服务器
npm run server
// 开发环境打包依赖 ， 生产环境是 npm run dist
npm run build
```
Open up http://localhost:3000/ in your browser.
在浏览器打开 http://localhost:3000/。
打包的文件在 ``dist`` 下面。
# 配置
```
React.render(
  <Slider
    items={[
      {
        src: require('./images/demo1.jpg'),
        alt: 'images-1',
      },
      {
        src: require('./images/demo2.jpg'),
        alt: 'images-2',
      },
      {
        src: require('./images/demo3.jpg'),
        alt: 'images-3',
      },   #图片数组，有几张图片放几张
    ]}
    speed={1.5}       #轮播切换图片的速度
    delay={3}         #自动轮播时候停留的时间
    pause={true}      #鼠标放上图片是否停止自动轮播
    autoplay={true}   #是否自动轮播
    dots={true}       #是否需要下面的轮播点点位
    arrows={true}     #是否需要左右点击箭头
  />,
  document.getElementById("slider")
);
```

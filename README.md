# Slider-React
a plug-in unit of react as an carousel component.
# 一个React.js 的轮播组件，可以直接使用，支持配置
```
React.render(
    <Slider
        src={[
            "dist/images/demo1.jpg",  
            "dist/images/demo2.jpg",
            "dist/images/demo3.jpg",
            "dist/images/demo4.jpg"   #图片数组，有几张图片放几张
        ]}
        speed={1.5}       #轮播切换图片的速度
        delay={3}         #自动轮播时候停留的时间
        pause={true}      #鼠标放上图片是否停止自动轮播
        autoplay={true}   #是否自动轮播
        dots={true}       #是否需要下面的轮播点点位
        arrows={true}     #是否需要左右点击箭头
    /> ,
    document.getElementById("slider")
);
```

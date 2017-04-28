//加载 express 模块
var express=require('express')
var path=require('path')
//设置端口
var port=process.env.port || 3000
//实例服务
var app=express()

//设置视图
app.set('views','./views/pages')

//设置模板引擎
app.set('view engine','jade')

//-app.use(express.bodyParser())

app.use(express.static(path.join(__dirname,'bower_components')))

app.listen(port)//监听端口

console.log('movieproject start in port '+port)



//router设置

//index page
app.get('/',function(req,res){
    res.render('index',{
        title:'movie首页',
        movies:[{
            title:'拆弹专家2017',
            _id:1,
            poster:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2454868217.webp'
        },{
            title:'记忆大师2017',
            _id:2,
            poster:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2455156816.webp'
        },{
            title:'午夜惊魂2017',
            _id:3,
            poster:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2455927078.webp'
        }]
    })
})

//detail page
app.get('/movie/:id',function(req,res){
    res.render('detail',{
        title:'movie 详情页'
    })
})

// page
app.get('/admin',function(req,res){
    res.render('admin',{
        title:'movie后台录入页'
    })
})

//list page
app.get('/list',function(req,res){
    res.render('list',{
        title:'movie列表页',
        movies:[{
            _id:1,
            title:'速度与激情8',
            doctor:'vxxx.baoluo',
            country:'美国',
            year:2016/06/09
        }]
    })
})

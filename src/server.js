const express =require('express')
const app=express()
const hbs=require('hbs')
const path =require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const index_path=path.join(__dirname,'../public')
const views_path=path.join(__dirname,'/templates/views')
const partial_path=path.join(__dirname,'/templates/partials')

app.set('view engine', 'hbs')
app.set('views', views_path)
hbs.registerPartials(partial_path)

 app.use(express.static(index_path))




  app.get('',(req,res)=>{
     res.render('index', {
        title: 'index',
        name: 'Andrew Mead'
    })
 })
  app.get('/about',(req,res)=>{
     res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
 })
 app.get('/help',(req,res)=>{
     res.send('help')
 })
 app.get('/weather',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'error'
        })
    }
    geocode(req.query.search,(error,{latitude,longitude,place_name}={})=>{
        if(error){
            return res.send('error')
        }
     
        forecast(encodeURIComponent(longitude)+',' + encodeURIComponent(latitude),(error,forecastdata)=>{
            return res.send({
                place_name:place_name,
                forecastdata:forecastdata
            })
           
        
        })
        
    
    })
    


 })
 app.get('*',(req,res)=>{
     res.render('404',{
        title:'404',
        name:'andrew',
        errormessage:'page not found'
     })

 })
 app.listen(3000,()=>{
     console.log('server started')
 })
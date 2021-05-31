const request=require('request')
const forecast=(coordinates,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=a3c72d89db0f0aa7d09ea662043197a4&query='+coordinates    
    // const url='http://api.weatherstack.com/current?access_key=a3c72d89db0f0aa7d09ea662043197a4&query=12.819125187363834,%2079.69470148314568'

    request({url:url,json:true},(error,{body})=>{

        if(error){
            
            callback('unable to connect',undefined)
        }
        else if(body.error){
            
            callback('no match foundt',undefined)
        }
        else{
            callback(undefined," current temperature is " +body.current.temperature)
            
    }
       
    })
}
module.exports=forecast
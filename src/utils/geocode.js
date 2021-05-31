const request=require('request')
const geocode= (adress,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ adress +'.json?access_token=pk.eyJ1IjoiZ29rdWwtdGhlLTEiLCJhIjoiY2twNWtvajRwMHZxZzJxcjJ3amZ3eXoyNSJ9.VX9vr_6wwslX1KfI-yXAMg&limit=1'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect',undefined)
            
        }
        else if(body.features.length === 0){
            callback('no match found',undefined)
            
            
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[0],
                longitude: body.features[0].center[1],
                place_name: body.features[0].place_name
            })
           
        }
    })

}

module.exports=geocode

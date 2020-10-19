const request=require('request');

const geocode=(address,callback)=>{
    const url='**************************Your url with access token*************************';

    request({url,json:true},(error,{body})=>{
        if(error){
            callback("Unable to connect network!",undefined);
        }
        else if(body.features.length==0){
            callback("Unable to find location!",undefined);
        }
        else{
            callback(undefined,{
                longitude:body.features[0].center[0],
                latitude:body.features[0].center[1],
                location:body.features[0].place_name
            });
        }
    });
};

module.exports=geocode;

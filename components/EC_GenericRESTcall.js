'use strict';
 /*
  created by radu.marinache@oracle.com  ==> 2021 - CX Apps Tech Team
*/

module.exports = {
  metadata: () => ({
    name: 'EC_GenericRESTcall',
    properties: {
      var_username: { required: true, type: 'string' },
      var_password: { required: true, type: 'string' },
      var_ecdomain: { required: true, type: 'string' },
      var_operation: { required: true, type: 'string' },
      var_contentType: { required: true, type: 'string' },
      var_payload: { required: false, type: 'string' },
      var_FieldsToExtract: { required: false, type: 'string' },
      var_KAcontentEndpoint: { required: false, type: 'string' },
      var_ODAchannel: { required: false, type: 'string' },

    },
    supportedActions: []
  }),
  invoke: (context, done) => {

    const { var_username } = context.properties();
    const { var_password } = context.properties();
    const { var_ecdomain } = context.properties();
    const { var_operation } = context.properties();
    const { var_contentType } = context.properties();
    const { var_payload } = context.properties();
    const { var_FieldsToExtract } = context.properties();
    const { var_KAcontentEndpoint } = context.properties();
    const { var_ODAchannel } = context.properties();

    var credentials = 'Basic ' + encodeBase64(var_username + ':' + var_password);
    var request = require('request');

    let htmlTagOpen = var_ODAchannel == 'web'? "<b>" : "";
    let htmlTagClosed = var_ODAchannel == 'web' ? "</b>" : "";

    switch(var_operation){

      case "GET" :
        let optionsGet = {
            'method': var_operation,
            'url': var_ecdomain,
            gzip: true,
            'headers': {
                'Authorization': credentials,
                'Content-Type': var_contentType
            },
        };

        request(optionsGet, function(error, response, body) {
          if (error) {
              context.logger().info("ERROR");
              context.logger().info(error);
          }

          let res = JSON.parse(body.toString());
          let myFields = var_FieldsToExtract.split(",");
          let extractinfo = "";

     


          if(res.hasOwnProperty("items")){
            for(let i= 0; i< res.count; i++){
              extractinfo+= "\n";
              for(let x = 0; x<myFields.length; x++){

                let arrayElemnt  = myFields[x];
                let field = arrayElemnt.substr(0,arrayElemnt.indexOf("-"));
                let meaning = arrayElemnt.substr(arrayElemnt.indexOf("-")+1,arrayElemnt.length-1);  

                if(x != myFields.length -1 ){
                extractinfo += htmlTagOpen +meaning + htmlTagClosed + ": " + res.items[i][field] + "\n";
                }else{
                  extractinfo += htmlTagOpen +meaning + htmlTagClosed  + ": " + res.items[i][field]+ "\n";
    
                }
              }             

            }



          }else{
            for(let x = 0; x<myFields.length; x++){

              let arrayElemnt  = myFields[x];
              let field = arrayElemnt.substr(0,arrayElemnt.indexOf("-"));
              let meaning = arrayElemnt.substr(arrayElemnt.indexOf("-")+1,arrayElemnt.length-1);

              if(x != myFields.length -1 ){
              extractinfo += htmlTagOpen +meaning + htmlTagClosed  + ": " + res[field] + "\n";
              }else{
                extractinfo += htmlTagOpen +meaning + htmlTagClosed  + ": " + res[field]+ "\n";
  
              }
            }  
          }




          context
          .setVariable("user.payload", extractinfo)
          .transition()
          .keepTurn(true);         
           
           
          done();  

      });

        break;

      case "POST" :

        let myPayloadCreate = JSON.parse(var_payload);
        let optionsCreate = {
            'method': var_operation,
            'url': var_ecdomain,
             gzip: true,
            'headers': {
                'Authorization': credentials,
                'Content-Type': var_contentType
            },
            body: JSON.stringify(myPayloadCreate)           
        };

        request(optionsCreate, function(error, response, body) {
          if (error) {
              context.logger().info("ERROR");
              context.logger().info(error);
          }

          let res = body;
          let JsonResponse = JSON.parse(res.toString());
         
         let extractinfo = "";
         let myFields = var_FieldsToExtract.split(",");
          context.logger().info(myFields.length);
          for(let x = 0; x<myFields.length; x++){
            let arrayElemnt  = myFields[x];
            let field = arrayElemnt.substr(0,arrayElemnt.indexOf("-"));
            let meaning = arrayElemnt.substr(arrayElemnt.indexOf("-")+1,arrayElemnt.length-1);

            if(x != myFields.length -1 ){
            extractinfo += htmlTagOpen +meaning + htmlTagClosed  + ": " + JsonResponse[field] + "\n";
            }else{
              extractinfo += htmlTagOpen +meaning + htmlTagClosed  + ": " + JsonResponse[field]+ "\n";

            }
          }
        
        
       
          context
          .setVariable("user.payload", extractinfo)
          .transition()
          .keepTurn(true);         
           
           
          done();  

      });
       
        break;

      case "PATCH" :
        let myPayloadUpdate = JSON.parse(var_payload);
        let optionsUpdate = {
          'method': var_operation,
          'url': var_ecdomain,
          'headers': {
              'Authorization': credentials,
              'Content-Type': var_contentType
          },
          body: JSON.stringify(myPayloadUpdate)
      };

      request(optionsUpdate, function(error, response, body) {
        if (error) {
            context.logger().info("ERROR");
            context.logger().info(error);
        }

        let res = body;
        let JsonResponse = JSON.parse(res.toString());

       
       let extractinfo = "";
       let myFields = var_FieldsToExtract.split(",");
        context.logger().info(myFields.length);
        for(let x = 0; x<myFields.length; x++){
          let arrayElemnt  = myFields[x];
          let field = arrayElemnt.substr(0,arrayElemnt.indexOf("-"));
          let meaning = arrayElemnt.substr(arrayElemnt.indexOf("-")+1,arrayElemnt.length-1);

          if(x != myFields.length -1 ){
          extractinfo += htmlTagOpen +meaning + htmlTagClosed  + ": " + JsonResponse[field] + "\n";
          }else{
            extractinfo += htmlTagOpen +meaning + htmlTagClosed  + ": " + JsonResponse[field] + "\n";

          }
        }
        
        context
        .setVariable("user.payload", extractinfo)
        .transition()
        .keepTurn(true);         
         
         
        done();  

    });

        break;

        case "KA" :
          let myPayloadAsk = JSON.parse(var_payload);
          
          let optionsSearchQuestion = {
              'method': "POST",
              'url': var_ecdomain,
               gzip: true,
              'headers': {
                  'Authorization': credentials,
                  'Content-Type': var_contentType
              },
              body: JSON.stringify(myPayloadAsk)           
          };
  
          request(optionsSearchQuestion, function(error, response, body) {
            if (error) {
                context.logger().info("ERROR");
                context.logger().info(error);
            }
  
            let res = body;
            let str = res.toString();

            let answerID = str.substring(str.indexOf("<globalAnswerId>") + "<globalAnswerId>".length,str.indexOf("</globalAnswerId>"));
            context.logger().info(answerID);

            let kaEndpoint = var_KAcontentEndpoint +   answerID

            let optionsKAcontent = {
              'method': "GET",
              'url': kaEndpoint,
               gzip: true,
              'headers': {
                  'Authorization': credentials,
                  'Content-Type': var_contentType
              },
        
          };

          request(optionsKAcontent, function(error, response, body) {
            if (error) {
                context.logger().info("ERROR");
                context.logger().info(error);
            }

            let res = body;
            let srtAnswer = res.toString();
            let myAnswer = srtAnswer.substring(srtAnswer.indexOf("<ANSWER>") + "<ANSWER>".length,srtAnswer.indexOf("</ANSWER>"));
            let finalanswer = myAnswer.substring(0,myAnswer.indexOf("]]>"));


            context
            .setVariable("user.payload", finalanswer)
            .transition()
            .keepTurn(true);         
             
             
            done();  

          })



      

  
        });
         



        break


    }



  }
};





function encodeBase64(stringHere) {
  var buff = new Buffer(stringHere);
  var base64data = buff.toString('base64');
  return base64data
}

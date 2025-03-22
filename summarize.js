const axios = require('axios');
async function summarizeText(text) {
  //code
    
    let data = JSON.stringify({
      "inputs": text,
      "parameters": {
        "max_length": 100,
        "min_length": 30
      }
    });
  console.log(process.env['ACCESS_TOKEN'])

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' +process.env['ACCESS_TOKEN']
      },
      data : data
    };

    
      try {
        const response = await axios.request(config); //api caalling, await executes
        return response.data[0].summary_text;
      }
      catch (error) {
        console.log(error);
      }
    }

    


    
module.exports = summarizeText;
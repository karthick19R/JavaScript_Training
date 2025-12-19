const fs =require('fs').promises

async function readfile(){

    try{
        let data = await fs.readFile('sample.json','utf-8');
        let jdata = JSON.parse(data);
        console.log(jdata);
    }catch{

    }
}

readfile()
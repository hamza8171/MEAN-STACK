

const crypto=require('crypto')
  
  
  const cryp= crypto.randomBytes(256).toString('hex');
  

 

module.exports={ 
    uri: 'mongodb://localhost:27017/'+this.db,
        secret: cryp,
db: 'MEAN-APP-DB'
}




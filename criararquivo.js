var fs = require('fs');

fs.appendFile('novoarquivo.txt', 'Arquivo criado com sucesso!', function (err){
    if(err) throw err;
    console.log('Arquivo Criado...');
});
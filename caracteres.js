const fs = require('fs');

const os = require ('os');

const compu = `host : $ {os.hostname()}

plataForma : ${os.platform()}
procesador : ${os.cpus()[0].model}
arquitectura : ${os.arch()}
MemoriaEnBits : ${os.totalmem()} bytes`;

fs.writeFileSync('./data/holaa.txt',compu);

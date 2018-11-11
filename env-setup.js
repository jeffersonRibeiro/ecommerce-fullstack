import fs from 'fs';

fs.createReadStream('.env-sample')
  .pipe(fs.createWriteStream('.env'));
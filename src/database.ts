import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

// Para usar esta función isntalar una versón anterior de promise-mysql // npm i promise-mysql@3.3.1
pool.getConnection()
.then(connection => {
	pool.releaseConnection(connection);
	console.log('Eicom MySQL conectada');
});


export default pool;
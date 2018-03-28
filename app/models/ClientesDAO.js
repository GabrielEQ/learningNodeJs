function ClientesDAO(connection){
    this._connection = connection;
}

ClientesDAO.prototype.getClientes = function(callback){
    this._connection.query('SELECT * FROM tdt_clientes_pf ORDER BY data_cadastro desc LIMIT 10', callback);
}

ClientesDAO.prototype.getCliente = function(id_cliente, callback){
    console.log(id_cliente.id_cliente);
    
    this._connection.query('SELECT * FROM tdt_clientes_pf WHERE id_cliente = ' + id_cliente.id_cliente, callback)
}

ClientesDAO.prototype.salvarCliente = function(cliente, callback){
    this._connection.query('INSERT INTO tdt_clientes_pf SET ? ', cliente, callback);
}

// ClientesDAO.prototype.get5Ultimasclientes = function(callback){
//     this._connection.query('SELECT * FROM tdt_cliente_pf ORDER BY data_cadastro desc LIMIT 5', callback);
// }

module.exports = function(){
    return ClientesDAO;
}
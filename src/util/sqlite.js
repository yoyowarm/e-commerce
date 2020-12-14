export default {
    db: null,
    init() {
        if(window.sqlitePlugin){
            this.openDatabase();
            this.setupSchema();
        }
    },
    openDatabase() {
        this.db = window.sqlitePlugin.openDatabase({
            name: 'sqlite.db',
            location: 'default',
            androidDatabaseProvider: 'system'
        });
    },
    setupSchema() {
        this.db.transaction(function(tx) {
            tx.executeSql('create table if not exists offline_data (action text, json text)');
            tx.executeSql('create table if not exists upload_data (id INTEGER NOT NULL PRIMARY KEY, action text, json text)');
            tx.executeSql('create table if not exists version (version text, createdAt datetime)');
            tx.executeSql('create table if not exists admin (id int, name text, twoPassword text)');
        }, function(error) { // error;
            // eslint-disable-next-line no-console
            console.log('Create Transaction ERROR: ' + error.message);
        }, function() {
            // eslint-disable-next-line no-console
            console.log('Populated database OK');
        });
    },
    executeSql(sql, paramArray){
        if(!window.sqlitePlugin) return;
        
        this.db.transaction(function(tx) {
            // eslint-disable-next-line no-console
            console.log(sql);
            // eslint-disable-next-line no-console
            console.log(paramArray);
            tx.executeSql(sql, paramArray);
        }, function(error) { // error;
            // eslint-disable-next-line no-console
            console.log('Transaction ERROR: ' + error.message);
        }, function() {
            // eslint-disable-next-line no-console
            console.log('Populated database OK');
        });
    },
    transaction(sqlArray, paramArray){
        if(!window.sqlitePlugin) return;

        this.db.transaction(function(tx) {
            sqlArray.forEach((sql, index) => {
                tx.executeSql(sql, paramArray[index]);
            });
        }, function(error) { // error;
            // eslint-disable-next-line no-console
            console.log('Transaction ERROR: ' + error.message);
        }, function() {
            // eslint-disable-next-line no-console
            console.log('Populated database OK');
        });
    },
    update(sql, paramArray) {
        this.executeSql(sql, paramArray);
    },
    insert(sql, paramArray) {
        this.executeSql(sql, paramArray);
    },
    delete(sql, paramArray) {
        this.executeSql(sql, paramArray);
    },
    query(sql, paramArray, funcResult) {
        if(!window.sqlitePlugin) return;

        this.db.readTransaction(function(tx) {
            tx.executeSql(sql, paramArray, function(tx, resultSet) {
                //  讀取資料的方法，var obj1 = resultSet.rows.item(0).json
                funcResult(resultSet);
            }, function(tx, error) { // tx, error;
                // eslint-disable-next-line no-console
                console.log('SELECT error: ' + error.message);
            });
        }, function(error) { // error;
            // eslint-disable-next-line no-console
            console.log('query transaction error: ' + error.message);
        }, function() {
            // eslint-disable-next-line no-console
            console.log('query transaction ok');
        });
    },
}
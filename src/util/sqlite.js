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
        let self = this;
        this.db.transaction(function(tx) {
            tx.executeSql('create table if not exists offline_data (action text, json text)');
            tx.executeSql('create table if not exists upload_data (id INTEGER NOT NULL PRIMARY KEY, action text, json text)');
            tx.executeSql('create table if not exists version (version text, createdAt datetime)');
        }, function(error) { // error;
            // eslint-disable-next-line no-console
            console.log('Create Transaction ERROR: ' + error.message);
            self.db.close();
        }, function() {
            // eslint-disable-next-line no-console
            console.log('Populated database OK');
            self.db.close();
        });
    },
    executeSql(sql, paramArray){
        if(!window.sqlitePlugin) return;
        // this.openDatabase();
        let db = window.sqlitePlugin.openDatabase({
            name: 'sqlite.db',
            location: 'default',
            androidDatabaseProvider: 'system'
        });

        db.transaction(function(tx) {
            // eslint-disable-next-line no-console
            console.log(sql);
            // eslint-disable-next-line no-console
            console.log(paramArray);
            tx.executeSql(sql, paramArray);
        }, function(error) { // error;
            // eslint-disable-next-line no-console
            console.log('Transaction ERROR: ' + error.message);
            db.close();
        }, function() {
            // eslint-disable-next-line no-console
            console.log('Populated database OK');
            db.close();
        });
    },
    transaction(sqlArray, paramArray){
        if(!window.sqlitePlugin) return;
        
        let db = window.sqlitePlugin.openDatabase({
            name: 'sqlite.db',
            location: 'default',
            androidDatabaseProvider: 'system'
        });

        db.transaction(function(tx) {
            sqlArray.forEach((sql, index) => {
                tx.executeSql(sql, paramArray[index]);
            });
        }, function(error) { // error;
            // eslint-disable-next-line no-console
            console.log('Transaction ERROR: ' + error.message);
            db.close();
        }, function() {
            // eslint-disable-next-line no-console
            console.log('Populated database OK');
            db.close();
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
    query(funcReadTransaction) {
        if(!window.sqlitePlugin) return;
        // this.openDatabase();
        let db = window.sqlitePlugin.openDatabase({
            name: 'sqlite.db',
            location: 'default',
            androidDatabaseProvider: 'system'
        });

        db.readTransaction(function(tx) {
            funcReadTransaction(tx);
        }, function(error) { // error;
            // eslint-disable-next-line no-console
            console.log('transaction error: ' + error.message);
            db.close();
        }, function() {
            // eslint-disable-next-line no-console
            console.log('transaction ok');
            db.close();
        });
    }
}
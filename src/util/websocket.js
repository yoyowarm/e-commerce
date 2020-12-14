//     this.$socket.setSToken(s).setUToken(u).instance`QueryWaiting${e => {
//         let data = JSON.parse(e.data);
//         this.waitingCount = data.waitingCount;
//         this.tableArray = data.data;
//         this.$socket.send("");
//     }}${() => {
//         // console.log("onopen");
//     }}${() => {
//         this.$socket.close();
//         this.setupWebSocket();
//         // console.log("onerror");
//     }}${() => {
//         this.setupWebSocket();
//         // console.log("onclose");
//     }}`;
export default {
    sToken: '',
    uToken: '',
    token: '',
    socket: {},
    instance: function () {
        this.conn('', Array.prototype.slice.call(arguments));
    },
    setSToken: function (t) {
        this.sToken = t;
        return this;
    },
    setUToken: function (t) {
        this.uToken = t;
        return this;
    },
    setToken: function (t) {
        this.token = t;
        return this;
    },
    conn: function (authPath, args) {
        const action = args[0][0];
        let url = process.env.VUE_APP_WS_HOST + authPath + '/' + action + '?' +
            '&s=' + encodeURIComponent(this.sToken) +
            '&u=' + encodeURIComponent(this.uToken) +
            '&token=' + encodeURIComponent(this.token);

        this.socket = new WebSocket(url);
        if (args.length >= 2) {
            this.socket.onmessage = args[1];
        }

        if (args.length >= 3) {
            this.socket.onopen = args[2];
        }

        if (args.length >= 4) {
            this.socket.onerror = args[3];
        }

        if (args.length === 5) {
            this.socket.onclose = args[4];
        }
    },
    send: function (data) {
        this.socket.send(data);
    },
    close: function () {
        this.socket.close();
    }
}
const {
    JSONRPC,
    JSONRPCClient,
    JSONRPCRequest,
    JSONRPCResponse,
} = require("json-rpc-2.0");
  const send = () => {};
let nextID = 0;
const createID = () => nextID++;

const client = new JSONRPCClient(send, createID);

// connectionClientServer
// --> {"jsonrpc": "2.0", "method": "connectionClientServer", "params": {"address": “”, "port": 5000}, "id": 1}
client
.requestAdvanced({
    jsonrpc: JSONRPC,
    id: createID(),
    method: "connectionClientServer",
    params: {
        address: "127.0.0.1",
        port: 5000,
    },
})
.then((jsonRPCResponse) => {
    if (jsonRPCResponse.error) {
    console.log(
        `Error ${jsonRPCResponse.error.code} : ${jsonRPCResponse.error.message}`
    );
    } else {
        connectionClientServerWithResult(jsonRPCResponse.result);
    }
});

// sendIndexPlayer
// --> {"jsonrpc": "2.0", "method": "sendIndexPlayer", "params": {"indexPlayer": 2}, "id": 2}
client
.requestAdvanced({
    jsonrpc: JSONRPC,
    id: id,
    method: "sendIndexPlayer",
    params: {
        indexPlayer: 2,
    },
})
.then((jsonRPCResponse) => {
    if (jsonRPCResponse.error) {
    console.log(
        `Error ${jsonRPCResponse.error.code} : ${jsonRPCResponse.error.message}`
    );
    } else {
        sendIndexPlayerWithResult(jsonRPCResponse.result);
    }
});


// sendChoice
// --> {"jsonrpc": "2.0", "method": "sendChoice", "params": {"choice": “”}, "id": 3}
client
.requestAdvanced({
    jsonrpc: JSONRPC,
    id: id,
    method: "sendChoice",
    params: {
        choice: "",
    },
})
.then((jsonRPCResponse) => {
    if (jsonRPCResponse.error) {
    console.log(
        `Error ${jsonRPCResponse.error.code} : ${jsonRPCResponse.error.message}`
    );
    } else {
        sendChoiceWithResult(jsonRPCResponse.result);
    }
});


// waitingAllPlayersResponses
// --> {"jsonrpc": "2.0", "method": "waitingAllPlayersResponses", "params": {"address": "", "port": 5000}, "id": 1}
client
.requestAdvanced({
    jsonrpc: JSONRPC,
    id: id,
    method: "waitingAllPlayersResponses",
    params: {
        address: "127.0.0.1",
        port: 5000,
    },
})
.then((jsonRPCResponse) => {
    if (jsonRPCResponse.error) {
    console.log(
        `Error ${jsonRPCResponse.error.code} : ${jsonRPCResponse.error.message}`
    );
    } else {
        waitingAllPlayersResponsesWithResult(jsonRPCResponse.result);
    }
});


// getResult
// --> {"jsonrpc": "2.0", "method": "getResult", "params": {"ClientNumber": 2, "id": 2}
client
.requestAdvanced({
    jsonrpc: JSONRPC,
    id: id,
    method: "getResult",
    params: {
        ClientNumber: id,
    },
})
.then((jsonRPCResponse) => {
    if (jsonRPCResponse.error) {
    console.log(
        `Error ${jsonRPCResponse.error.code} : ${jsonRPCResponse.error.message}`
    );
    } else {
        getResultWithResult(jsonRPCResponse.result);
    }
});

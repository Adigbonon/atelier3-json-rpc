const { JSONRPC, JSONRPCResponse, JSONRPCServer } = require("json-rpc-2.0");

const server = new JSONRPCServer();


// waitingAllPlayersResponses
// <-- {"jsonrpc": "2.0", "result":"OK", "id": 1}
// <-- {"jsonrpc": "2.0", "error": {"code": -32500, "message": "Erreur serveur"}, "id": 1}

server.addMethodAdvanced(
    "waitingAllPlayersResponses",
    (jsonRPCRequest) => {
      if (isValid(jsonRPCRequest.params)) {
        return {
          jsonrpc: JSONRPC,
          id: jsonRPCRequest.id,
          result: "OK",
        };
      } else {
        return {
          jsonrpc: JSONRPC,
          id: jsonRPCRequest.id,
          error: {
            code: -32500,
            message: "Erreur serveur",
            data: jsonRPCRequest.params,
          },
        };
      }
    }
  );

// getResult
// <-- {"jsonrpc": "2.0", "result":["Le joueur "+ ClientNumber +", vous avez gagné."], "id": 2}
// <-- {"jsonrpc": "2.0", "error": {"code": -32500, "message": "Erreur serveur"}, "id": 2}

server.addMethodAdvanced(
    "getResult",
    (jsonRPCRequest) => {
      if (isValid(jsonRPCRequest.params)) {
        return {
          jsonrpc: JSONRPC,
          id: jsonRPCRequest.id,
          result: [`Le joueur ${ClientNumber} , vous avez gagné.`],
        };
      } else {
        return {
          jsonrpc: JSONRPC,
          id: jsonRPCRequest.id,
          error: {
            code: -32500,
            message: "Erreur serveur",
            data: jsonRPCRequest.params,
          },
        };
      }
    }
  );
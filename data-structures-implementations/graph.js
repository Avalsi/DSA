"use strict";
// class Graph {
//   public adList: Map<number, number[]>;
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor() {
//     this.adList = new Map<number, number[]>();
//   }
//   addVertex(name: number) {
//     if (!this.adList.has(name)) this.adList.set(name, []);
//   }
//   //graph is undirected, if need to implement directed graph, push only v2 to v1
//   addEdge(vertex1: number, vertex2: number) {
//     if (!this.adList.has(vertex1)) this.adList.set(vertex1, []);
//     if (!this.adList.has(vertex2)) this.adList.set(vertex2, []);
//     this.adList.get(vertex1).push(vertex2);
//     this.adList.get(vertex2).push(vertex1);
//   }
//   removeEdge(vertex1: number, vertex2: number) {
//     const adjacencyList1 = this.adList.get(vertex1);
//     const adjacencyList2 = this.adList.get(vertex2);
//     adjacencyList1 &&
//       this.adList.set(
//         vertex1,
//         adjacencyList1.filter((x) => x !== vertex2)
//       );
//     adjacencyList2 &&
//       this.adList.set(
//         vertex2,
//         adjacencyList2.filter((x) => x !== vertex1)
//       );
//   }
//   removeVertex(name: number) {
//     this.adList.has(name) && this.adList.delete(name);
//     for (let key of this.adList.keys()) {
//       let adjacencyList = this.adList.get(key);
//         this.adList.set(
//           key,
//           adjacencyList.filter((neighbor) => neighbor !== name)
//         );
//     }
//   }
// }
var Graph = /** @class */ (function () {
    function Graph() {
        this.adList = new Map();
    }
    Graph.prototype.addVertex = function (name) {
        if (!this.adList.has(name))
            this.adList.set(name, []);
    };
    //graph is undirected, if need to implement directed graph, push only v2 to v1
    Graph.prototype.addEdge = function (vertex1, vertex2) {
        if (!this.adList.has(vertex1))
            this.adList.set(vertex1, []);
        if (!this.adList.has(vertex2))
            this.adList.set(vertex2, []);
        this.adList.get(vertex1).push(vertex2);
        this.adList.get(vertex2).push(vertex1);
    };
    Graph.prototype.removeEdge = function (vertex1, vertex2) {
        var adjacencyList1 = this.adList.get(vertex1);
        var adjacencyList2 = this.adList.get(vertex2);
        adjacencyList1 &&
            this.adList.set(vertex1, adjacencyList1.filter(function (x) { return x !== vertex2; }));
        adjacencyList2 &&
            this.adList.set(vertex2, adjacencyList2.filter(function (x) { return x !== vertex1; }));
    };
    Graph.prototype.removeVertex = function (name) {
        var e_1, _a;
        this.adList.has(name) && this.adList.delete(name);
        try {
            for (var _b = __values(this.adList.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var adjacencyList = this.adList.get(key);
                this.adList.set(key, adjacencyList.filter(function (neighbor) { return neighbor !== name; }));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Graph.prototype.DFSrecursive = function (vertex) {
        var _this = this;
        //create list to store result
        var result = [];
        //create list to store visited
        var visited = new Map();
        //create a helper function that accepts vertex
        var DFS = function (vertex) {
            var e_2, _a;
            //return if vertex is null
            if (vertex == null) {
                return;
            }
            //mark as visited
            if (!visited.has(vertex)) {
                visited.set(vertex, true);
            }
            //push in result
            result.push(vertex);
            //loop over adjacency list values
            var neighbors = _this.adList.get(vertex);
            try {
                for (var neighbors_1 = __values(neighbors), neighbors_1_1 = neighbors_1.next(); !neighbors_1_1.done; neighbors_1_1 = neighbors_1.next()) {
                    var neighbor = neighbors_1_1.value;
                    //recursively call helper funciton over neighbours
                    if (!visited.has(neighbor)) {
                        DFS(neighbor);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (neighbors_1_1 && !neighbors_1_1.done && (_a = neighbors_1.return)) _a.call(neighbors_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        //call helper function
        DFS(vertex);
        //return result
        return result;
    };
    Graph.prototype.DFSiterative = function (vertex) {
        var e_3, _a;
        //create stack to use track of vertices
        var stack = [];
        //create list to store result
        var result = [];
        //create list to store visited
        var visited = new Map();
        //add vertex to stack and mark it as visited
        stack.push(vertex);
        visited.set(vertex, true);
        var currVertex;
        //while stack has something in it:
        while (stack.length > 0) {
            //pop vertex from stack
            currVertex = stack.pop();
            //mark as visited
            visited.set(currVertex, true);
            //push in result
            result.push(currVertex);
            //push neighbors into the stack
            var neighbors = this.adList.get(currVertex);
            try {
                for (var neighbors_2 = (e_3 = void 0, __values(neighbors)), neighbors_2_1 = neighbors_2.next(); !neighbors_2_1.done; neighbors_2_1 = neighbors_2.next()) {
                    var neighbor = neighbors_2_1.value;
                    //for each neighbor check if it's already visited or currently in stack
                    //TODO... make finding index element in stack O(1) by using own implementation
                    if (!visited.has(neighbor) && stack.indexOf(neighbor) == -1) {
                        stack.push(neighbor);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (neighbors_2_1 && !neighbors_2_1.done && (_a = neighbors_2.return)) _a.call(neighbors_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return result;
    };
    Graph.prototype.BFSiterative = function (vertex) {
        var e_4, _a;
        //initialize a queue with starting vertex
        var queue = [vertex];
        //create list to store result
        var result = [];
        //create list to store visited
        var visited = new Map();
        var currentVertex;
        while (queue.length > 0) {
            //while there are nodes in the queue shift node and add it's neighbors to the queue
            currentVertex = queue.shift();
            visited.set(currentVertex, true);
            result.push(currentVertex);
            var neighbors = this.adList.get(currentVertex);
            try {
                for (var neighbors_3 = (e_4 = void 0, __values(neighbors)), neighbors_3_1 = neighbors_3.next(); !neighbors_3_1.done; neighbors_3_1 = neighbors_3.next()) {
                    var neighbor = neighbors_3_1.value;
                    if (!visited.has(neighbor) && queue.indexOf(neighbor) == -1) {
                        queue.push(neighbor);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (neighbors_3_1 && !neighbors_3_1.done && (_a = neighbors_3.return)) _a.call(neighbors_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return result;
    };
    return Graph;
}());
var map = new Graph();
map.addVertex("A");
map.addVertex("B");
map.addVertex("C");
map.addVertex("D");
map.addVertex("E");
map.addVertex("F");
map.addEdge("A", "B");
map.addEdge("A", "C");
map.addEdge("B", "D");
map.addEdge("C", "E");
map.addEdge("D", "E");
map.addEdge("D", "F");
map.addEdge("E", "F");
// map.DFSrecursive("A");
// console.log(map.adList);
// console.log(map.DFSrecursive("A"));
// console.log(map.DFSiterative("A"));
console.log(map.BFSiterative("A"));

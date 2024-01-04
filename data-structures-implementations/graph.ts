// class Graph {
//   public adList: Map<number, number[]>;

import { todo } from "node:test";
import { visitCommaListElements } from "typescript";

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

class Graph {
  public adList: Map<string, string[]>;

  constructor() {
    this.adList = new Map<string, string[]>();
  }

  addVertex(name: string) {
    if (!this.adList.has(name)) this.adList.set(name, []);
  }
  //graph is undirected, if need to implement directed graph, push only v2 to v1
  addEdge(vertex1: string, vertex2: string) {
    if (!this.adList.has(vertex1)) this.adList.set(vertex1, []);
    if (!this.adList.has(vertex2)) this.adList.set(vertex2, []);

    this.adList.get(vertex1).push(vertex2);
    this.adList.get(vertex2).push(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string) {
    const adjacencyList1 = this.adList.get(vertex1);
    const adjacencyList2 = this.adList.get(vertex2);

    adjacencyList1 &&
      this.adList.set(
        vertex1,
        adjacencyList1.filter((x) => x !== vertex2)
      );

    adjacencyList2 &&
      this.adList.set(
        vertex2,
        adjacencyList2.filter((x) => x !== vertex1)
      );
  }

  removeVertex(name: string) {
    this.adList.has(name) && this.adList.delete(name);
    for (let key of this.adList.keys()) {
      let adjacencyList = this.adList.get(key);
      this.adList.set(
        key,
        adjacencyList.filter((neighbor) => neighbor !== name)
      );
    }
  }

  DFSrecursive(vertex: string) {
    //create list to store result
    const result: string[] = [];

    //create list to store visited
    const visited = new Map<string, boolean>();

    //create a helper function that accepts vertex
    const DFS = (vertex: string) => {
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
      const neighbors = this.adList.get(vertex);
      for (let neighbor of neighbors) {
        //recursively call helper funciton over neighbours
        if (!visited.has(neighbor)) {
          DFS(neighbor);
        }
      }
    };
    //call helper function
    DFS(vertex);

    //return result
    return result;
  }

  DFSiterative(vertex: string) {
    //create stack to use track of vertices
    const stack: string[] = [];
    //create list to store result
    const result: string[] = [];
    //create list to store visited
    const visited = new Map<string, true>();
    //add vertex to stack and mark it as visited
    stack.push(vertex);
    visited.set(vertex, true);

    let currVertex;
    //while stack has something in it:
    while (stack.length > 0) {
      //pop vertex from stack
      currVertex = stack.pop();
      //mark as visited
      visited.set(currVertex, true);
      //push in result
      result.push(currVertex);
      //push neighbors into the stack
      const neighbors = this.adList.get(currVertex);
      for (let neighbor of neighbors) {
        //for each neighbor check if it's already visited or currently in stack
        
        if (!visited.has(neighbor) && stack.indexOf(neighbor) == -1) {
          stack.push(neighbor);
        }
      }
    }
    return result;
  }

  BFSiterative(vertex: string) {
    //initialize a queue with starting vertex
    const queue = [vertex];
    //create list to store result
    const result: string[] = [];

    //create list to store visited
    const visited = new Map<string, boolean>();

    let currentVertex;

    while (queue.length > 0) {
      //while there are nodes in the queue shift node and add it's neighbors to the queue
      currentVertex = queue.shift();
      visited.set(currentVertex, true)
      result.push(currentVertex)
      const neighbors = this.adList.get(currentVertex);
      for (let neighbor of neighbors){
        if (!visited.has(neighbor) && queue.indexOf(neighbor) == -1){
          queue.push(neighbor)
        }
      }
    }

    return result
  }
}
let map = new Graph();

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
console.log(map.BFSiterative("A"))

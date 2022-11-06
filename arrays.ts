const activeUsers: string[] = []     //annotate array variable   string
activeUsers.push("tony", "johny", "jay");

const ageList: number[]= [45, 65, 85];
ageList[0] = 99
//ageList[0] = "twenty"          not a number for typr string

const bools: Array<boolean> = []    //general syntax

const bools2: boolean[] = []      // ts syntax

type Point = {
    x: number,
    y: number
}

const coords: Point [] = []
 coords.push({x: 23, y: 8})
 //coords.push({, y: 8})        missing x:

const board: string[] [] = 
[
    ["x", "o", "x"],
    ["x", "o", "x"],
    ["x", "o", "x"]
];

const board2: string[] [] [] = 
[
   [ ["x", "o", "x"],
    ["x", "o", "x"],
    ["x", "o", "x"]]
];

console.log(board2)

"use strict";

/*
DATA STRUCTURES OVERVIEW

FOUR Built In Data Structures
1) Arrays
2) Sets
3) Objects 
4) Maps


SOURCES of DATA
1) From the Program Itself: Data Written directly in source code (e.g.status messages)
2) From the UI: Data input from the user or data wrtiiten in DOM (e.g. TODO app)
3) From External Sources: Data Fetched for example from Web API (e.g. Weather API, Recipe Object)

------------------
Let's Talk about Data COMING FROM APIs as External Data (No.3) --> 
Most common Source od Data that You'd use in Real Apps
---------------------
      ⬇️
Collection od Data
      ⬇️
Data Structure
1) Simple List?: Arrays or Sets
2) KEY/VALUE Pairs? Objects or Maps

FOR OBJECTS --> DATA Usually Comes as JSON Objects

OTHER BUILT IN Data Structures
-> WeakMap
-> WeakSet


NON-BUILT IN
-> Stacks
-> Queues
-> Linked Lists
-> Trees
-> Hash tables


//--------------------------
✨ When to USE Arrays ->
//------------------------

const tasks = ["Code", "Eat", "Code"]

-----> Use when you need ordered list of values [Might Contain Duplicates]
---> When you need to manipulate data; Using Array METHODS


//-------------------------
✨✨ When to USE SETS ->
//---------------------------

const tasks = new Set(["Code", "Eat", "Code"])

-----> Use when you need owork with UNIQUE Values
---> Use when HIGH-PERFORMANCE is REALLY Important (Operations like seraching an item or Deleting an Item 
can be 10x faster than in Arrays)
-> Use to REMOVE Duplicate Values from Arrays (GOOD Use CASE)


//---------------------
⭕ When to use OBJECTS ✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️
//---------------------

taskObject = {
  task: "Code",
  date: "today",
  repeat: true,
};

--> When you need More traditional "key/value" store
-> 🌟 (BIGGEST ADVANTAGE) Easier to write and access value with . and []
-> When you need functions as values, OBjcect is the BEST to use; called METHODS
--> Also while using JSON Data



//-------------------
🗺️ When to use Maps
//-------------------

taskMap = new Map([
  ["task", "Code"],
  ["date", "today"],
  [false, "Start coding"],
]);

-> Better performance
-> Keys can have "any" type
-> Easy to iterate
-> easy to compute size
-> When you need keys that are not strings


*/

const myJSONData = {
  count: 2,
  books: [
    {
      publisher: "Harper Collins",
      title: "Lord of the Rings",
      author: "JRR Tolkein",
      status: "available",
    },
    {
      publisher: "Gita Press",
      title: "Shrimad Bhagwad Mahapurana",
      author: "Ved Vyas",
      status: "available",
    },
  ],
};

taskObject = {
  task: "Code",
  date: "today",
  repeat: true,
};

taskMap = new Map([
  ["task", "Code"],
  ["date", "today"],
  [false, "Start coding"],
]);

//--------------------------------------------------------
// SUMMARY: Which Data Structure to Use ?
//--------------------------------------------------------

/*

DATA STRUCTURE OVERVIEW

SOURCES OF DATA

    1. From the Program Itself: Data written directly in the source code (e.g. status messages)
    2. From the UI: Data input from the user or Data written in DOM (e.g. Todo App)
    3. From external sources: Data Fetched for Example from web API 
       (e.g. employees object from a web API): JSON [See Below]
                                        |
                                        |
                                        |
                               --------------------
                                Collection of Data
                               --------------------
                                        |
                                        |
                                        |
                               --------------------
                                 Data Structure 
                               --------------------
                                 |              |
                                 |              |
                                 |              |
                          SIMPLE LIST?       KEY: VALUE Pairs?

                    ARRAYs   or    SETs        OBJECT or MAPS
                    


OTHER BULIT-IN
👉 WeakMap
👉 WeakSet

NON BUILT-IN
👉 Stacks
👉 Queues
👉 Linked Lists
👉 Trees
👉 Hash Tables


*/

//------------------------------
// ⭐ JSON data format example
//------------------------------
/*

{
  "count": 3,
  "details": [
    {
      "id": "1",
      "firstName": "Carrie",
      "lastName": "Mathison",
      "job": "Station Chief",
    },
    {
      "id": "2",
      "firstName": "Peter",
      "lastName": "Quinn",
      job: "Analyst",
    },
    {
      "id": "3",
      "firstName": "Saul",
      "lastName": "Berenson",
      "job": "Director",
    },
  ],
};

*/

//-------------------------------------------------------
//     ARRAYS Vs. SETS      |        OBJECTS Vs. MAPS
//-------------------------------------------------------

//------------------------------------------------
// 🔥 ARRAYS
//------------------------------------------------
// 👉 Use when we need ORDERED list of values(might contain duplicates)
// 👉 Use when we need to MANIPULATE data

const myArray = ["hello", "there", "peter"];

console.log(myArray); // (3) ['hello', 'there', 'peter']

//------------------------------------------------
// 🔥🔥 SETS
//------------------------------------------------
// 👉 Use when we need to work with UNIQUE Values
// 👉 Use when HIGH PERFORMANCE is really important (10x faster than arrays)
// 👉 Use to REMOVE DUPLICATE from arrays

const mySet = new Set(["hi", "pen", "pencil", "hi", "100", "100"]);

console.log(mySet); // Set(4) {'hi', 'pen', 'pencil', '100'}

//--------------------------------------------------
// 🔥🔥🔥 OBJECTS
//--------------------------------------------------
// 👉 Only STRING DATA TYPE for Keys
// 👉 More "traditional" key/value store
// 👉 Easier to write/access values with Dot and Bracket Notation ( . and [])
// 👉 Use when we need to include functions (METHODS)
// 👉 Use when working with JSON (can convert to map)

const myObj = {
  firstName: "Peter",
  lastName: "Quinn",
  age: 38,
};

console.log(myObj); // {firstName: 'Peter', lastName: 'Quinn', age: 38}

//------------------------------------------------------
// 🔥🔥🔥🔥 MAPS
//------------------------------------------------------
// 👉 Better performance
// 👉 ANY DATA TYPE for Keys
// 👉 Easy to iterate
// 👉 Easy to compute size
// 👉 Use when simply need to map key to values
// 👉 Use when we need keys that are NOT STRINGS

const myMap = new Map([
  ["name", "Carrie Mathison"],
  ["age", 40],
  [3, "Correct"],
  [true, "Start writing"],
]);

console.log(myMap);
// Map(4) {'name' => 'Carrie Mathison', 'age' => 40, 3 => 'Correct', true => 'Start writing'}

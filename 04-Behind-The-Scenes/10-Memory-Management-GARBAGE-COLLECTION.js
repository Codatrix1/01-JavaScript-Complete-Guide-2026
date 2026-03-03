"use strict";

//------------------------------------------
// MEMORY MANAGEMENT --- Garbage Collection
//------------------------------------------

/*


1.ALLOCATE MEMORY    ------>     2. Use Memory         ------> 3. Release ✔️✨🔥
let temp = 23.7                 temp = temp + 5       
                                round(temp)                temp is removed from memory


                                
*/

/*
//------------------------------------------------------------
🤔 How is memory freed up after we no longer need a value?
//-------------------------------------------------------------

- 👉🏻 CALL STACK: 
Variable Environment is SIMPLY DELETED WHEN EXECUTION CONTEXT Pops off stack. 
Howver, the Global Variable wil never be deleted.

- 👉🏻 HEAP: 
Memmory Management is Considerably more complex; 
Called Garbage Collection; 
Auto-Done by all JavaScript Engine; We devs cannot control this; 
All JS modern engines use the algorithm MARK-AND-SWEEP


---------------------------
MARK AND SWEEP ALGORITHM
---------------------------

✨ STEP 1: MARK PHASE

All Objcets that are REACHABLE  from a so-called ROOT are marked as ALIVE
Different things can be roots,but the most obvious ones are the global execution context (EC)
and any other execution context of running functions. 
They can also be reached by other roots, such as:

- EVENT LISTENERS
- ACTIVE TIMERS
- CLOSURES

If we have an objcet in the HEAP that isn't reached by any of the roots at all,
its marked as DEAD.

THIS completes the mark phase

✨ STEP 2: SWEEP PHASE

CASE 1
All Objcets that are UNREACHABLE are SIMPLY DELETED
Basically the algorithm has decided in the first steps that tehse objects 
are no longer needed. And the memory occupied by them can be reclaimed and used
for future usage or allocation.

And thus any of such DEAD OBJECTS are DELETED.

CASE 2
When a function in the Call Stack Execution Context finishes excution and
its context pops off the stack, the garbage collections RUNS Again 
(and theres no way to control it
manually from our code and NO Way of Knowing it).
Some factors include:
--- How much memory our app is consuming
--- How much memory is available
--- Which JS Engine the browser is using, and SO ON.


------------------------------------------------------------------
⁉️ QUESTION: HOW Could the GLOBAL CONTEXT object be deleted?
ANSWER: IT CAN'T. As the Global EC will never be garbage collected

//-------------------------------
⁉️ QUESTION: And what about 
- Active event Listers 
- or Timers 
- or Closures 
(that no longer have the roots Or basically DEAD)?? 
Well that's where 

💧 MEMORY LEAKS come into PLAY 💧

Memory Leaks happens when an obvject that are no longer needed
by our app, is incorrectly still REACHABLE or REFERENCED from Somewhere
by the GARBAGE COLLECTOR from one of the roots. 

Basically, the OBJECT is MARKED as ALIVE and
NOT DELETED, even though we no longer need them in our code.

Typically happen due to unneccasary 
--- EVENT LISTENERS
--- TIMERS

For example: If a Timer creates an objcet, this object will always be reachable,
unless you actively delete the timer when no longer needed. Same goes for event listeners.

✅ SOLUTION ⁉️⁉️
1) Always delete active timers OR Event Listeners, Escpecially
when they reference LARGE OBJCETS
2) Avoid declaring large Objects as GLOBAL OBJECTS.


Now, in reality, memory management is way more complex than just this.
It's an extremely complicated process.

There are actually:
--- multiple heaps,
--- objects are moved from one heap to another depending on their age,
--- the garbage collector has multiple algorithms for the different heaps 
like generational garbage collection

//---------------------------------
UPCOMING TOPICS (Advanced Sections)
//-----------------------------------

---> 1) CLOSURES ---> A Closer Look at Functions
---> 2) Prototypal Inheritance --> OOP
---> 3) Event Loop --> Promises, Async/Await and AJAX
---> 4) How the DOM Really Works ---> Advanced DOM and Events

*/

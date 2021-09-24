


var findMiddleCourses = function(courses) {
    //console.log(courses)
    
    let hashmap = {};
    //let visited = {};
    let len = courses.length;

    courses.forEach((course, i) => {
        if(!hashmap[course[0]]) {
            hashmap[course[0]] = {adj: [course[1]], inDegree: 0}
        } else {
            hashmap[course[0]].adj.push(course[1])
        }
    })



{
    'Logic' : {['COBOL', 'Compilres'], inDegree: 1, outDegree: 1},
    'COBOL' : {[], inDegree: 2},
    'Data Structures' : {['Algorithms', 'Logic'], inDegree: 2},
    'Creative Writing' : {['System Adminstration', 'Databases', 'Data Structures'], inDegree: 0},
    'Algorithms' : {['COBOL'], inDegree: 1},
    'System Administration' : {[]},
    'Graphics': {['Networking']},
    'Networking': {['Algorithms'], inDegree: 1},
    'Intro to Computer Science': {['Data Structures', 'Graphics'], inDegree: 0},
    'Databases' : {['System Administration']},
    'Compilers': {[], inDegree: 1}
}

// these are the ones' I gotta do a search
starting points
Creative Writing
Intro to Computer Science


//ending points 


//print the paths start to end 

// problem of printing all paths from a starting node

Intro to C.S. -> Graphics -> *Networking* -> Algorithms -> Cobol
Intro to C.S. -> *Data Structures* -> Algorithms -> COBOL
Intro to C.S. -> *Data Structures* -> Logic -> COBOL
Intro to C.S. -> *Data Structures* -> Logic -> Compiler
Creative Writing -> *Databases* -> System Administration
*Creative Writing* -> System Administration
Creative Writing -> *Data Structures* -> Algorithms -> COBOL
Creative Writing -> *Data Structures* -> Logic -> COBOL
Creative Writing -> *Data Structures* -> Logic -> Compilers

// go through list again and find middle
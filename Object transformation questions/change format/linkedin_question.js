// Using 2 for loopss

// Points to note:
// Foreach u cannot use break to break the loop. Instead use every return true is like continue and return false is like break.
// think before initialising variable as global or local scope


// Given
var endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
    ];
    // Result
    // [
    // { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
    // { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
    // { skill: 'html', user: ['Sue'], count: 1 }
    // ];
  
    getSkills = (endorsements) => {
        let result = [];
        
        endorsements.forEach(obj => {
            let final = {};
            let flag = false;
            if (result.length > 0) {
                result.every(res => {
                    if (res.skill == obj.skill) {
                        let userArr = res.user;
                        userArr.push(obj.user);
                        res.count = ++res.count;
                        flag = true;
                        return false;
                    }
                    return true;
                 })
            } 
               if(!flag) {
                final.skill = obj.skill;
                final.user = [obj.user];
                final.count = 1;
                result.push(final);
               }
            
        });
        return result;
    }

    let solution = getSkills(endorsements);
    console.log(solution);

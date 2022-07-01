
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
        let hash = new Map();
        endorsements.forEach(ele => {
            let skill = ele.skill;
            let user = ele.user;
            if(hash.has(skill)) {
                hash.get(skill).push(user);
            
            } else {
                hash.set(skill, [user]);
               // hash[skill] = [user]
            }
        });
        console.log(hash);
        hash.forEach((value,key) => {
            let obj = {};
            obj.skill = key;
            obj.user = value;
            obj.count = obj.user.length;
            result.push(obj);
        })
        return result;   
        
    }
    
    let solution = getSkills(endorsements);
    console.log(solution);

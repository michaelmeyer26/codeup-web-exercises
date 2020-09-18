const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeOrMoreLanguages = users.filter(user => {return user.languages.length >= 3});
console.log(threeOrMoreLanguages);

let emails = users.map(user => user.email);
console.log(emails);

let partyEXP = users.reduce(
    (totalYearsEXP, user) => {return totalYearsEXP + user.yearsOfExperience}
    , 0);
console.log(partyEXP);

let averageEXP = partyEXP / users.length
console.log(averageEXP);

let longestEmail = users.reduce(
    (longestEmail, user) => {
        if(user.email.length > longestEmail.length) {
            return user.email;
        } else {
            return longestEmail;
        }
    }
    , "");
console.log(longestEmail);

let instructors = users.reduce(
    (instructors, user, index) => {
        if (index === 0) {
            return instructors += user.name;
        } else if (index === (users.length - 1)) {
            return instructors += ", and " + user.name + ".";
        } else {
            return instructors += ", " + user.name;
        }
    }
    , "Your instructors are: ");
console.log(instructors);

let languages = users.reduce(
    (languages, user) => {
        for(let i = 0; i < user.languages.length; i++) {
            if (!languages.includes(user.languages[i])) {
                languages.push(user.languages[i])
            }
        }
        return languages;
    }, []);
console.log(languages);




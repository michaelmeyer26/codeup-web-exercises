function getLastCommit(user, token) {
    //fetch('https://api.github.com/users')
    fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': token}})
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let i = 0;
            let isPushEvent = false;
            let mostRecentCommitDate;
            while(!isPushEvent) {
                if (data[i].type === "PushEvent") {
                    isPushEvent = true;
                    let repoName = data[i].repo.name
                    fetch(`https://api.github.com/repos/${repoName}/commits`)
                        .then(response => response.json())
                        .then(commitsData => {
                            // console.log(commitsData);
                            console.log(commitsData[0].commit.author.date)
                            mostRecentCommitDate = commitsData[0].commit.author.date;
                        })
                    return mostRecentCommitDate;
                    }
                    i++;
                }
            })
        .catch(error => console.error(error));
}

// getLastCommit('michaelmeyer26', 'be6afd9b080f726d089fb0b9a70738da5298284c');
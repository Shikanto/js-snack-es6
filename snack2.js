const footballTeams = [
    {
        nome: "Roma",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        nome: "Inter",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        nome: "Milan",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        nome: "Juventus",
        falliSubiti: 0,
        puntiFatti: 0
    },
]

function randomInfo(footballTeams){

    let updateTeams =[];
    let newInfoTeam ={

    };

    for( let i = 0; i < footballTeams.length; i++) {

        let teamInfo = footballTeams[i];
        teamInfo.falliSubiti = Math.floor(Math.random()*100);
        teamInfo.puntiFatti = Math.floor(Math.random()*100);
        /* console.log(teamInfo) */
        let {nome, falliSubiti} = teamInfo;
        newInfoTeam.nome = nome;
        newInfoTeam.falliSubiti = falliSubiti;
        /* console.log(newInfoTeam); */
        updateTeams.push(newInfoTeam);
        
    }
    console.log(updateTeams)
}

randomInfo(footballTeams);
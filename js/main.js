
let team = [
    {   
        name: "Wayne",
        job: "FOunder & CEO",
        src: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        job: "Chief Editor",
        src: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Walter",
        job: "Office Manager",
        src: "/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        job: "Social Media Manager",
        src: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Scott",
        job: "Developer",
        src: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        job: "Graphic Designer",
        src: "angela-lopez-social-media-manager.jpg"
    }
] 

for (let i=0 ; i <team.length ; i++) {
    document.getElementById("card").innerHTML += `
        <div class="column bg-black"">
        <h4 class="tx-white">
            <img class="img" src="./img/${team[i].src}">
                ${team[i].name} 
        </h4>     
        <p class="tx-white">
        ${team[i].job} 
        </p>
        </div>
    `
}


   //--------------------FUNZIONI----------------------------------//
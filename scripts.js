const data = {
    "1": "Reincarnation (2005):www.imdb.com/title/tt0456630/?ref_=fn_al_tt_1",
    "2": "Mad God:www.imdb.com/title/tt15090124/?ref_=fn_al_tt_1",
    "3": "Fire in the Sky:www.imdb.com/title/tt0106912/?ref_=fn_al_tt_1",
    "4": "The Silence of the Lambs:www.imdb.com/title/tt0102926/?ref_=fn_al_tt_1",
    "5": "High Tension:www.imdb.com/title/tt0338095/?ref_=fn_al_tt_1",
    "6": "Matrys:www.imdb.com/title/tt1029234/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_martyrs",
    "7": "From Dusk till Dawn:www.imdb.com/title/tt0116367/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_from%2520dusk%2520till%2520dawn",
    "8": "As Above So Below:www.youtube.com/watch?v=oHg5SJYRHA0",
    "9": "The Lost Boys:www.youtube.com/watch?v=oHg5SJYRHA0",
    "10": "1408:www.youtube.com/watch?v=oHg5SJYRHA0",
    "11": "House on Haunted Hill ( Original ):www.youtube.com/watch?v=oHg5SJYRHA0",
    "12": "Evil Dead (2013):www.youtube.com/watch?v=oHg5SJYRHA0",
    "13": "Se7en:www.youtube.com/watch?v=oHg5SJYRHA0",
    "14": "Rosemary's Baby:www.youtube.com/watch?v=oHg5SJYRHA0",
    "15": "Night of the Demons ( 1988 ):www.youtube.com/watch?v=oHg5SJYRHA0",
    "16": "Green Inferno:www.youtube.com/watch?v=oHg5SJYRHA0",
    "17": "Noroi, The Curse:www.youtube.com/watch?v=oHg5SJYRHA0",
    "18": "House of 1000 Corpses:www.youtube.com/watch?v=oHg5SJYRHA0",
    "19": "The Cabin in the Woods:www.youtube.com/watch?v=oHg5SJYRHA0",
    "20": "1958:www.youtube.com/watch?v=oHg5SJYRHA0",
    "21": "Class of Nuke 'Em High (1986):www.youtube.com/watch?v=oHg5SJYRHA0",
    "22": "An American Werewolf in London:www.youtube.com/watch?v=oHg5SJYRHA0",
    "23": "Black Sabbath:www.youtube.com/watch?v=oHg5SJYRHA0",
    "24": "Land of the Dead:www.youtube.com/watch?v=oHg5SJYRHA0",
    "25": "The Ritual:www.youtube.com/watch?v=oHg5SJYRHA0",
    "26": "The Shining:www.youtube.com/watch?v=oHg5SJYRHA0",
    "27": "Stop Motion:www.youtube.com/watch?v=oHg5SJYRHA0",
    "28": "Quarantine:www.youtube.com/watch?v=oHg5SJYRHA0",
    "29": "Devil's Advocate:www.youtube.com/watch?v=oHg5SJYRHA0",
    "30": "The Witch:www.youtube.com/watch?v=oHg5SJYRHA0",
    "31": "Satan Was a Lesbian:www.youtube.com/watch?v=oHg5SJYRHA0"
}

let list = document.getElementById('calendar-list');

for (const [key, value] of Object.entries(data)) {
    split = value.split(':');
    console.log(`${key}: ${split[0]} ${split[1]}`);

    let anchor = document.createElement('a');
    anchor.href = "https://" + split[1];
    anchor.target = '_blank';

    let li = document.createElement('li');
    let time = document.createElement('time');
    let span = document.createElement('span');
    span.innerText = split[0];

    time.setAttribute('datetime', `2024-10-${key}`);
    let currentDate = new Date();
    if (currentDate.getDate() == key && currentDate.getMonth() == 9) {
        li.classList.add('today');
    }
    time.innerText = key;


    anchor.appendChild(time);
    anchor.appendChild(span);
    li.appendChild(anchor);
    list.appendChild(li);
}

document.addEventListener('DOMContentLoaded', () => {
    // List of background image files
    const backgrounds = [
        "bg1.png",
        "bg2.png",
        "bg3.png",
        "bg4.png",
        "bg5.png",
        "bg6.png",
        "bg7.png",
        "bg8.png",
        "bg9.png",
    ];

    // Fisher-Yates shuffle algorithm for randomizing the array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    // Shuffle the backgrounds array
    const shuffledBackgrounds = shuffleArray(backgrounds);

    // Select a random background from the shuffled array
    const selectedBackground = shuffledBackgrounds[0];

    // Apply the background image to the body
    document.body.style.backgroundImage = `url('bg/${selectedBackground}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
});
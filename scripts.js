const data = {
    "1": "Reincarnation (2005):www.imdb.com/title/tt0456630/?ref_=fn_al_tt_1",
    "2": "Mad God:www.imdb.com/title/tt15090124/?ref_=fn_al_tt_1",
    "3": "Fire in the Sky:www.imdb.com/title/tt0106912/?ref_=fn_al_tt_1",
    "4": "The Silence of the Lambs:www.imdb.com/title/tt0102926/?ref_=fn_al_tt_1",
    "5": "High Tension:www.imdb.com/title/tt0338095/?ref_=fn_al_tt_1",
    "6": "Martyrs:www.imdb.com/title/tt1029234/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_martyrs",
    "7": "From Dusk till Dawn:www.imdb.com/title/tt0116367/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_from%2520dusk%2520till%2520dawn",
    "8": "As Above So Below:www.imdb.com/title/tt2870612/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_as%2520above%2520so%2520below",
    "9": "The Lost Boys:www.imdb.com/title/tt0450385/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_1408",
    "10": "1408:www.imdb.com/title/tt0450385/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_1408",
    "11": "House on Haunted Hill ( Original ):www.imdb.com/title/tt0051744/?ref_=fn_al_tt_2",
    "12": "Evil Dead (2013):www.imdb.com/title/tt1288558/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_evil%2520dead",
    "13": "Se7en:www.imdb.com/title/tt0114369/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_se7en",
    "14": "Rosemary's Baby:www.imdb.com/title/tt0063522/?ref_=nv_sr_srsg_1_tt_5_nm_3_in_0_q_rosemarys%2520",
    "15": "Night of the Demons ( 1988 ):www.imdb.com/title/tt0093624/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_night%2520of%2520the%2520demo",
    "16": "Green Inferno:www.imdb.com/title/tt2403021/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_green%2520inferno",
    "17": "Noroi, The Curse:www.imdb.com/title/tt0930083/?ref_=nv_sr_srsg_0_tt_3_nm_1_in_0_q_noroi%2520the%2520curse",
    "18": "House of 1000 Corpses:www.imdb.com/title/tt0251736/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_house%2520of%2520100",
    "19": "The Cabin in the Woods:www.imdb.com/title/tt1259521/?ref_=nv_sr_srsg_0_tt_3_nm_5_in_0_q_the%2520cabin%2520in%2520the%2520woods",
    "20": "1958:www.imdb.com/title/tt0080314/?ref_=nv_sr_srsg_1_tt_8_nm_0_in_0_q_1958",
    "21": "Class of Nuke 'Em High (1986):www.imdb.com/title/tt0090849/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_class%2520of%2520nukem%2520hi",
    "22": "An American Werewolf in London:www.imdb.com/title/tt0082010/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_an%2520american%2520w",
    "23": "Black Sabbath:www.imdb.com/title/tt0057603/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_black%2520sabbath",
    "24": "Land of the Dead:www.imdb.com/title/tt0418819/?ref_=nv_sr_srsg_0_tt_3_nm_5_in_0_q_land%2520of%2520the%2520dead",
    "25": "The Ritual:www.imdb.com/title/tt5638642/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520ritual",
    "26": "The Shining:www.imdb.com/title/tt0081505/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_the%2520shining",
    "27": "Stop Motion:www.imdb.com/title/tt19849020/?ref_=nv_sr_srsg_0_tt_5_nm_2_in_1_q_stop%2520motion",
    "28": "Quarantine:www.imdb.com/title/tt1082868/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_quarantine",
    "29": "Devil's Advocate:www.imdb.com/title/tt0118971/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_devils%2520advocate",
    "30": "The Witch:www.imdb.com/title/tt4263482/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_the%2520witch",
    "31": "Halloween:www.imdb.com/title/tt0077651/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_halloween"
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
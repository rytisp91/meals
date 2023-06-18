// GETS
const aside = document.getElementById('aside')
const menuAside = document.getElementById('menuAside')
const closeAsideBtn = document.getElementsByClassName("close")[0]
const postsContainer = document.getElementById('postsContainer')

// VARS
let asideTools = {
    openAside: () => {
        aside.style.display = "block"
    },
    closeAside: (event) => {
        if (event.target == aside) {
            aside.style.display = "none";
        }
    },
    closeAsideByBtn: () => {
        aside.style.display = "none"
    }
}

const mealsObj = {
    meat: [{
            image: "../assets/31.jpg",
            id: 0,
            title: "Nugarinės kepsniai su šonine",
            link: "./meat/31.html"
        },
        {
            image: "../assets/32.jpg",
            id: 1,
            title: "Vištienos maltinukai su sūriu ir špinatais",
            link: "./meat/32.html"
        },
        {
            image: "../assets/33.jpg",
            id: 2,
            title: "BBQ šonkauliai orkaitėje",
            link: "./meat/33.html"
        },
        {
            image: "../assets/34.jpg",
            id: 3,
            title: "Užkepta vištienos krūtinėlė orkaitėje",
            link: "./meat/34.html"
        }
    ],
    soups: [{
            image: "../assets/11.jpg",
            id: 0,
            title: "Burokėlių sriuba",
            link: "./soups/11.html"
        },
        {
            image: "../assets/12.jpg",
            id: 1,
            title: "Kepto moliūgo sriuba",
            link: "./soups/12.html"
        },
        {
            image: "../assets/13.jpg",
            id: 2,
            title: "Brokolių sriuba su bolivine balanda",
            link: "./soups/13.html"
        },
        {
            image: "../assets/14.jpg",
            id: 3,
            title: "Švediška žirnių sriuba",
            link: "./soups/14.html"
        }
    ],
    salads: [{
            image: "../assets/21.jpg",
            id: 0,
            title: "Mangų ir avokadų kaprio salotos su burrata ir prosciutto",
            description: "Trumpas aprašymas 1",
            link: "./salads/21.html"
        },
        {
            image: "../assets/22.jpg",
            id: 1,
            title: "Pupelių ir kukurūzų salotos su feta",
            description: "Trumpas aprašymas 2",
            link: "./salads/22.html"
        },
        {
            image: "../assets/23.jpg",
            id: 2,
            title: "Skandinaviškos salotos su ruginės duonos skrebučiais",
            description: "Trumpas aprašymas 3",
            link: "./salads/23.html"
        },
        {
            image: "../assets/24.jpg",
            id: 3,
            title: "Avinžirnių salotos su ridikėliais, kopūstais ir smidrais",
            description: "Trumpas aprašymas 4",
            link: "./salads/24.html"
        }
    ]
};

// LISTENERS
window.addEventListener('click', asideTools.closeAside)
menuAside.addEventListener('click', asideTools.openAside)
closeAsideBtn.addEventListener(`click`, asideTools.closeAsideByBtn)

// FUNCTIONS

const generatePosts = (meal) => {

    postsContainer.innerHTML = ``

    mealsObj[meal].map(item => {
        let card = document.createElement(`div`);
        card.classList.add(`card`);
        card.setAttribute(`id`, item.id);

        let img = document.createElement(`img`);
        img.src = item.image;

        let title = document.createElement(`h1`);
        title.innerHTML = item.title;

        let link = document.createElement('a');
        link.href = item.link;
        link.textContent = 'Gaminam!';

        postsContainer.appendChild(card);
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(link)
    })
}

if (typeof currentHTML !== 'undefined') {
    generatePosts(currentHTML);
}
const menu = [{
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];


//Obje icinden categoryleri al
const categories = menu.map((item) => item.category);

// Set ile ayn?? olanlar?? cikar ve destructuring ile array olarak kaydet (c??nk?? set object d??nd??r??r)

const categoryList = [...new Set(categories)];

// Listenin basina t??m?? olarak All ekle

categoryList.unshift("All");


// Category butonlar??n??n oldu??u container dom olarak al

const btn_category = document.querySelector(".btn-container");

// categoryListteki her baslik icin butonunu olustur

for (let i = 0; i < categoryList.length; i++) {
    let buttons = document.createElement("button")
        // baslik sayisi kadar butonu containera ekle
    btn_category.appendChild(buttons);
    //her butonun icine ilgili category adini yaz
    buttons.innerHTML = categoryList[i];
    //butonlar?? sekillendirmek icin olusturduktan sonra class ver(style.cssden geliyor)
    buttons.className = "btn-item";
}

//container elementi secip fonksiyonda cagirilan butona g??re icerik g??nderecegiz

const mainSection = document.querySelector(".section-center");
mainSection.className = "menu-items";


// sayfadaki butonlar sadece category butonlar?? oldugu icin sonuna all ekleyerek t??m butonlar?? seciyoruz

const buttons = document.querySelectorAll("buttons");

// simdi her fonksiyonda cagirilan butonun icindeki category name al??yoruz
let btnName = "noClicked";
let selectedCategory = [];
let wantedCategory;
if (btnName) {
    selectedCategory = menu.map((item) => {
        //dugme adi ile ayni olan itemlar?? bir arrayde birlestir
        selectedCategory.push(item);
        //categorysi dugme ismi ile farkli olanlari cikart
        wantedCategory = selectedCategory.filter((e) => e);
    });
}

//sayfaya ilk gidildiginde all categorynin g??z??kmesi icin kod

const displayer = function() {
    for (let i = 0; i < wantedCategory.length; i++) {
        let sections = document.createElement("section");
        mainSection.appendChild(sections);

        //her bolume class ver (css dosyasinda bulunan mevcut class)
        sections.className = "menu-info";

        //her yemegin resmini alip img ile goster
        let images = document.createElement("img");
        sections.appendChild(images);
        images.src = wantedCategory[i].img;
        images.className = "photo";

        // her yemegin adini adip span ile yazdir
        let titles = document.createElement("span");
        sections.appendChild(titles);
        titles.className = "menu-title";


        //her yemegin fiyatini alip span ile yazdir
        titles.innerHTML = `${wantedCategory[i].title}`;
        let prices = document.createElement("span");
        prices.innerHTML = wantedCategory[i].price;
        titles.append(prices);

        //her yemegin aciklamasini alip span ile yazdir
        let descriptions = document.createElement("span");
        sections.appendChild(descriptions);
        descriptions.innerHTML = wantedCategory[i].desc;
        descriptions.className = "menu-text";
    }
};

displayer();

btn_category.addEventListener("click", function(e) {
    //t??klanan d????menin ad??n?? al
    btnName = e.target.innerHTML;
    //ard??ndan ba??ka d????meye t??klan??rsa ??nce dom'u bo??alt
    mainSection.innerHTML = "";
    if (btnName == "notClicked" || btnName == "All") {
        selectedCategory = menu.map((item) => {
            //d????me ad?? ile ayn?? olan item'lar?? bir array'de birle??tir
            selectedCategory.push(item);
            //kategorisi d????me ismi ile farkl?? olanlar?? ????kart
            wantedCategory = selectedCategory.filter((e) => e);
        });
    } else {
        selectedCategory = menu.map((item) => {
            //d????me ad?? ile ayn?? olan item'lar?? bir array'de birle??tir
            selectedCategory.push(item.category == btnName ? item : "");
            //kategorisi d????me ismi ile farkl?? olanlar?? ????kart
            wantedCategory = selectedCategory.filter((e) => e);
        });
    }

    //yukar??da se??ti??imiz section container'a yine yukar??da ad??n?? ald??????m??z kategoriyi yazd??r
    displayer();
});
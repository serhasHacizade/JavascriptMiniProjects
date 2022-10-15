const Sivas = [
    {
      id: 1,
      title: "Sivas Congress Building",
      place: "Central",
      img: "https://www.gezginrehberler.com/wp-content/uploads/2019/07/sivas-kongre-binasi-ataturk-ve-etnografya-muzesi.jpg",
      desc: `This building, which is one of the most important places in the history of the Republic, this building was founded by Mustafa Kemal `,
    },
    {
      id: 2,
      title: "Governor's Building",
      place: "Central",
      img: "https://www.kulturportali.gov.tr/repoKulturPortali/large/24062013/df5c4a5c-2304-4c9d-8247-12c86f3867e5.JPG",
      desc: `It was built by the Governor of Sivas, Halil Rıfat Pasha, in 1884 as a two-storey using cut stone.`,
    },
    {
      id: 3,
      title: "The Double Minaret Madrasah",
      place: "Central",
      img: "https://i4.hurimg.com/i/hurriyet/75/1200x675/5fd9b5bd0f25442c9cf8c955.jpg",
      desc: `It was built in 1271 by the Vizier of the Ilkhanate, Şemseddin Cüveyni.`,
    },
    {
      id: 4,
      title: "Gökpınar Lake",
      place: "Gürün",
      price: 20.99,
      img: "https://i2.milimaj.com/i/milliyet/75/0x410/5f6c82a755427f12e0b37f9a.jpg",
      desc: `It is 10 kilometers from the town center. This name is given because the color of the lake is blue-sky.`,
    },
    {
      id: 5,
      title: "Kangal Balikli Spa",
      place: "Kangal",
      img: "http://www.kangalbaliklikaplicasi.com.tr/en/images/shop/slider/1.jpg",
      desc: `Kangal fish spa is one of the skin diseases in our country; It is a spa that is famous for the treatment of psoriasis and rheumatic diseases.`,
    },
    {
      id: 6,
      title: "Kangal Central Mosque",
      place: "Kangal",
      img: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20160307083831518_Kangal%20Merkez%20(Carsi)%20Camii%20(1).JPG?format=jpg",
      desc: `By Kangal Agha Abdurrahman Pasha`,
    },
    {
      id: 7,
      title: "Hafik Lake",
      place: "Hafik",
      img: "http://www.sivas.gov.tr/kurumlar/sivas.gov.tr/Sehir_Etiketleri/Hafik-Golu/Hafik-Golu_metin.jpg",
      desc: `It has the characteristics of a karst lake. In addition, water is collected by boiling on the lake floor.`,
    },
    {
      id: 8,
      title: "Divrigi Grand Mosque",
      place: "Divriği",
      img: "https://www.tarihlisanat.com/wp-content/uploads/2017/11/divri%C4%9Fi1.jpg",
      desc: `It was built in 1228-1229 when it was under the rule of Mengücekoğulları`,
    },
];

const sectionCenter = document.querySelector(".sectionCenter");
const btnContainer = document.querySelector(".btnContainer");

window.addEventListener("DOMContentLoaded", function () {
    displaySivasItems(Sivas);
    displaySivasButtons();
});

function displaySivasItems(sivasItems) {
    let displaySivas = sivasItems.map(function (item) {
        return `<article class="SivasItem">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="itemInfo">
            <header>
              <h4>${item.title}</h4>
            </header>
            <p class="itemText">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displaySivas =displaySivas.join("");
    sectionCenter.innerHTML = displaySivas;
}
function displaySivasButtons() {
    const places = Sivas.reduce(
        function (values, item) {
            if (!values.includes(item.place)) {
                values.push(item.place);
            }
            return values;
        },
        //for all places in one page
        ["all"]
    );

    const placeBtns = places.map(function (place) {
        return `<button type="button" class="filterBtn" data-id=${place}>
            ${place}
          </button>`;
    }).join("");
    btnContainer.innerHTML = placeBtns;
    const filterBtns = btnContainer.querySelectorAll(".filterBtn");
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const sivasPlace = e.currentTarget.dataset['id'];
            const placeCategory = Sivas.filter(function (sivasItem) {
                if (sivasItem.place === sivasPlace) {
                    return sivasItem
                }
            })
            if (sivasPlace === "all") {
                displaySivasItems(Sivas);
            } else {
                displaySivasItems(placeCategory);
            }
        });
    });
}
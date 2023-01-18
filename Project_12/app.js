const poetries = [
    `HİÇ KİMSE YOK KİMSESİZ<br/><br/>Hiç kimse yok kimsesiz<br/>Herkesin var bir kimsesi<br/>Ben bugün kimsesiz kaldım<br/>Ey kimsesizler kimsesi<br/><br/>Kimse aradığım yollarda<br/>Kimsesizlik kimsem oldu<br/>Dinsin artık hicranın cana<br/>Kimse aradığım yollar<br/>Kimsesiz kimselerle doldu`,
    `<br/><br/>AĞLASA DERD-İ DERÛNUM ÇEŞM-İ GİRYÂNİM SANA<br/><br/>Ağlasa derd-i derûnum çeşm-i giryânım sana<br/>Âşikâr olurdu gâlib râz-ı pinhânım sana<br/><br/>Mesned-i hüsn üzre sen ben hâk-i rehde pâymâl<br/>Mûr hâlin nice arz ede Süleyman'ım sana<br/><br/>Şem'i gör kim meclisinde ağlayıp başdan çıkar<br/>Hoş yanar yıkılır ey şem'-i şebistânım sana`,
    `<br/><br/>CANANINI KASTEDER<br/><br/>Bağda gülden bahseden yanağını kasdeder<br/>Serviden söz açanlar endamını kasdeder<br/><br/>Dilbere vasıl olmak dar-ı dünyadan murad<br/>Aşık aşkın derdi ile dermanını kasdeder<br/>Bu fani dünya için değmez kuru kavgaya<br/>Ecel ki bu dünyanın ziyanını kasdeder<br/><br/>Yıldızlardan yücedir gözyaşı eşiğinde<br/>Bu bulutlar ahımın dumanını kasdeder`,
    `<br/><br/>AŞK İLE VİRAN İDEN GÖNLİNİ MA'MÛR İSTEMEZ<br/><br/>Aşk ile viran iden gönlini ma’mûr istemez<br/>Hâtırın mahzûn iden bir lahza mesrur istemez<br/><br/>Hâk-sâr olup hevâ ile gubâr olan gönül<br/>Hâk-i râh-ı yârdan bir dem özin dûr istemez<br/><br/>Hoş gören âkil fena tavrını şöhret gözlemez<br/>Künc-i uzlet isteyen kendüyi meşhur istemez<br/><br/>La’l-i nâba meyl kılmaz bağrını pür-hûn iden<br/>Dâmenin pür-eşk iden lü’lü-yi menşur istemez`,
    `<br/><br/>SÂKİYÂ MEY SUN Kİ BİR GÜN LÂLEZÂR ELDEN GİDER<br/><br/>Sâkiyâ mey sun ki bir gün lâlezâr elden gider<br/>İrüşür fasl-ı hazan bâg ü bahâr elden gider<br/><br/>Her nice zühd ü salâha mail olur hâtırum<br/>Gördügümce ol nigân ihtiyar elden gider<br/><br/>Şöyle hâk oldum ki âh itmeğe havf eyler gönül<br/>Lâ-cerem bâd-ı sabâ ile gubâr elden gider<br/><br/>Gırra olma dilberâ hüsn ü cemâle kıl vefa<br/>Baki kalmaz kimseye nakş ü nigâr elden gider`,
    `<br/><br/>BÂDE-İ NÂB İLE BULDU RÛH-I CÂNÂN REVNAK<br/><br/>Bâde-i nâb ile buldu rûh-ı cânân revnak<br/>Gûyiyâ güller ile buldu gülistân revnak<br/><br/>Zülf-i miskîn ki rûh-ı yâr ile tâbende durur<br/>Şem'-i pürnûr ile san buldu şebistân revnak<br/><br/>Göricek yaşımı naz ile salınır ol yâr<br/>Cûyibar ile bulur serv-i hırâmân revnak<br/><br/>İşidip nâlemi handân olur ol yâr bulur<br/>Na'ra-i bülbül ile gonca-i handân revnak`
];

const form = document.querySelector(".form");
const result = document.querySelector(".text");
const amount = document.getElementById("amount");

form.addEventListener("submit", function (a) {
    a.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * poetries.length);
    if (isNaN(value) || value < 0 || value > 5) {
        result.innerHTML = `<p class="result" >${poetries[random]}</p>`;

    }else {
        let tempText = poetries.slice(0, value);
        tempText = tempText.map(function (item) {
            return `<p class="result">${item}</p>`
        }).join("");
        result.innerHTML = tempText;
    } 
});
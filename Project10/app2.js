let chartArray = [];
let categoriesArray = [];
const settings = {
    url: 'https://api.openweathermap.org/data/2.5/forecast/',
    key: '',
    iconUrl: 'https://openweathermap.org/img/wn/',
    location: 'sivas',
}

const options = {
    series: [{
        name: "Sıcaklık",
        data: []
    }],
    chart: {
        height: 600,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Hava Durumu',
        align: 'center',
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'],
        },
    },
    xaxis: {
        categories: [],
    },
    yaxis: {
        labels: {
            formatter: (value) => { return value + '°C' },
        },
    },
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

/**
 * .lang("tr") for day names in TR 
 */
for (let index = 0; index < 7; index++) {
    const days = moment(Date.now()).add(index, 'days')
    categoriesArray.push(days.locale("tr").format('dddd'));
    if (index === 6) {
        chart.updateOptions({
            xaxis: {
                categories: categoriesArray
            }
        })
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let query = `${settings.url}?q=${settings.location}&cnt=7&appid=${settings.key}&units=metric&lang=tr`
    // console.log("Json olarak tutulan link: ", query);
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then((info) => {
            info.list.forEach((element, index) => {
                chartArray.push(element.main.temp)
                if (index === 6) {
                    chart.updateOptions({
                        series: [
                            {
                                data: chartArray
                            }
                        ]
                    })
                }
            });
        });
})

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", (event) => {
    if (event.keyCode == '13') {
        getResult(searchBar.value)
    }
});

const getResult = (cityname) => {
    let query = `${settings.url}?q=${cityname}&cnt=7&appid=${settings.key}&units=metric&lang=tr`
    console.log("Json link burada ",query);
    fetch(query)
    .then(weather => {
        return weather.json();
    })
    .then((info) => {
        let testArray = []
        info.list.forEach((element, index) => {
            console.log("Sıcaklıklar ", element.main.temp);
            testArray.push(element.main.temp)
            if (index === 6) {
                chart.updateOptions({
                    series: [
                        {
                            data: testArray
                        }
                    ]
                })
            }
        });
    })
    
}

document.addEventListener('DOMContentLoaded', () => {
    searchBar.focus(); // search input auto focus
})
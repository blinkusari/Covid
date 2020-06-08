
// Te dhenat per Koronavirus nga API
(function($) {
    "use strict"

    $.getJSON("https://api.apify.com/v2/key-value-stores/C10heVVVE8yBd1YvF/records/LATEST?disableRedirect=true", function(v2){
    console.log(v2);

    var teInfektuar = v2.infected;
    var teSheruar = v2.recovered;
    var teVdekur = v2.deceased;
    var u = v2.lastUpdatedAtApify.split("T");
    var up = u[0].split("-").reverse().join("/");
    var upd = u[1].split(":");
    var upda = upd[0] + ":" + upd[1];
    var update = up + " " + upda;



    var p = (teVdekur/teInfektuar)*100;
    var per = p.toFixed(2);
    var perqindja = per.concat('%');

    $(".teInfektuar").text(teInfektuar);
    $(".teSheruar").text(teSheruar);
    $(".teVdekur").text(teVdekur);
    $(".perqindja").text(perqindja);
    $('.update').each(function() {
        $(this).text(update);
    });

})
})(jQuery);

function search() {
    let inputi = document.getElementById('search').value;
    var koha;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    today = dd;

    if((today >= 21 && today <= 23) || (today >= 27 && today <= 30)){
      switch (inputi) {
          case "0":
          case "1":
            koha = "07:00 - 08:30";
          break;
          case "2":
            koha = "09:00 - 10:30";
          break;
          case "3":
            koha = "11:00 - 12:30";
          break;
          case "4":
            koha = "13:00 - 14:30";
          break;
          case "5":
          case "6":
            koha = "15:00 - 16:30";
          break;
          case "7":
            koha = "17:00 - 18:30";
          break;
          case "8":
            koha = "19:00 - 20:30";
          break;
          case "9":
            koha = "21:00 - 22:30";
          break;
          default:
              koha = "Numri është shënuar gabim!";
        }
      } else if((today >= 24 && today <= 26) || (today >= 01 && today <= 04)){
        switch (inputi) {
            case "5":
            case "6":
              koha = "07:00 - 08:30";
            break;
            case "0":
              koha = "09:00 - 10:30";
            break;
            case "1":
              koha = "11:00 - 12:30";
            break;
            case "8":
              koha = "13:00 - 14:30";
            break;
            case "7":
            case "9":
              koha = "15:00 - 16:30";
            break;
            case "2":
              koha = "17:00 - 18:30";
            break;
            case "3":
              koha = "19:00 - 20:30";
            break;
            case "4":
              koha = "21:00 - 22:30";
            break;
            default:
                koha = "Numri është shënuar gabim!";
          }
        } else{
          koha = "Ka ndodhur një Gabim! Shikoni nëse data në pajisjen tuaj është në rregull.<br><br> <span>Gjithashtu ky program do të funksionoj vetëm gjatë kohës kur ligji për kufizim të lëvizjes është në fuqi. (deri më 04/05/2020)</span>";
        }

            document.getElementById("kohajuaj").innerHTML = koha;

      
}

//doughnat Chart nga Chart.js
var ctx = document.getElementById("doughutChart");
    ctx.height = 320;
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [166, 196, 61],
                backgroundColor: [
                    "rgba(49, 208, 147,0.9)",
                    "rgba(49, 208, 147,0.6)",
                    "rgba(49, 208, 147,0.3)",
                ],
                hoverBackgroundColor: [
                    "rgba(49, 208, 147,0.9)",
                    "rgba(49, 208, 147,0.6)",
                    "rgba(49, 208, 147,0.3)",
                ]

            }],
            labels: [
                "Femra",
                "Meshkuj",
                "Të pakonfirmuar",
            ]
        },
        options: {
            responsive: true,
        }
    });


(function($) {
    "use strict"

var ctx = document.getElementById("singelBarChart");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70+", "Jo të ditura"],
            datasets: [
                {
                    label: "Rastet",
                    data: [6, 12, 20, 12, 11, 12, 4, 9, 138],
                    borderColor: "rgb(49, 208, 147)",
                    borderWidth: "1",
                    backgroundColor: "rgba(49, 208, 147, 0.6)"
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
})(jQuery);

(function($) {
    "use strict"

    $.getJSON("https://api.apify.com/v2/datasets/ruoBcTzhMpN6SaeS2/items?format=json&clean=1", function(datasets){
    var ctx = document.getElementById("chart_widget_2");
    ctx.height = 150;
    var labels = datasets.map(function (e) {
                var lab = e.lastUpdatedAtApify.split("T");
                var a = lab[0].split("-");
                var b = a[2] + "/" + a[1];
                return b;
            });
    var dataCases = datasets.map(function (e) {
        if(e.identifiedCases <= 112){
            return e.identifiedCases;
        }
        return e.infected;
    });
    var dataRecovered = datasets.map(function (e) {
        return e.recovered;
    });
    var dataDeceased = datasets.map(function (e) {
                return e.deceased;
            });
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Rastet e Vdekjes",
                    borderColor: "rgb(222, 82, 35)",
                    borderWidth: "1",
                    backgroundColor: "rgba(224, 105, 50, 0.5)",
                    data: dataDeceased
                },
                {
                    label: "Të shëruar",
                    borderColor: "rgb(254, 155, 4)",
                    borderWidth: "1",
                    backgroundColor: "rgba(229, 216, 138, 1)",
                    pointHighlightStroke: "rgba(117, 113, 249,1)",
                    data: dataRecovered
                },
                {
                    label: "Rastet e Konfirmuara",
                    borderColor: "rgb(117, 214, 156)",
                    borderWidth: "1",
                    backgroundColor: "rgba(117, 214, 156, 0.6)",
                    data: dataCases
                }
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
            
        }
    });
    });


})(jQuery);

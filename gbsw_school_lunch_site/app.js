let today = null;
let month = null;
let date = null;
document.getElementById('sertext').style.display = "none"


today = new Date();
month = String(today.getMonth() + 1);  // 월을 문자열로 변환
date = String(today.getDate());  // 날짜를 문자열로 변환
if (month < 10) {
    month = "0" + month;
}
today = month + date;  // 문자열로 변환된 월과 날짜를 이어붙임

document.getElementById('day').innerHTML = month;
document.getElementById('day2').innerHTML = date;

console.log(today);
function fetchData(day) {
    fetch("https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=R10&SD_SCHUL_CODE=8750767&KEY=c36c716496a64cd88215c3a471510347&MLSV_YMD=2024" + day + "&plndex=1&pSize=&type=json")
    .then(response => response.json())
    .then(data => {
        // 데이터 처리
        console.log(data.mealServiceDietInfo[1].row[0].DDISH_NM);
        document.getElementById('foodbox1').innerHTML = data.mealServiceDietInfo[1].row[0].DDISH_NM;
        document.getElementById('foodbox2').innerHTML = data.mealServiceDietInfo[1].row[1].DDISH_NM;
        document.getElementById('foodbox3').innerHTML = data.mealServiceDietInfo[1].row[2].DDISH_NM;

        document.getElementById('day').innerHTML = month;
        document.getElementById('day2').innerHTML = date;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function fetchfulData(fulday) {
    fetch("https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=R10&SD_SCHUL_CODE=8750767&KEY=c36c716496a64cd88215c3a471510347&MLSV_YMD=" + fulday + "&plndex=1&pSize=&type=json")
    .then(response => response.json())
    .then(data => {
        // 데이터 처리
        console.log(data.mealServiceDietInfo[1].row[0].DDISH_NM);
        document.getElementById('foodbox1').innerHTML = data.mealServiceDietInfo[1].row[0].DDISH_NM;
        document.getElementById('foodbox2').innerHTML = data.mealServiceDietInfo[1].row[1].DDISH_NM;
        document.getElementById('foodbox3').innerHTML = data.mealServiceDietInfo[1].row[2].DDISH_NM;

        document.getElementById('day').innerHTML = month;
        document.getElementById('day2').innerHTML = date;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function serbab() {
    document.getElementById('foodbox1').innerHTML = " ";
    document.getElementById('foodbox2').innerHTML = " ";
    document.getElementById('foodbox3').innerHTML = " ";
    let serdate = document.getElementById('date');
    console.log(serdate.value);
    document.getElementById('sertop').innerHTML = serdate.value;
    let formattedDate = serdate.value.replace(/-/g, '');
    console.log(formattedDate);
    fetchfulData(formattedDate);
    document.getElementById('sertext').style.display = "inline"
}


fetchData(today);



// fetch("https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=R10&SD_SCHUL_CODE=8750767&KEY=c36c716496a64cd88215c3a471510347&MLSV_YMD=20240425&type=json&plndex=1&pSize=10")
// .then(response => response.json())
// .then(data => {
//     // 데이터 처리
//     console.log(data.mealServiceDietInfo[1].row[0].DDISH_NM);
//     document.getElementById('foodbox1').innerHTML = data.mealServiceDietInfo[1].row[0].DDISH_NM;
//     document.getElementById('foodbox2').innerHTML = data.mealServiceDietInfo[1].row[1].DDISH_NM;
//     document.getElementById('foodbox3').innerHTML = data.mealServiceDietInfo[1].row[2].DDISH_NM;
// })
// .catch(error => {
//     console.error('Error:', error);
// });
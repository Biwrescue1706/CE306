// สร้าง array เปล่าสำหรับแต่ละเดือน
const jan = [], feb = [], mar = [], apr = [], may = [], jun = [], 
      jul = [], aug = [], sep = [], oct = [], nov = [], dec = [];

// กำหนดจำนวนวันในแต่ละเดือน
const daysInMonth = {
    jan: 31, feb: 28, mar: 31, apr: 30,
    may: 31, jun: 30, jul: 31, aug: 31,
    sep: 30, oct: 31, nov: 30, dec: 31
};

// ฟังก์ชันเพื่อเติมวันที่ลงในแต่ละเดือน
function fillDays(monthArray, days) {
    for (let day = 1; day <= days; day++) {
        monthArray.push(day);
    }
}

// เติมจำนวนวันลงในแต่ละเดือนโดยเรียกใช้ฟังก์ชัน fillDays
fillDays(jan, daysInMonth.jan);
fillDays(feb, daysInMonth.feb);
fillDays(mar, daysInMonth.mar);
fillDays(apr, daysInMonth.apr);
fillDays(may, daysInMonth.may);
fillDays(jun, daysInMonth.jun);
fillDays(jul, daysInMonth.jul);
fillDays(aug, daysInMonth.aug);
fillDays(sep, daysInMonth.sep);
fillDays(oct, daysInMonth.oct);
fillDays(nov, daysInMonth.nov);
fillDays(dec, daysInMonth.dec);

// แสดงผลลัพธ์ใน console
console.log("Jan:", jan);
console.log("Feb:", feb);
console.log("Mar:", mar);
console.log("Apr:", apr);
console.log("May:", may);
console.log("Jun:", jun);
console.log("Jul:", jul);
console.log("Aug:", aug);
console.log("Sep:", sep);
console.log("Oct:", oct);
console.log("Nov:", nov);
console.log("Dec:", dec);

const openButton = document.getElementById("openButton");
const welcome = document.getElementById("welcome");
const mainPage = document.getElementById("mainPage");

const continueButton = document.getElementById("continueButton");
const messagePage = document.getElementById("messagePage");
const letterPage = document.getElementById("letterPage");

const letterContinueButton = document.getElementById("letterContinueButton");
const storiesPage = document.getElementById("storiesPage");
const storiesContinueButton = document.getElementById("storiesContinueButton");

const birthdayPhotosPage = document.getElementById("birthdayPhotosPage");
const birthdayContinueButton = document.getElementById("birthdayContinueButton");

const cakePage = document.getElementById("cakePage");
const cutCakeButton = document.getElementById("cutCakeButton");

const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");


/* فتح المفاجأة */

openButton.addEventListener("click", function () {

    welcome.classList.add("hide");

    setTimeout(function () {
        mainPage.classList.add("show");
    }, 700);

});


/* الرسالة → الخطاب */

continueButton.addEventListener("click", function () {

    messagePage.style.opacity = "0";
    messagePage.style.transform = "scale(1.08)";
    messagePage.style.filter = "blur(10px)";

    setTimeout(function () {
        letterPage.classList.add("show");
    }, 500);

});


/* الخطاب → الاستوريهات */

letterContinueButton.addEventListener("click", function () {

    letterPage.style.opacity = "0";
    letterPage.style.transform = "scale(1.08)";
    letterPage.style.filter = "blur(10px)";

    setTimeout(function () {
        storiesPage.classList.add("show");
    }, 500);

});


/* الاستوريهات → صور الدكتورة */

storiesContinueButton.addEventListener("click", function () {

    storiesPage.classList.remove("show");

    setTimeout(function () {
        birthdayPhotosPage.classList.add("show");
    }, 500);

});


/* صور الدكتورة → الكيكة */

birthdayContinueButton.addEventListener("click", function () {

    birthdayPhotosPage.classList.remove("show");

    setTimeout(function () {
        cakePage.classList.add("show");
    }, 500);

});


/* تقطيع الكيكة */

cutCakeButton.addEventListener("click", function () {

    const cake = document.querySelector(".cake");

    cake.classList.add("cut");

    setTimeout(function () {

        document.querySelector(".cake-text").innerHTML =
            "كل سنة وإنتِ طيبة يا لوليتا 🤍🎂";

        cutCakeButton.innerHTML = "🤍";
        cutCakeButton.disabled = true;

    }, 900);

});


/* تشغيل وإيقاف الأغنية */

musicToggle.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicToggle.innerHTML = "⏸";

    } else {

        music.pause();

        musicToggle.innerHTML = "▶";

    }

});
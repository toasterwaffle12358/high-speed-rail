window.onscroll = function() {scrollFunction()};


let topbarelements = document.querySelectorAll('.topbarelement');
let topbar = document.getElementById("topbar");
let navbarmenubutton = document.getElementById("navbarmenubutton");
let navbarmenuicon = document.getElementById("navbarmenuicon");
let topbarcontainer = document.getElementById("topbarcontainer");
let highspeedrailheader = document.getElementById("high_speed_rail_header")
let menubuttonisclicked = false;
let topbaropenandscrolled = false;


function clickHandler(){
    if (menubuttonisclicked == true) {
        topbar.classList.add('topbarscrolled');
        navbarmenubutton.classList.add('topbarscrolled');
        navbarmenuicon.classList.add('topbarscrolled');
        topbarcontainer.classList.add('topbarscrolled');
        menubuttonisclicked = false;
        topbaropenandscrolled = false;
    } else {
        menubuttonisclicked = true;
        topbar.classList.remove('topbarscrolled');
        //navbarmenubutton.classList.remove('topbarscrolled');
        //navbarmenuicon.classList.remove('topbarscrolled');
        topbarcontainer.classList.remove('topbarscrolled');
        topbaropenandscrolled = true;
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

navbarmenubutton.addEventListener('click', clickHandler);


function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        for (let elem of topbarelements) {
            //not at top of page
            //elem.classList.add('topbarscrolled');
            //elem.classList.remove('topbarattop');
            if (topbaropenandscrolled == false) {
                topbar.classList.add('topbarscrolled');
                navbarmenubutton.classList.add('topbarscrolled');
                navbarmenuicon.classList.add('topbarscrolled');
                topbarcontainer.classList.add('topbarscrolled');
            }
        }
    } else {
        for (let elem of topbarelements) {
            //at top of page
            //elem.classList.remove('topbarscrolled');
            //elem.classList.add('topbarattop');
            topbar.classList.remove('topbarscrolled');
            navbarmenubutton.classList.remove('topbarscrolled');
            navbarmenuicon.classList.remove('topbarscrolled');
            topbarcontainer.classList.remove('topbarscrolled');
            topbaropenandscrolled = false;
            
        }
    }
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        highspeedrailheader.classList.add("hsr_scrolled");
    } else {
        highspeedrailheader.classList.remove("hsr_scrolled");
    }

    if (isInViewport(document.getElementById("info3header")) == true) {
        document.getElementById("info3header").classList.add("infoheadershown")
    } else {
        document.getElementById("info3header").classList.remove("infoheadershown")
    }

    if (isInViewport(document.getElementById("info2header")) == true) {
        document.getElementById("info2header").classList.add("infoheadershown")
    } else {
        document.getElementById("info2header").classList.remove("infoheadershown")
    } 

    if (isInViewport(document.getElementById("info4header")) == true) {
        document.getElementById("info4header").classList.add("infoheadershown")
    } else {
        document.getElementById("info4header").classList.remove("infoheadershown")
    }

    if (isInViewport(document.getElementById("info5header")) == true) {
        document.getElementById("info5header").classList.add("infoheadershown")
    } else {
        document.getElementById("info5header").classList.remove("infoheadershown")
    }
}
let is_showco2reducedimg_open = false;
let is_showtraveltimes_open = false;
let is_showcarcrash_open = false;
let infoimg1 = document.getElementById("infoimg1")
let infoimg2 = document.getElementById("infoimg2")
let infoimg3 = document.getElementById("infoimg3")


function showco2reducedimg() {
    if (is_showco2reducedimg_open == false) {
        infoimg1.classList.add("infoimgopen")
        infoimg2.classList.remove("infoimgopen")
        infoimg3.classList.remove("infoimgopen")
        is_showco2reducedimg_open = true
        is_showtraveltimes_open = false
        is_showcarcrash_open = false
    } else {
        infoimg1.classList.remove("infoimgopen")
        is_showco2reducedimg_open = false
    }
}
function showtraveltimesimg() {
    if (is_showtraveltimes_open == false) {
        infoimg2.classList.add("infoimgopen")
        infoimg1.classList.remove("infoimgopen")
        infoimg3.classList.remove("infoimgopen")
        is_showtraveltimes_open = true
        is_showco2reducedimg_open = false
        is_showcarcrash_open = false
    } else {
        infoimg2.classList.remove("infoimgopen")
        is_showtraveltimes_open = false
    }
   
}
function showcarcrashimg() {
    if (is_showcarcrash_open == false) {
        infoimg3.classList.add("infoimgopen")
        infoimg1.classList.remove("infoimgopen")
        infoimg2.classList.remove("infoimgopen")
        is_showco2reducedimg_open = false
        is_showtraveltimes_open = false
        is_showcarcrash_open = true
    } else {
        infoimg3.classList.remove("infoimgopen")
        is_showcarcrash_open = false
    }
}
/*tabs*/
var links = document.querySelectorAll(".tabs-list a")
var items = document.querySelectorAll(".tabs-list li")
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault();
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        var tabId = this.querySelector("a").getAttribute("href");
        console.log(this.classList);
        document.querySelectorAll(".tabs-list li, .searchWindow .search").forEach(function(item) {
            item.classList.remove("active");
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active");
        this.classList.add("active");
    }
}


/*option*/
var globe = document.querySelector("#globe");
var optionWindow = document.querySelector("#option");
var windowElement = document.querySelector('#option .window');
globe.onclick = function() {
    optionWindow.classList.add("active");
    //스크롤 비활성화
    var scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, scrollY);
    windowElement.style.transform = 'translate(-50%, -50%) translateY(-50vh)';
}

var back = document.querySelector("#option .dark");
back.onclick = function() {
    //설정창 올라옴
    windowElement.style.transform = 'translate(-50%, -50%) translateY(0)';
    //300ms 뒤에 스크롤 활성화
    setTimeout(function() {
        optionWindow.classList.remove("active");
        document.body.style.overflow = "";
    }, 300)
}

var close = document.querySelector(".close");
close.onclick = function() {
    //설정창 내려감
    windowElement.style.transform = 'translate(-50%, -50%) translateY(0)';
    //300ms 뒤에 스크롤 활성화
        setTimeout(function() {
            optionWindow.classList.remove("active");
            document.body.style.overflow = "";
        }, 300)
}

var languages = document.querySelectorAll(".language section span");
for (var i = 0; i < languages.length; i++) {
    languages[i].onclick = function() {
        document.querySelectorAll(".language section span").forEach(function(language) {
            language.classList.remove("active");
        });
        this.classList.add("active");
    }
}

var currency = document.querySelectorAll(".money section span");
for (var i = 0; i < currency.length; i++) {
    currency[i].onclick = function() {
        document.querySelectorAll(".money section span").forEach(function(currency) {
            currency.classList.remove("active");
        });
        this.classList.add("active");
    }
}


var pages = document.querySelectorAll("#option .tabs a")
var buttons = document.querySelectorAll("#option .tabs li")
for (var i = 0; i < pages.length; i++) {
    pages[i].onclick = function(e) {
        e.preventDefault();
    }
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        var tabId = this.querySelector("a").getAttribute("href");
        console.log(this.classList);
        document.querySelectorAll("#option .page").forEach(function(page) {
            page.classList.remove("active");
        });
        document.querySelectorAll("#option .tabs li").forEach(function(button) {
            button.classList.remove("active");
        });
        document.querySelector(tabId).classList.add("active");
        this.classList.add("active");
    }
    buttons[i].addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
        var that = this;
        setTimeout(function() {
            that.style.transform = 'scale(1)';
        }, 200);
    });
}
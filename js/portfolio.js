document.addEventListener('DOMContentLoaded', function() {
    var itemsFilter = document.querySelectorAll("[data-slug]");
    var itemsPortfolio = document.querySelectorAll(".portfolio__img-wrapper");

    for (var i = 0; i <itemsFilter.length; i++) {
        itemsFilter[i].addEventListener("click", addClassActive);
    }

    function addClassActive() {
        for (var i = 0; i < itemsFilter.length; i++) {
            if (itemsFilter[i].classList.contains("portfolio__filter-active")) {
                itemsFilter[i].classList.remove("portfolio__filter-active");
            }
        }
        this.classList.add("portfolio__filter-active");
        for (var j = 0; j < itemsPortfolio.length; j++) {
            if(itemsPortfolio[j].classList.contains("portfolio-js")){
                itemsPortfolio[j].classList.remove("portfolio-js");
            }
        }
        for (var y = 0; y < itemsPortfolio.length; y++) {
                if(Math.round(Math.random())==1){
                    itemsPortfolio[y].classList.add("portfolio-js");
                }
        }
    }
});
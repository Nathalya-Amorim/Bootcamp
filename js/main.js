(() => {

    let teammate1 = document.querySelector("#teammate1");
    let teammate2 = document.querySelector("#teammate2");
    let teammate3 = document.querySelector("#teammate3");
    let teammate4 = document.querySelector("#teammate4");

    let profileOverlayPanel = document.querySelector("#profile-overlay-panel");
    let btnCloseProfileOverlay = document.querySelector("#close-profile-overlay");

    let product1 = document.querySelector("#product1");
    let product2 = document.querySelector("#product2");
    let product3 = document.querySelector("#product3");
    let product4 = document.querySelector("#product4");
    let product5 = document.querySelector("#product5");
    let product6 = document.querySelector("#product6");

    let portfolioOverlayPanel = document.querySelector("#portfolio-overlay-panel");
    let btnClosePortfolioOverlay = document.querySelector("#close-portfolio-overlay");

    function openProfile() {
        var profileId = "#" + this.dataset.profile + "-profile";

        profileOverlayPanel.style.display = "block";
        document.querySelector(profileId).style.display = "block";
        btnCloseProfileOverlay.dataset.lastProfileId = profileId; 
    }

    function closeProfile() {
        var profileId = this.dataset.lastProfileId;

        document.querySelector(profileId).style.display = "none";
        profileOverlayPanel.style.display = "none";
    }

    function openPortfolioProduct() {
        var productId = "#" + this.dataset.product + "-product";

        portfolioOverlayPanel.style.display = "block";
        document.querySelector(productId).style.display = "block";
        btnClosePortfolioOverlay.dataset.lastProductId = productId; 
    }

    function closePortfolioProduct() {
        var productId = this.dataset.lastProductId;

        document.querySelector(productId).style.display = "none";
        portfolioOverlayPanel.style.display = "none";
    }

    teammate1.addEventListener("click", openProfile);
    teammate2.addEventListener("click", openProfile);
    teammate3.addEventListener("click", openProfile);
    teammate4.addEventListener("click", openProfile);
    btnCloseProfileOverlay.addEventListener("click", closeProfile);

    product1.addEventListener("click", openPortfolioProduct);
    product2.addEventListener("click", openPortfolioProduct);
    product3.addEventListener("click", openPortfolioProduct);
    product4.addEventListener("click", openPortfolioProduct);
    product5.addEventListener("click", openPortfolioProduct);
    product6.addEventListener("click", openPortfolioProduct);
    btnClosePortfolioOverlay.addEventListener("click", closePortfolioProduct);

})();
(() => {

    let project1 = document.querySelector("#project1");
    let project2 = document.querySelector("#project2");
    let project3 = document.querySelector("#project3");
    let project4 = document.querySelector("#project4");
    let project5 = document.querySelector("#project5");
    let project6 = document.querySelector("#project6");

    let portfolioOverlayPanel = document.querySelector("#portfolio-overlay-panel");
    let btnClosePortfolioOverlay = document.querySelector("#close-portfolio-overlay");

    function openPortfolioProject() {
        var projectId = "#" + this.dataset.project + "-portfolio";

        portfolioOverlayPanel.style.display = "block";
        document.querySelector(projectId).style.display = "block";
        btnClosePortfolioOverlay.dataset.lastProjectId = projectId; 
    }

    function closePortfolioProject() {
        var projectId = this.dataset.lastProjectId;

        document.querySelector(projectId).style.display = "none";
        portfolioOverlayPanel.style.display = "none";
    }

    project1.addEventListener("click", openPortfolioProject);
    project2.addEventListener("click", openPortfolioProject);
    project3.addEventListener("click", openPortfolioProject);
    project4.addEventListener("click", openPortfolioProject);
    project5.addEventListener("click", openPortfolioProject);
    project6.addEventListener("click", openPortfolioProject);
    btnClosePortfolioOverlay.addEventListener("click", closePortfolioProject);

})();
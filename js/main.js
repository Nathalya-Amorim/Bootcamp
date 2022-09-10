(() => {

    let teammate1 = document.querySelector("#teammate1");
    let teammate2 = document.querySelector("#teammate2");
    let teammate3 = document.querySelector("#teammate3");
    let teammate4 = document.querySelector("#teammate4");
    let overlayPanel = document.querySelector("#profile-overlay-panel");
    let btnCloseProfileOverlay = document.querySelector("#close-profile-overlay");

    function openProfile() {
        var profileId = "#" + this.dataset.profile + "-profile";

        overlayPanel.style.display = "block";
        document.querySelector(profileId).style.display = "block";
        btnCloseProfileOverlay.dataset.lastProfileId = profileId; 
    }

    function closeProfile() {
        //TODO: Implement this
        var profileId = this.dataset.lastProfileId;

        document.querySelector(profileId).style.display = "none";
        overlayPanel.style.display = "none";
    }

    teammate1.addEventListener("click", openProfile);
    teammate2.addEventListener("click", openProfile);
    teammate3.addEventListener("click", openProfile);
    teammate4.addEventListener("click", openProfile);
    btnCloseProfileOverlay.addEventListener("click", closeProfile);

})();
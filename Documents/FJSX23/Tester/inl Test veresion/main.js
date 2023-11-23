const infoContainer = document.getElementById("info-container");
console.log(infoContainer)

async function getAbout() {
    // console.log("innuti getabout")
    const response = await fetch('./about.json');
    if (response.ok) {
        const json = await response.json();
        console.log(json);
        // about = json.about;
        // omMig = json.omMig;
        // utbildningar = json.utbildningar;
        // erfarenheter = json.erfarenheter;
        // extra = json.extra;
        showAbout(json);
        showAboutMe(json);
        showEducationTitle(json);
        showExperience(json);
    } else {
        console.log("HTTP-error:" + response.status)
    }
}

getAbout();

function showAbout(jsonPart) {
        console.log(jsonPart);
        const cvHeader = document.createElement("h1");
        cvHeader.textContent = jsonPart.about.mainHeader;
        infoContainer.appendChild(cvHeader);
    }

function showAboutMe(jsonPart) {
    const omMigHeader = document.createElement("h2");
    omMigHeader.textContent = jsonPart.omMig.name;
    infoContainer.appendChild(omMigHeader);

    const omMigPara = document.createElement("p");
    omMigPara.textContent = jsonPart.omMig.info;
    infoContainer.appendChild(omMigPara);
}

function showEducationTitle(jsonPart) {
    const educationDiv = document.createElement("div");
    const educations = jsonPart.utbildningar;
    educations.forEach(function (education) {
        console.log(education);
        const educationTitle = document.createElement("h2");
        educationTitle.textContent = education.utbildning;
        console.log(educationTitle);
        educationDiv.appendChild(educationTitle);
    });

    const educationsDescr = jsonPart.utbildningar;
    educationsDescr.forEach(function (education) {
        const educationPara = document.createElement("p");
        educationPara.textContent = education.utbBeskrivning;
        educationDiv.appendChild(educationPara);
    });

    infoContainer.appendChild(educationDiv);
}

function showExperience(jsonPart) {
    const experienceDiv = document.createElement("div");
    const experiences = jsonPart.erfarenheter;
    experiences.forEach(function (experience) { 
        const experienceHeader = document.createElement("h2");
        experienceHeader.textContent = experience.arbetsPlats;
        experienceDiv.appendChild(experienceHeader);
        console.log(experienceHeader)
        // console.log(experiences);
    });

    const workDescriptions = jsonPart.erfarenheter;
    workDescriptions.forEach(function (workDescription) { 
        const workDescriptionPara = document.createElement("p");
        workDescriptionPara.textContent = workDescription.arbetsBeskrivning;
        experienceDiv.appendChild(workDescriptionPara);
    });

    infoContainer.appendChild(experienceDiv);
};



// document.addEventListener("DOMContentLoaded", async function () {
//     const jsonData = await getAbout();
//     // getAbout();

    

    
//     let aboutBtn = document.getElementById("about-btn")
//     let omMigBtn = document.getElementById("om-btn")
//     let utbBtn = document.getElementById("utb-btn")
//     let erfBtn = document.getElementById("erf-btn")
//     let extraBtn = document.getElementById("extra-btn")

    

//         aboutBtn.addEventListener("click", function () {
//             showAbout(jsonData.about);
//         });

//         omMigBtn.addEventListener("click", function () {
//             showAbout(jsonData.omMig);
//         });

//         utbBtn.addEventListener("click", function () {
//             showAbout(jsonData.utbildningar)
//         });

//         erfBtn.addEventListener("click", function () {
//             showAbout(jsonData.erfarenheter)
//         });

//         extraBtn.addEventListener("click", function () {
//             showAbout(jsonData.extra)
//         });
//     });
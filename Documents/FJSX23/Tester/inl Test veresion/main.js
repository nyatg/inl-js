const infoContainer = document.getElementById("info-container");
console.log(infoContainer)
let json; 

async function getAbout() {
    // console.log("innuti getabout")
    const response = await fetch('./about.json');
    if (response.ok) {
        json = await response.json();
        console.log(json);
        // about = json.about;
        // omMig = json.omMig;
        // utbildningar = json.utbildningar;
        // erfarenheter = json.erfarenheter;
        // extra = json.extra;
        showAbout(json);
        // showAboutMe(json);
        // showEducationTitle(json);
        // showExperience(json);
        // showExtra(json);
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
    
    const cvPara = document.createElement("p");
    cvPara.textContent = jsonPart.about.mainAbout;
    infoContainer.appendChild(cvPara);
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

        const educationPara = document.createElement("p");
        educationPara.textContent = education.utbBeskrivning;

        const educationSection = document.createElement("div"); 
        educationSection.appendChild(educationTitle);
        educationSection.appendChild(educationPara);

        educationDiv.appendChild(educationSection)
        
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

        const workDescriptionPara = document.createElement("p");
        workDescriptionPara.textContent = experience.arbetsBeskrivning;
        experienceDiv.appendChild(workDescriptionPara);
    });

    infoContainer.appendChild(experienceDiv);
};

function showExtra(jsonPart) {
    const extraDiv = document.createElement("div");
    infoContainer.appendChild(extraDiv);

   { const extraHdr = document.createElement("h2");
    extraHdr.textContent = jsonPart.extra.extraHeader;
        extraDiv.appendChild(extraHdr);  
    }
   
    {
        const extraInf = document.createElement("p");
        extraInf.textContent = jsonPart.extra.extraInfo;
        extraDiv.appendChild(extraInf);
    }

}

// EVENTLYSSNARE SOM TAR BORT OCH FRAM INFO:

const omBtn = document.getElementById("om-btn");
const utbBtn = document.getElementById("utb-btn");
const erfBtn = document.getElementById("erf-btn");
const extraBtn = document.getElementById("extra-btn");
const aboutBtn = document.getElementById("about-btn");

// const aboutDiv = document.getElementById("info-container")

aboutBtn.addEventListener("click", function () {
    infoContainer.innerHTML = "";
    console.log("Clicked 'aboutBtn'");
    showAbout(json);
});

omBtn.addEventListener("click", function () {
    infoContainer.innerHTML = "";
    console.log("Clicked 'omBtn'");
    showAboutMe(json);
});

utbBtn.addEventListener("click", function () {
    infoContainer.innerHTML = "";
    console.log("Clicked 'utbBtn'"); 
    showEducationTitle(json);
});

erfBtn.addEventListener("click", function () {
    infoContainer.innerHTML = "";
    console.log("Clicked 'erfBtn'");
    showExperience(json);
});

extraBtn.addEventListener("click", function () {
    infoContainer.innerHTML = "";
    console.log("Clicked 'extraBtn'"); 
    showExtra(json);
});


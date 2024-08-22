function printParagraph(choice) {

    var content = choice;
    var education = document.getElementById("education");
    var experience = document.getElementById("experience");
    var projects = document.getElementById("projects");
    var community = document.getElementById("community");
    var doc = document.getElementById(content);
    var text = document.getElementById("text");

    if (doc.checked == true && content == "education"){
        experience.checked = false;
        projects.checked = false;
        community.checked = false;
        text.innerHTML = '<div class="fade-in-1s"><p>I received my 4-year Bachelor of Science in Computing Science from The King&#39;s University in Edmonton, Alberta. My degree laid a solid foundation in understanding operating systems, cryptography and encryption, and the basics of coding, scripting, and web design.</p><br><p>I went on to complete a 1-year certificate in cybersecurity studies at NAIT. The topics of my coursework there ranged from social engineering, to threat and vulnerability analysis, to identity & access management.</p><br><p>I hold a current CompTIA Network+ certification (view on <a class="link" href="https://www.credly.com/badges/4733f433-a42d-4e24-a826-74cfc3656858/public_url" target="_blank">Credly</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg">).</p></div>';
    } else if (doc.checked == true && content == "experience"){
        education.checked = false;
        projects.checked = false;
        community.checked = false;
        text.innerHTML = '<div class="fade-in-1s"><p>I am currently employed as an IT Consultant in Edmonton's healthcare space. My duties include remote and on-site troubleshooting, monitoring and maintenance of our company's internal systems, and manning the helpdesk phone line. I also worked on the newest version of our company website, which was published in October of 2023.</p></div>';
    } else if (doc.checked == true && content == "projects"){
        education.checked = false;
        experience.checked = false;
        community.checked = false;
        text.innerHTML = '<div class="fade-in-1s"><p>I am currently working on creating a website that will allow visitors to peruse and reference the videogame reviews written in the Nintendo-centric videogame magazine <i>Nintendo Power</i>. This is something of a preservation project for me as the magazine proper was discontinued at the end of 2012 and was my favorite gaming magazine as a kid. I will only catalog reviews and ratings of issues I personally own, which means I'm always on the lookout for issues I don't have yet.</p></div>';
    } else if (doc.checked == true && content == "community"){
        education.checked = false;
        experience.checked = false;
        projects.checked = false;
        text.innerHTML = '<div class="fade-in-1s"><p>I am a member of the <a class="link" href="https://member.cira.ca" target="_blank">CIRA</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg">.</p><br><p>I spend much of my free time volunteering in choirs around the city. I sing in the tenor section of the <a class="link" href="https://kappellakyrie.org/" target="_blank">Kappella Kyrie Slavic Chamber Choir</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg"> as well as the schola and choir of the <a class="link" href="https://vitalgrandinchaplaincy.ca/get-involved/sacred-music" target="_blank">Vital Grandin Chaplaincy</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg">.</p></div>';
    } else {
        text.innerHTML = "";
    }
}

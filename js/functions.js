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
        text.innerHTML = '<div class="fade-in-1s"><p>I received my 4-year Bachelor of Science in Computing Science from The King&#39;s University in Edmonton. My degree laid a solid foundation in understanding operating systems, cryptography and encryption, and the basics of coding, scripting, and web design.</p><br><p>I went on to complete a 1-year certificate in cybersecurity studies at NAIT. The topics of my coursework there ranged from social engineering, to threat and vulnerability analysis, to identity & access management.</p><br><p>I hold a current CompTIA Network+ certification (view on <a class="link" href="https://www.credly.com/badges/4733f433-a42d-4e24-a826-74cfc3656858/public_url" target="_blank">Credly</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg">).</p></div>';
    } else if (doc.checked == true && content == "experience"){
        education.checked = false;
        projects.checked = false;
        community.checked = false;
        text.innerHTML = '<div class="fade-in-1s"><p>I am currently employed as an IT Consultant in Edmonton&apos;s healthcare space. My duties include remote and on-site troubleshooting, monitoring and maintenance of our company&apos;s internal systems, and manning the helpdesk phone line. I also worked on the newest version of our company website, which was published in October of 2023.</p></div>';
    } else if (doc.checked == true && content == "projects"){
        education.checked = false;
        experience.checked = false;
        community.checked = false;
        text.innerHTML = '<div class="fade-in-1s"><p>I am currently working on creating a website that will allow visitors to peruse and reference the videogame reviews written in the Nintendo-centric videogame magazine <i>Nintendo Power</i>. This is something of a preservation project for me as the magazine proper was discontinued in December of 2012 and was my favorite gaming magazine as a kid. I will only catalog reviews and ratings of issues I personally own, which means I am always on the lookout for issues I have not acquired yet.</p><p>I&apos;m currently working through hackthissite.org, but I have not finished yet!</p></div>';
    } else if (doc.checked == true && content == "community"){
        education.checked = false;
        experience.checked = false;
        projects.checked = false;
        text.innerHTML = '<div class="fade-in-1s"><p>I am a member of the <a class="link" href="https://www.cira.ca" target="_blank">Canadian Internet Registration Authority</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg">.</p><br><p>I spend much of my free time volunteering in choirs around the city, including the tenor section of the <a class="link" href="https://kappellakyrie.org/" target="_blank">Kappella Kyrie Slavic Chamber Choir</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg"> as well as the schola and choir of the <a class="link" href="https://vitalgrandinchaplaincy.ca/get-involved/sacred-music" target="_blank">Vital Grandin Chaplaincy</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg">. I was fortunate enough to be able to record an album of choral music with Kappella Kyrie this past year, which you can find below:</p><br><p><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=gFEtZxGoI1aIMFSP&amp;list=OLAK5uy_lgLYs-jT70WMd_RS2VFSpvuOkVvbINecA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p></div>';
    } else {
        text.innerHTML = "";
    }
}

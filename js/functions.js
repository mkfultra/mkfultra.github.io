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
        text.innerHTML = '<div class="fade-in-1s"><p>Matthew received his 4-year Bachelor of Science in Computing Science from The King&#39;s University in Edmonton, Alberta. His degree laid a solid foundation in understanding operating systems, cryptography and encryption, and the basics of coding, scripting, and web design.</p><br><p>He went on to complete a 1-year certificate in cybersecurity studies at NAIT. The topics of his coursework there ranged from social engineering studies, to threat and vulnerability analysis, to identity & access management.</p><br><p>Matthew holds a current CompTIA Network+ certification (view on <a class="link" href="https://www.credly.com/badges/4733f433-a42d-4e24-a826-74cfc3656858/public_url" target="_blank">Credly</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg">).</p></div>';
    } else if (doc.checked == true && content == "experience"){
        education.checked = false;
        projects.checked = false;
        community.checked = false;
        text.innerHTML = '<div class="fade-in-1s"><p>Matthew is currently employed as an IT Consultant at <a class="link" href="https://itrx.ca" target="_blank">ITRX</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg">. His duties include remote and on-site troubleshooting, monitoring and maintenance of ITRX internal systems, and manning the dispatch phone line. Matthew also worked on the newest version of the itrx.ca website, which was published in October of 2023.</p></div>';
    } else if (doc.checked == true && content == "projects"){
        education.checked = false;
        experience.checked = false;
        community.checked = false;
        text.innerHTML = '<div class="fade-in-1s"><p>Sorry, this content is on its way!</p></div>';
    } else if (doc.checked == true && content == "community"){
        education.checked = false;
        experience.checked = false;
        projects.checked = false;
        text.innerHTML = '<div class="fade-in-1s"><p>Matthew is a proud member of the <a class="link" href="https://member.cira.ca" target="_blank">CIRA</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg">.</p><br><p>Matthew spends his free time volunteering in choirs around the city. He sings in the tenor section of the <a class="link" href="https://kappellakyrie.org/" target="_blank">Kappella Kyrie Slavic Chamber Choir</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg"> led by The King&#39;s University professor Dr. Melanie Turgeon as well as the schola and choir of the <a class="link" href="https://vitalgrandinchaplaincy.ca/get-involved/sacred-music" target="_blank">Vital Grandin Chaplaincy</a><img alt="External Link Icon" class="external" src="assets/icons/ext.svg"> led by Elizabeth Gawrachynsky.</p></div>';
    } else {
        text.innerHTML = "";
    }
}
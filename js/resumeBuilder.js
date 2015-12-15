var bio = {
    "name": "Alistair McKelvie",
    "role": "Front end developer",
    "contacts": {
        "mobile": "+61 415 896 684",
        "email": "alistair.mckelvie@gmail.com",
        "twitter": "@Al_Mckelvie",
        "github": "github.com/AlistairMcKelvie",
        "location": "Melbourne, Australia"
    },
    "welcomeMessage": "Greetings!",
    "skills": [
        "Python",
        "HTML/CSS",
        "Javascript",
        "Java",
        "Kivy"
    ],
    "biopic": "images/fry.jpg",
    "display": function() {
        for (var method in this.contacts) {
            if (this.contacts.hasOwnProperty(method)) {
                $("#topContacts").append(HTMLcontactGeneric.replace(/%contact%/, method).replace(/%data%/, this.contacts[method]));
                $("#footerContacts").append(HTMLcontactGeneric.replace(/%contact%/, method).replace(/%data%/, this.contacts[method]));
            }
        }
        $("#header").prepend(HTMLheaderRole.replace(/%data%/, this.role));
        $("#header").prepend(HTMLheaderName.replace(/%data%/, this.name));
        $("#header").append(HTMLbioPic.replace(/%data%/, this.biopic));
        $("#header").append(HTMLwelcomeMsg.replace(/%data%/, this.welcomeMessage));

        if (this.skills.length != 0) {
            $("#header").append(HTMLskillsStart);
            this.skills.forEach(function(val) {
                $("#skills").append(HTMLskills.replace(/%data%/, val));
            });
        }
    }
};
bio.display();

var education = {
    "schools": [{
        "name": "Australian Bureau of Meteology Training Centre",
        "location": "Melbourne, Australia",
        "degree": "Graduate Diploma of Meteorology",
        "major": ["Meteorology"],
        "dates": 2011,
        "url": "http://www.bom.gov.au"
    }, {
        "name": "Monash University",
        "location": "Melbourne, Australia",
        "degree": "Bachelor of Science",
        "major": ["Applied Mathematics"],
        "dates": 2008,
        "url": "http://www.monash.edu.au/campuses/clayton/"
    }],
    "onlineCourses": [{
        "name": "Algorithms: Design: and Analysis, Part 1",
        "school": "Stanford University",
        "date": 2014,
        "url": "http://www.coursera.org/course/algo"
    }, {
        "name": "Algorithms: Design: and Analysis, Part 2",
        "school": "Stanford University",
        "date": 2015,
        "url": "http://www.coursera.org/course/algo2"
    }, {
        "name": "Cryptography 1",
        "school": "Stanford University",
        "date": 2014,
        "url": "http://www.coursera.org/course/crypto"
    }],
    "display": function() {
        this.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var schoolData = HTMLschoolName.replace(/%data%/, school.name).replace(/%url%/, school.url);
            schoolData += HTMLschoolDegree.replace(/%data%/, school.degree);
            schoolData += HTMLschoolDates.replace(/%data%/, school.dates);
            schoolData += HTMLschoolLocation.replace(/%data%/, school.location);
            schoolData += HTMLschoolMajor.replace(/%data%/, school.major);
            $(".education-entry:last").append(schoolData);
        })
        $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);
            var courseData = HTMLonlineTitle.replace(/%data%/, course.name).replace(/%url%/, course.url);
            courseData += HTMLonlineSchool.replace(/%data%/, course.school);
            courseData += HTMLonlineDates.replace(/%data%/, course.date);
            $(".education-entry:last").append(courseData);
        })
    }
};
education.display();

var work = {
    "jobs": [{
        "employer": "Offshore Weather Services",
        "title": "Meteorologist",
        "location": "Melbourne, Australia",
        "dates": "2008 - Present",
        "description": "Weather forecasting. Python programming."
    }, {
        "employer": "Chevron Thailand",
        "title": "Offshore Meteorologist",
        "location": "Gulf of Thailand, Thailand",
        "dates": "2012 - Present",
        "description": "Weather forecasting."
    },{
        "employer": "Monash University Water Studies Centre",
        "title": "Laboratory Technician",
        "location": "Melbourne, Australia",
        "dates": "2005 - 2008",
        "description": "Misc lab duties."
    }],
    "display": function() {
        this.jobs.forEach(function(val) {
            $("#workExperience").append(HTMLworkStart);
            var jobData = HTMLworkEmployer.replace(/%data%/, val.employer);
            jobData += HTMLworkTitle.replace(/%data%/, val.title);
            jobData += HTMLworkLocation.replace(/%data%/, val.location);
            jobData += HTMLworkDates.replace(/%data%/, val.dates);
            jobData += HTMLworkDescription.replace(/%data%/, val.description);
            $(".work-entry:last").append(jobData);
        })
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "dates": "October 2015 - November 2015",
        "description": "An online portfolio for Udacity Front End Developer Nanodegree",
        "image": "images/proj1.jpg"
    }, {
        "title": "Online Resume",
        "dates": "November 2015 - December 2015",
        "description": "An online portfolio for Udacity Front End Developer Nanodegree",
        "image": "images/proj2.jpg"
    }],
    "display": function() {
        this.projects.forEach(function(project) {
            $("#projectItems").append(HTMLprojectStart);
            var projData = HTMLprojectTitle.replace(/%data%/, project.title);
            projData += HTMLprojectDates.replace(/%data%/, project.dates);
            projData += HTMLprojectDescription.replace(/%data%/, project.description);
            projData += HTMLprojectImage.replace(/%data%/, project.image);
            $(".project-entry:last").append(projData);
        })
    }
};
projects.display();

$("#mapDiv").append(googleMap);

$("#headLink")[0].onclick = function() {
    $("html, body").animate({
        scrollTop: $("header").offset().top - 32
    }, 1000);
    return false;
};

$("#workExpLink")[0].onclick = function() {
    $("html, body").animate({
        scrollTop: $("#workExperience").offset().top - 32
    }, 1000);
    return false;
};

$("#projectsLink")[0].onclick = function() {
    $("html, body").animate({
        scrollTop: $("#projects").offset().top - 32
    }, 1000);
    return false;
};

$("#educationLink")[0].onclick = function() {
    $("html, body").animate({
        scrollTop: $("#education").offset().top - 32
    }, 1000);
    return false;
};

$("#mapLink")[0].onclick = function() {
    $("html, body").animate({
        scrollTop: $("#mapDiv").offset().top - 48
    }, 1000);
    return false;
};

const projectList = [
    {
        link: "god_sees_all_thumbnail.html",
        img: "img/God Sees All Thumbnail 3.png",
        title: "Ryan Xiao's YouTube God Sees All Piano Cover Thumbnail",
        date: "2023",
        alt: "Cover picture of Ryan Xiao's YouTube God Sees All Thumbnail",
    },
    {
        link: "goats_thumbnail.html",
        img: "img/Goats_Thumbnail.png",
        title: "Ryan Xiao's YouTube MTG Goats Thumbnail",
        date: "2023",
        alt: "Cover picture of Ryan Xiao's YouTube MTG Goats Thumbnail",
    },
    {
        link: "asian_airlines.html",
        img: "img/Asian Airlines v4 P1.png",
        title: "UTM FSA Asian Airlines Event Instagram Post",
        date: "2022",
        alt: "Cover picture of UTM FSA Asian Airlines Event Instagram Post",
    },
    {
        link: "fsa_election_results.html",
        img: "img/FSA Election Results Story No Glow.png",
        title: "UTM FSA Election Results Instagram Story",
        date: "2022",
        alt: "Cover picture of UTM FSA Election Results Instagram Story",
    },
    {
        link: "fsa_kingmaker.html",
        img: "img/Kingmaker Documentary Screening Poster Final 2.png",
        title: "UTM FSA Kingmaker Documentary Screening Poster",
        date: "2022",
        alt: "Cover picture of UTM FSA Kingmaker Documentary Screening Poster",
    },
    {
        link: "fsa_coffee_house.html",
        img: "img/FSA Coffee House Design 2.jpg",
        title: "UTM FSA Coffee House Poster Design",
        date: "2022",
        alt: "Cover picture of UTM FSA Coffee House Poster",
    },
    {
        link: "fsa_winter_office_hours.html",
        img: "img/FSA Timetable 2022 Final 2.jpg",
        title: "UTM FSA Winter 2022 Office Hours Timetable",
        date: "2022",
        alt: "Cover picture of UTM FSA Winter 2022 Office Hours Timetable",
    },
    {
        link: "fsa_christmas_fundraiser.html",
        img: "img/Christmas Fundraiser Post 5.jpg",
        title: "UTM FSA Christmas Fundraiser Instagram Post",
        date: "2021",
        alt: "Cover picture of UTM FSA Christmas Fundraiser Instagram Post",
    },
    {
        link: "fsa_executive_posts.html",
        img: "img/External Team Exec Intro.jpg",
        title: "UTM FSA Executive Introduction Instagram Posts",
        date: "2021",
        alt: "Cover picture of UTM FSA Executive Introduction Instagram Posts",
    },
    {
        link: "fsa_fall_office_hours.html",
        img: "img/FSA Timetable 11.jpg",
        title: "UTM FSA Fall 2021 Office Hours Timetable",
        date: "2021",
        alt: "Cover picture of UTM FSA Fall 2021 Office Hours Timetable",
    },
    {
        link: "patco_logo_design.html",
        img: "img/Patco Cafe Design 1.jpg",
        title: "Patco Cafe Logo Design",
        date: "2021",
        alt: "Cover picture of Patco Cafe Logo Design",
    },
    {
        link: "spring_showcase.html",
        img: "img/Spring Showcase Poster 6.jpg",
        title: "WAB Spring Concert Showcase Poster",
        date: "2021",
        alt: "Cover picture of WAB Spring Concert Showcase Poster",
    },
    {
        link: "las_tres_partnership.html",
        img: "img/Essential Oil Final.jpg",
        title: "Las Tres Maria's Partnership Project",
        date: "2021",
        alt: "Cover picture of Las Tres Marias Essential Oil Social Media posts",
    },
    {
        link: "las_tres_jar_labels.html",
        img: "img/14c77e77-7d66-4e72-a3f4-322ca47c6a76_rw_600.jpg",
        title: "Las Tres Maria's Jar Labels",
        date: "2020",
        alt: "Cover picture of Las Tres Marias Jar Labels",
    },
    {
        link: "grin_to_win_poster.html",
        img: "img/Grin to Win Livestream 3.jpg",
        title: "WAB Grin to Win Sports Event Livestream Poster",
        date: "2020",
        alt: "Cover picture of WAB Grin to Win Sports Event Livestream Poster",
    },
    {
        link: "halloween_poster.html",
        title: "WAB HS Student Council Halloween Costume Contest Poster",
        img: "img/Halloween Poster A4 Final.jpg",
        date: "2020",
        alt: "Cover picture of WAB HS Student Council Halloween Costume Contest Poster",
    },
    {
        link: "perfectly_adequate_poster.html",
        title: "Perfectly Adequate Advertisement Poster",
        img: "img/Perfectly Adequate Poster 2.jpg",
        date: "2020",
        alt: "Cover picture of Perfectly Adequate Advertisement Poster",
    },
];

const projectSection = document.getElementById("project-section");

projectList.forEach((post) => {
    const project = `<div class="col-sm-12 col-lg-6">
    <a
        href="pages/${post.link}"
        class="text-decoration-none"
    >
        <div class="cover-image-wrap">
            <img
                src="${post.img}"
                alt="${post.alt}"
            />
        </div>

        <div class="details-wrap">
            <div class="details">
                <div
                    class="details-inner text-white text-center"
                >
                    <h4>
                        ${post.title}
                    </h4>
                    <p class="date">${post.date}</p>
                </div>
            </div>
        </div>
    </a>
</div>`;

    projectSection.innerHTML += project;
});

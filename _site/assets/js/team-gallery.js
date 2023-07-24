var galleryData = {

    "data": [
        {
            "img": "assets/img/1_bielicki.jpg",
            "name": "Kim Bielicki",
            "department": "VHA Innovators Network (iNET)",
            "title": "InnoVAtion Specialist",
            "organization": "Orlando VA Health Care System",
            "description": "Kim Bielicki serves as an InnoVAtion Specialist at Orlando VA Health Care System. She built an innovation program that empowers and invests in employees with training, tools and resources to bring their innovative solutions to life based on empathy! She is a trusted leader of her local innovation community, iNET Community and Veteran Integrated Service Network (VISN) 8. She works with community health care innovation companies to co-design with Veterans and employees in mind. She facilitates trainings on: Human Centered Design, Building Your InnoVAtion Strategy, Pitching, Storytelling, High reliability Organization, Lean Six Sigma Belt Training & Own the Moment. She was honored as 2022 Innovation Specialist of the year, Civil Servant of the Year & Employee of the Month, and is a 2023 TEDx speaker."
        },
        {
            "img": "assets/img/2_brewer_lowry.jpg",
            "name": "Nichol Brewer-Lowry, M.Sc.",
            "department": "",
            "title": "Site Director, Boston",
            "organization": "Native American LifeLines",
            "description": "Nichol Brewer-Lowry is an enrolled member of the Lumbee Tribe of North Carolina. Nichol serves as the Site Director for Native American LifeLines Boston, an Urban Indian Organization. She is a Park Scholar and Coca-Cola Scholar who received a Bachelor of Science in Biochemistry from North Carolina State University. She continued her education at Chicago Medical School, where she earned a Master of Science in Biomedical Science and a Master of Science in Health Administration while completing coursework toward a Medical Doctor degree. Health issues prevented the completion of her M.D. degree, but she has recovered after spending more than two and a half years bed bound. Nichol has worked as a professor at various colleges.  During the pandemic, Nichol worked as a 7th and 8th grade science teacher at Magnolia Elementary School in her tribal community.  Nichol enjoys being an aunt and loves spending time with her family."
        }                       
    ]

}


// render static gallery data
galleryData.data.forEach(gal => $('.gallery--tile-container').append("<div class='grid-col-12 tablet:grid-col-12 tablet-lg:grid-col-3 padding-top-2 padding-bottom-2 min-mobile-lg'>" + "<a class='gallery-tags' href='#gallery-modal'  aria-controls='gallery-modal' data-open-modal data-src='" + gal.img + "' data-name='" + gal.name + "' data-department='" + gal.department + "' data-title='" + gal.title + "' data-organization='" + gal.organization + "' data-description='" + gal.description + "'>" + "<div class='usa-card__container padding-0 text-primary bg-base-lightest boxComingSoon grid-box grid-box-a modal-toggle' >" + "<img src='" + gal.img + "' />" + "<span class='gallery-name'>" + gal.name + "</span>" + "<span>" + gal.department + "</span>" + "<span>" + gal.title + "</span>" + "<span>" + gal.organization + "</span>" + "</div>" + "</a>" +
"</div>")); 

// render modal window data
$("a.gallery-tags").click(function () {
    $('.modal-img').attr('src', $(this).data('src'));
    $('.modal-name').html($(this).data('name'));
    $('.modal-department').html($(this).data('department'));
    $('.modal-title').html($(this).data('title'));
    $('.modal-organization').html($(this).data('organization'));
    $('.modal-description').html($(this).data('description'));
});

// remove empty elements
$(".publication-list__item-container span:empty" ).remove();
$(".publication-list__item-container p:empty" ).remove();

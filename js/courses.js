"use strict";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var accordionTemplate = function accordionTemplate(course, index) {
      if (course.trade === "Electrical") {
        return "\n      <div  id=\"accordion\"class=\"accordion quaterhalf-width mobile-full-width\">\n        <div  class=\" accordion-header background-faded-grey padded mobile-accordion\">\n          <h3 class=\"title-secondary \">".concat(course.name, "</h3>\n          <!-- <div class=\"button button-primary\">Enquire Now</div> -->\n        </div>\n        <div class=\"flex-column accordion-content accordion-collapse\">\n          <p class=\"text quaterhalf-width mobile-full-width\">\n            ").concat(course.description.whoisitfor, "\n          </p>\n          <div  id=\"modal-btn\" data-index=\"").concat(index, "\" style=\"cursor: pointer\" class=\"button button-primary button-left\"> More Info</div>\n        </div>\n      </div>\n      ");
      } else {
        document.getElementById('plumbing-section').innerHTML += "\n        <div  id=\"accordion\" class=\" accordion quaterhalf-width mobile-full-width\">\n          <div  class=\"accordion-header background-faded-grey padded mobile-accordion\">\n            <h3 class=\"title-secondary \">".concat(course.name, "</h3>\n            <!-- <div class=\"button button-primary\">Enquire Now</div> -->\n          </div>\n          <div class=\"flex-column accordion-content accordion-collapse\">\n            <p class=\"text quaterhalf-width mobile-full-width\">\n              ").concat(course.description.whoisitfor, "\n            </p>\n            <div id=\"modal-btn\" data-index=\"").concat(index, "\" style=\"cursor: pointer\" class=\"button button-primary button-left\">More Info</div>\n          </div>\n        </div>\n        ");
      }
    }; //display course titles and description in courses.html


    var courses = JSON.parse(this.responseText);
    console.log("hello ajax");
    document.getElementById("electrical-section").innerHTML = "\n     ".concat(courses.map(accordionTemplate).join(''), "\n    ");
    var $accordionHeader = $('.accordion-header');
    var $modal = $('#test');
    var $modalTitle = $('#title');
    var $modalPrice = $('#price');
    var $modalAvailability = $('#availability');
    $accordionHeader.click(function () {
      $('.accordion-content').addClass('accordion-collapse');
      $(this).next().toggleClass('accordion-collapse');
    });
    var $modal = $('#modal');
    var $modalClose = $('#modal-close');
    var $accordionMoreInfo = $('.button-primary');
    $accordionMoreInfo.click(function () {
      $modal.show(); //close modal when user clicks outside the modal

      $(document).click(function (e) {
        console.log(e.target.closest('#modal') === null);

        if (e.target.closest('#modal') === null && e.target.id != 'modal-btn') {
          $modal.hide();
          $('body').removeClass('no-scroll');
        }
      }); //disable scroll on body

      $('body').addClass('no-scroll');
      $modalClose.click(function () {
        $modal.hide(); //enable scroll on body

        $('body').removeClass('no-scroll');
      });
      var index = this.dataset.index;
      document.getElementById('title').innerHTML = "".concat(courses[index].name);
      document.getElementById('price').innerHTML = "".concat(courses[index].price).replace(/,/g, " & ");
      document.getElementById('time').innerHTML = "".concat(courses[index].times).replace(/,/g, " & ");
      document.getElementById('availability').innerHTML = "".concat(courses[index].availability).replace(/,/g, " & ");
      document.getElementById('duration').innerHTML = "".concat(courses[index].duration).replace(/,/g, " & ");
      document.getElementById('start').innerHTML = "".concat(courses[index].start).replace(/,/g, " & ");
      document.getElementById('location').innerHTML = "".concat(courses[index].location).replace(/,/g, " & ");
      document.getElementById('description').innerHTML = "".concat(courses[index].description.whoisitfor);
      document.getElementById('quals').innerHTML = "".concat(courses[index].description.quals);
      document.getElementById('content').innerHTML = "".concat(courses[index].description.content);
      document.getElementById('completion').innerHTML = "".concat(courses[index].description.completion);
      document.getElementById('extra').innerHTML = "".concat(courses[index].description.extra);
    });
  }
};

xmlhttp.open("GET", "https://raw.githubusercontent.com/bs4ultd/bs4u/gh-pages/courses.json", true);
xmlhttp.send();

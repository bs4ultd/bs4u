var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var courses = JSON.parse(this.responseText);

    function accordionTemplate(course, index) {

      if (course.trade === "Electrical") {

        return `

      <div  id="accordion"class="accordion quaterhalf-width mobile-full-width">
        <div  class=" accordion-header background-faded-grey padded mobile-accordion">
          <h3 class="title-secondary ">${course.name}</h3>
          <!-- <div class="button button-primary">Enquire Now</div> -->
        </div>
        <div class="flex-column accordion-content accordion-collapse">
          <p class="text quaterhalf-width mobile-full-width">
            ${course.description.whoisitfor}
          </p>
          <div  id="modal-btn" data-index="${index}" style="cursor: pointer" class="button button-primary button-left"> More Info</div>
        </div>
      </div>
      `;
      } else {
        document.getElementById('plumbing-section').innerHTML += `
        <div  id="accordion" class=" accordion quaterhalf-width mobile-full-width">
          <div  class="accordion-header background-faded-grey padded mobile-accordion">
            <h3 class="title-secondary ">${course.name}</h3>
            <!-- <div class="button button-primary">Enquire Now</div> -->
          </div>
          <div class="flex-column accordion-content accordion-collapse">
            <p class="text quaterhalf-width mobile-full-width">
              ${course.description.whoisitfor}
            </p>
            <div id="modal-btn" data-index="${index}" style="cursor: pointer" class="button button-primary button-left">More Info</div>
          </div>
        </div>
        `
      }
    }


    //display course titles and description in courses.html
    document.getElementById("electrical-section").innerHTML =
      `
     ${courses.map(accordionTemplate).join('')}
    `;



    var $accordionHeader = $('.accordion-header');
    var $modal = $('#test');
    var $modalTitle = $('#title');
    var $modalPrice = $('#price');
    var $modalAvailability = $('#availability');

    $accordionHeader.click(function() {

      $('.accordion-content').addClass('accordion-collapse');
      $(this).next().toggleClass('accordion-collapse');


    });

    var $modal = $('#modal');
    var $modalClose = $('#modal-close');
    var $accordionMoreInfo = $('.button-primary');


    $accordionMoreInfo.click(function() {
      $modal.show();
      //close modal when user clicks outside the modal
      $(document).click(function(e){
        console.log(e.target.closest('#modal') === null);
        if(e.target.closest('#modal')=== null && e.target.id != 'modal-btn'){
          $modal.hide();
          $('body').removeClass('no-scroll');
        }
      });
      //disable scroll on body
      $('body').addClass('no-scroll');
      $modalClose.click(function() {
        $modal.hide();
        //enable scroll on body
        $('body').removeClass('no-scroll');
      });

      var index = this.dataset.index;
      document.getElementById('title').innerHTML = `${courses[index].name}`;
      document.getElementById('price').innerHTML = `${courses[index].price}`;
      document.getElementById('time').innerHTML = `${courses[index].times}`;
      document.getElementById('availability').innerHTML = `${courses[index].availability}`;
      document.getElementById('duration').innerHTML = `${courses[index].duration}`;
      document.getElementById('start').innerHTML = `${courses[index].start}`;
      document.getElementById('location').innerHTML = `${courses[index].location}`;
      document.getElementById('description').innerHTML = `${courses[index].description.whoisitfor}`;
      document.getElementById('quals').innerHTML = `${courses[index].description.quals}`;
      document.getElementById('content').innerHTML = `${courses[index].description.content}`;
      document.getElementById('completion').innerHTML = `${courses[index].description.completion}`;
      document.getElementById('extra').innerHTML = `${courses[index].description.extra}`;
    });

  }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/bs4ultd/bs4u/gh-pages/courses.json", true);
xmlhttp.send();

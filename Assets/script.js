


//$(document).ready(function () {


  const todaysDate = moment();

  $("#currentDay").text(todaysDate.format("MMM Do, YYYY"));

  const timeBlock = $(".row");

  const currentHour = moment().hours();

  const inputTasks = JSON.parse(localStorage.getItem("stored-tasks")) || [];
  console.log(inputTasks);

  timeBlock.each(function (index) {



    const realNum = parseInt(this.id)
    const content = this.querySelector(".col-9")
    console.log(content)

    // Past //
    if (currentHour > realNum) {

      $(this).removeClass("present");
      $(this).removeClass("future");

      $(this).addClass("past");


      // Present //
    } else if (currentHour == realNum) {

      $(this).removeClass("past");

      $(this).removeClass("future");

      $(this).addClass("present");



      // Future //
    } else if (currentHour < realNum) {

      $(this).removeClass("past");

      $(this).removeClass("present");

      $(this).addClass("future");

    }
    this.addEventListener('submit', contentSubmit)

      //if (inputTasks.length < 9 ){

      //$(this).textContent(Null)

    

    content.value = inputTasks[index];
  });


  function contentSubmit(event) {

    event.preventDefault();

    console.log(event.target.querySelector("input").value)

    const index = parseInt(event.target.id)-9;


    const dailyTask = (event.target.querySelector("input").value);

    console.log('dailyTask', dailyTask)
    console.log(index);
    inputTasks[index] = dailyTask;

    localStorage.setItem("stored-tasks", JSON.stringify(inputTasks));
  }


//}) 

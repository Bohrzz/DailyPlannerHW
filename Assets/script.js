


$(document).ready(function () {
  
  
  const todaysDate = moment();
  
  $("#currentDay").text(todaysDate.format("MMM Do, YYYY"));
  
  const timeBlock = $('.row');
  
  const currentHour = moment().hours();

  const inputTasks = JSON.parse(localStorage.getItem("stored-tasks")) || [];

  timeBlock.each(function (index) {

    console.log(this, index)

    const realNum = parseInt(this.id)
    const content = this.querySelector(".col-9")


    if (currentHour > realNum) {

      content.classList.add("past");

    } else if (currentHour < realNum) {

      content.classList.add("future");

    } else {

      content.classList.add("present");

    }
    this.addEventListener('submit', contentSubmit)

    console.log(this);
    content.value = inputTasks[index];
  });


  function contentSubmit(event) {

    event.preventDefault();

    console.log(event.target)

    const index = parseInt(event.target.id) - 9;

    const dailyTask = $(".col-9").val()

    console.log('dailyTask', dailyTask)
    inputTasks[index] = dailyTask;

    localStorage.setItem("stored-tasks", JSON.stringify(inputTasks));
  }


}) 

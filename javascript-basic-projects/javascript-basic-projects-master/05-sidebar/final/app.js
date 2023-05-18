const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }


//---------------------------------------------------------------------------  
  sidebar.classList.toggle("show-sidebar");
//--------------------------------------------------------------------------  
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
//------------------------------------------------------------------------------  
});



/*
  This code sets up event listeners on two buttons 
  - toggleBtn and closeBtn - and the sidebar element. 
  When the toggleBtn button is clicked, the code checks 
  if the sidebar element has the class show-sidebar. If 
  it does, the class is removed, otherwise, the class is 
  added. This will toggle the visibility of the sidebar.

  The closeBtn button has a click event listener that 
  simply removes the show-sidebar class from the sidebar 
  element, effectively hiding it. This provides an 
  alternate way to hide the sidebar, in case the user 
  wants to close it without using the toggleBtn.

  Overall, the code enables the user to toggle the 
  visibility of the sidebar by clicking the toggleBtn 
  button, and to close the sidebar by clicking the 
  closeBtn button.
*/

var tour = new Tour({
    steps: [
      {
        element: "#my-element",
        title: "1st Panel",
        content: "This is the first panel",
        placement: "bottom"
      },
      {
        element: "#my-other-element",
        title: "1st Panel",
        content: "This is the second panel",
        placement: "bottom"
      },
      {
        element: "#panel3",
        title: "1st Panel",
        content: "This is the third panel",
        placement: "bottom"
      }
    ],
    backdrop: true,
    storage: false
  });
  
  // tour.init();
  // tour.start();
  tour.init();
  // tour.start();
  $("#startTourBtn").click(function() {
    tour.restart();
  });
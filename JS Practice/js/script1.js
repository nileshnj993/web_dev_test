// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", // URL and response handler passed as arguments
            function (request) { // request is the parameter for responseHandler function
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>"; // Whatever we need to do with response text, it has to be done within
                                                             // the response handler, as its async. The display might happen before
                                                             // response is received and hence nothing might get printed.
            });

        
      });
  }
);






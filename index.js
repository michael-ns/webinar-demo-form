'use strict';

exports.handler = function(event, context) {
    
    var error = {
        code: "NotFound",
        message: "The requested resource was not found"
    };
    context.done(null, error);

    var html = '<div class="blog-post"> <h2 class="blog-post-title">Competition Form</h2> <p>This blog post shows a few different types of content thats supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p><div class="form-group"> <label class="col-md-4 control-label" for="First Name">First Name</label> <div class="col-md-4"> <input id="First Name" name="First Name" type="text" placeholder="" class="form-control input-md" required=""> </div></div><div class="form-group"> <label class="col-md-4 control-label" for="Last Name">Last Name</label> <div class="col-md-4"> <input id="Last Name" name="Last Name" type="text" placeholder="" class="form-control input-md" required=""><hr> </div></div>';
    
    context.succeed(html);
  
};
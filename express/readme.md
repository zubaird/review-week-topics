## Using AJAX with Express

## AJAX Calls to Your Server (Basic Single Page Apps)

So far, all of the request to our server have been via form posts or links using anchor tags.  Why is this not the best experience?  Why would you want to use javascript and ajax instead?  What is a single page app?

#### Example Single Page App

[Kindle Cloud Reader](https://read.amazon.com/)

### Creating a Single Page App From Puppies

We are going to go through a single page app step by step.  Clone a fresh version of the [puppies auth example](https://github.com/gSchool/mongoose_auth_example) to work on.  Next create a new branch:

```
git checkout -b singlePageApp
```

#### Starter Code


Now we want to distinguish the normal crud app with our single page app, so lets make a few new files.  Create a file called ```views/partials/headerSinglePageApp.ejs```:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Puppies Single Page App</title>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/lumen/bootstrap.min.css">
  <script type="text/javascript" src="//code.jquery.com/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="/js/puppy.js"></script>
</head>
<body class = "container">
```

And another file for our very empty layout, ```views/layout.ejs```:


    <% include partials/headerSinglePageApp %>
    <% include partials/footer %>
    <h1>See all the puppies!</h1>
    <a href="/puppies/new">Add a new puppy</a>
    <h3>Our content will go in the body after an ajax call to the server</h3>
    <br>
    <a href="/logout">Logout</a>

We also need a javascript file so that we can make ajax calls. Add ```public/js/puppy.js```:

```
$(function() {
  
  function loadPuppies() {
    console.log('TODO: when the page loads, get all of the puppies!');
  }
  
  loadPuppies();

});
```

Finally, modify the root route to go to our new layout.ejs view:

```
app.get('/', routeMiddleware.ensureLoggedIn, function(req,res){
  res.render('layout');
});
```

Now have the starting point for our single page app.  Let's save and commit it to our branch.

### Server Support For AJAX

Next we want our server to support making ajax requests.  What would happen right now in our client side if we made an ajax request to /puppies.  Run the following code in puppy.js

```
$(function() {
  
  function loadPuppies() {
    $.get("/puppies").done(function(data) {
        console.log(data);
    });
  }

  loadPuppies();
});
```

What do you get in the console?  Why are we getting that as data?  We actually want our ajax request to return json data that looks like this:

```
{ puppies: 
   [ { _id: 5581c04931c88d7e13bdc3e1,
       ownerId: '5581c02a31c88d7e13bdc3e0',
       name: 'Puppy1',
       imageUrl: 'http://fampetvet.com/wp-content/uploads/2015/02/Puppy_2.jpg'},
     { _id: 5582ac30b681be151a0d6056,
       ownerId: '5582abe4b681be151a0d6055',
       name: 'pete the puppy',
       imageUrl: 'http://www.lordheath.com/web_images/pete_the_pup___love_business.jpg' }
   ] 
}
```

A simple way to change the server to support what we want is to modify the ```app.get('/puppies')``` route:

```
app.get('/puppies', routeMiddleware.ensureLoggedIn, function(req,res){
    db.Puppy.find({}, function(err,puppies){
      res.send({puppies: puppies});
    });
});
```

There are a problem with this solution though.  Look at [http://localhost:3000/puppies](http://localhost:3000/puppies).  We have broken our old CRUD version of the puppies app.  We do not layout the ejs file anymore.  If we are just making an api, and we don't care about the html pages, then this change would be fine, but let's assume we want to support json responses and html.  Instead, we could modify our code to be the following:


```
app.get('/puppies', routeMiddleware.ensureLoggedIn, function(req,res){
  db.Puppy.find({}, function(err,puppies){
    res.format({
      'text/html': function(){
        res.render("puppies/index", {puppies: puppies});
      },

      'application/json': function(){
        res.send({ puppies: puppies });
      },
      'default': function() {
        // log the request and respond with 406
        res.status(406).send('Not Acceptable');
      }
    });
  });
});
```

This tells the express server to respond with html when the ```Accept``` header of the request is ```text/html``` and to respond with json when the ```Accept``` header of the request is ```application/json```.  So does our single page app console log json data now?  Not quite, we need to make this change in puppy.js:


```
$(function() {
  
  function loadPuppies() {
    $.getJSON("/puppies").done(function(data) {
        console.log(data);
    });
  }

  loadPuppies();
});
```
Now the request being sent to our server has an ```Accept``` header with ```application/json```.

__Commit your code since we have another peice of functionality working!!__.

#### Exercise

In the client side javascript, ```public/js/puppy.js```, modify the code so that the getJSON method modifies the DOM and shows our puppies that we got back from the getJSON call.  You can also delete that content message in the layout.ejs file.

![](http://girltomom.com/wp-content/uploads/2012/07/too-cute-kitten.jpg)

#####Solution

```
$(function() {
  
  function loadPuppies() {
    $.getJSON("/puppies").done(function(data) {
        data.puppies.forEach(function(puppy) {
            var html = puppyHtml(puppy);
            $('body').append(html);
        });
        console.log(data);
    });
  }

  function puppyHtml(puppy) {
    return '<div data-id="' + puppy._id + '"><p><a href="/puppies/' + puppy._id + '/">' + puppy.name + 
           '</a></p><p><img src="' + puppy.imageUrl + '" alt="Dog Image" height=200 width=200></p>' +
           '<p><a href="/puppies/' + puppy._id + '/edit">Edit a puppy</a></p></div>';
  }

  loadPuppies();
});
```


### Creating A New Puppy (Supporting POST)

To support post in our app, we first need to give the user a way to add a puppy within our page.  Add the following code to the client side javascript to do display a form on click:

```
  $('#newpuppylink').click(function(e) {
    e.preventDefault();

    var html = '<br /><form id="newpuppyform" action="/puppies" method="POST">' +
               '<div class="form-group">' + 
               '<label for="name">Name: </label><input type="text" class="form-control" name="puppy[name]" id="name" autofocus>' +
               '</div>' +
               '<div class="form-group">' +
               '<label for="url">Image URL: </label>' +
               '<input type="text" class="form-control" name="puppy[imageUrl]" id="url">' +
               '</div>' +
               '<input type="submit" value="Add" class="btn btn-lg btn-success">' +
               '</form>';

    $('#logout').after(html);
  });
```
Next we need to add a submit handler to prevent default for the form submit and send our post to the server.  We can only grab the form after it's been added to the DOM though.  Modify your code to include the submit handler:

```


  $('#newpuppylink').click(function(e) {
    e.preventDefault();

    var html = '<br /><form id="newpuppyform" action="/puppies" method="POST">' +
               '<div class="form-group">' + 
               '<label for="name">Name: </label><input type="text" class="form-control" name="puppy[name]" id="name" autofocus>' +
               '</div>' +
               '<div class="form-group">' +
               '<label for="url">Image URL: </label>' +
               '<input type="text" class="form-control" name="puppy[imageUrl]" id="url">' +
               '</div>' +
               '<input type="submit" value="Add" class="btn btn-lg btn-success">' +
               '</form>';

    $('#logout').after(html);

    $('#newpuppyform').submit(function(e) {
      e.preventDefault();

      var name = $('#name').val();
      var url = $('#url').val();

      var data = {puppy: {name: name, imageUrl: url}};

      $.ajax({
        type: 'POST',
        url: '/puppies',
        data: data,
        dataType: 'json'
      }).done(function(data) {
        console.log(data);
      });
    });
  });

```

Now you should have a post that is being sent to the server.  But we have a familiar problem.  Our POST request does not return the data we need.  Instead, we get back a 302 that eventually returns html.

##### Exercise

Modify the server and client side code so that we get json data back from the POST request.  Once we are getting the correct data back, put it in the page.

![](http://girltomom.com/wp-content/uploads/2012/07/too-cute-kitten.jpg)

##### Solution

__puppy.js__:

```
  $('#newpuppylink').click(function(e) {
    e.preventDefault();

    var html = '<form id="newpuppyform" action="/puppies" method="POST">' +
               '<div class="form-group">' + 
               '<label for="name">Name: </label><input type="text" class="form-control" name="puppy[name]" id="name" autofocus>' +
               '</div>' +
               '<div class="form-group">' +
               '<label for="url">Image URL: </label>' +
               '<input type="text" class="form-control" name="puppy[imageUrl]" id="url">' +
               '</div>' +
               '<input type="submit" value="Add" class="btn btn-lg btn-success">' +
               '</form>';

    $('#logout').after(html);


    $('#newpuppyform').submit(function(e) {
      e.preventDefault();

      var name = $('#name').val();
      var url = $('#url').val();

      var data = {puppy: {name: name, imageUrl: url}};

      $.ajax({
        type: 'POST',
        url: '/puppies',
        data: data,
        dataType: 'json'
      }).done(function(data) {
        var html = puppyHtml(data);
        $('body').append(html);

        $('#newpuppyform').remove();

      });
    });
  });
```

__app.js__:


```
app.post('/puppies', routeMiddleware.ensureLoggedIn, function(req,res){
  var puppy = new db.Puppy(req.body.puppy);
  puppy.ownerId = req.session.id;
  puppy.save(function(err,puppy) {
    res.format({
      'text/html': function(){
        res.redirect("/puppies");
      },

      'application/json': function(){
        res.send(puppy);
      },
      'default': function() {
        // log the request and respond with 406
        res.status(406).send('Not Acceptable');
      }
    });
  });
});
```
## Front End Templates With Handlebars

Create a directory and a new file: ```public/handlebars/templates.js```


```
var newFormTmpl = Handlebars.compile('<form id="newpuppyform" action="/puppies" method="POST">' +
               '<div class="form-group">' + 
               '<label for="name">Name: </label><input type="text" class="form-control" name="puppy[name]" id="name" autofocus>' +
               '</div>' +
               '<div class="form-group">' +
               '<label for="url">Image URL: </label>' +
               '<input type="text" class="form-control" name="puppy[imageUrl]" id="url">' +
               '</div>' +
               '<input type="submit" value="Add" class="btn btn-lg btn-success">' +
               '</form>');

var showPuppyTmpl = Handlebars.compile('<div data-id="{{_id}}"><p><a href="/puppies/{{_id}}">' +
           '{{name}}</a></p><p><img src="{{imageUrl}}" alt="Dog Image" height=200 width=200></p>' +
           '<p><a href="/puppies/{{_id}}/edit">Edit a puppy</a></p></div>');
```

Reference the file in your header along with handlebars:

```
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.min.js"></script>
  <script type="text/javascript" src="/handlebars/templates.js"></script>
```
Make sure those script tags are before the script tag for ```puppy.js```.  Now in ```puppy.js```, you can do the following:

```
  function loadPuppies() {
    $.getJSON("/puppies").done(function(data) {
        data.puppies.forEach(function(puppy) {
            var html = showPuppyTmpl(puppy);
            $('body').append(html);
        });
        console.log(data);
    });
  }
```

## AJAX + Express Assignment

[Places I've Traveled](https://github.com/gSchool/placesIveTraveled)

## Additional Topics

## Jade

Aside from EJS, there are a few other technologies you can use to render server side templates. Jade is one of the most common and has a steeper learning curve than EJS, but has much more flexibility. You can start by installing Jade with `npm i -S jade` and in your `app.js` include `app.set("view engine","jade")`. Take a look at the Jade documentation and you will see that it is indentation based. This means that you do not have to close any HTML tags, you just need to be mindful of your indentation and where these tags should close.

[http://jade-lang.com/](http://jade-lang.com/)

If you'd like to practice with Jade, try to rebuild some previous express assignments.

## Debugging

If you are comfortable with the `sources` tab in Chrome and would like to use a more advanced debugging tool for your node applications check out [Node Inspector](https://github.com/node-inspector/node-inspector). This tool enables you to set breakpoints in your code and examine server-side data in the browser (a much better alternative to lots of `console.log`s).

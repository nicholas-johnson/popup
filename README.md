PopUp
=====

A simple, no-fuss jQuery plugin to convert any div into a popup centered in the middle of the screen. Lightweight, unobtrusive, easy to style

## Usage

Say you have a div like this:

    <div class="popup">Some content here</div>

Convert it to a popup like this:

    $(function() {
      $('.popup').popUp();
    });

## Styling

PopUp assumes nothing about how you want your popup to look. a popped up div will gain a class of poppedup, and will be positioned absolutely in the middle of the page.

Add CSS styling to your stylesheet like so:

    .poppedUp {
      background:#fff;
      border:2px solid black;
      border-radius:2px;
    }

## Shading out the background

Use in conjunction with the blindover plugin, like so:

    $(function() {
      $('.popup').popUp().closest('body').blindOver();
    });

## Adding a close button

You'll probably want some way to dismiss your popup. Add a link or a button to your popup, somthing like this:

    <a href="#" class="close_popup">Close</a>

Style it however you like. Now hook it up, something like the following (assuming your also using blindOver:

    $('.close_popup').click(function() {
      $('.poppedUp').fadeOut();
      $('.blindover').fadeOut();
      return false;
    });

## Unobtrusive

With JavaScript turned off, your div is still on the page. If it's an important message, pop it at the top. Accessible. Useful.
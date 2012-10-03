PopUp
=====

A simple, no-fuss jQuery plugin to convert any div into a popup centered in the middle of the screen.

## Usage

Say you have a div like this:

    <div class="popup">Some content here</div>

Convert it to a popup like this:

    $(function() {
      $('.popup').popUp();
    });

## Styling

PopUp assumes nothing about how you want your popup to look. a popped up div will gain a class of poppedup. Add CSS styling to your stylesheet like so:

    .poppedup {
      background:#fff;
      border:2px solid black;
      border-radius:2px;
    }

## Shading out the background

Use in conjunction with the blindover plugin, like so:

    $(function() {
      $('.popup').popUp().closest('body').blindOver();
    });
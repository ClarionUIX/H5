There is no need to modify the skeleton anymore. You can, if you want, but there is an easier way to load scripts.

There is a class on the examples, H5.Extension() and it will dynamically load the script when called with the name of the needed script.
For example, if you need Longpress support. Make a source code embed at / Internet / HTML for Page / <HEAD> / Before the closing </HEAD> / you can simply add a line and call the extension Target.Writeln(H5.Extension('Longpress')) this will be the same as adding the following lines to the Skeleton:

<!-- Longpress -->
<script src="../assets/longpress/js/jquery.mousewheel.js" type="text/javascript"></script>
<script src="../assets/longpress/js/plugins.js" type="text/javascript"></script>
<script src="../assets/longpress/js/app.js" type="text/javascript"></script>
<script src="../assets/longpress/js/jquery.longpress.js" type="text/javascript"></script>
<link href="../assets/longpress/css/app.css" rel="stylesheet" type="text/css">
<link href="../assets/longpress/css/main.css" rel="stylesheet" type="text/css">
<link href="../assets/longpress/css/normalize.css" rel="stylesheet" type="text/css">
<!-- end of Longpress -->

Therefore, you will no longer need to modify the skeleton and load all the scripts all the time, with this you can selectively load only the needed scripts. The class will output the lines for you making everything easier.

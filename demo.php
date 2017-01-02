<script src="js/npven.js"></script><!-- IMPORT npven.js -->
<div id="npven_frame"></div><!-- THE FRAME IS BEFORE THE SCRIPT -->
<script type="text/javascript">
npven_create(
	1,//type
	"An error occured",//title
	"Something went wrong when executing this page. This webpage will reload in 10 seconds",//content
	0,//choice
	"reload",//url
	0,//timer (0 = disable / 1<= = enable && time)
	2,// type of timer (1 = npven_clear() / 2 = go to url)
	"npven_frame", // id of the frame
	"slide" // animation
);
</script>

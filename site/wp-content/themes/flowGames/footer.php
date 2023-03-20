<?php

/**
 * The template for displaying the footer.
 *
 * Contains the body & html closing tags.
 *
 * @package HelloElementor
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

get_template_part('template-parts/footer');

?>

<?php wp_footer(); ?>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-K9J6BGDJ7B"></script>
<script>
	window.dataLayer = window.dataLayer || [];

	function gtag() {
		dataLayer.push(arguments);
	}
	gtag('js', new Date());

	gtag('config', 'G-K9J6BGDJ7B');
</script>
<script type="text/javascript">
	window._taboola = window._taboola || [];
	_taboola.push({
		flush: true
	});
</script>
</body>

</html>
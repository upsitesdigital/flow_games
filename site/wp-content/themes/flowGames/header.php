<?php

/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section, opens the <body> tag and adds the site's header.
 *
 * @package HelloElementor
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
	<?php if(is_single()) { ?>
		<script type="text/javascript">
			window._taboola = window._taboola || [];
			_taboola.push({article:'auto'});
			!function (e, f, u, i) {
			if (!document.getElementById(i)){
			e.async = 1;
			e.src = u;
			e.id = i;
			f.parentNode.insertBefore(e, f);
			}
			}(document.createElement('script'),
			document.getElementsByTagName('script')[0],
			'//cdn.taboola.com/libtrc/flowgames-flowgames/loader.js',
			'tb_loader_script');
			if(window.performance && typeof window.performance.mark == 'function')
			{window.performance.mark('tbl_ic');}
		</script>
	<?php } ?>
	<?php if(is_archive() or is_page_template( 'template-pages/news.php' ) or is_page_template( 'template-pages/videos.php' )) { ?>
		<script type="text/javascript">
			window._taboola = window._taboola || [];
			_taboola.push({category:'auto'});
			!function (e, f, u, i) {
			if (!document.getElementById(i)){
			e.async = 1;
			e.src = u;
			e.id = i;
			f.parentNode.insertBefore(e, f);
			}
			}(document.createElement('script'),
			document.getElementsByTagName('script')[0],
			'//cdn.taboola.com/libtrc/flowgames-flowgames/loader.js',
			'tb_loader_script');
			if(window.performance && typeof window.performance.mark == 'function')
			{window.performance.mark('tbl_ic');}
		</script>
	<?php } ?>
	
</head>

<body <?php body_class(); ?>>

	<?php
	get_template_part('template-parts/header');

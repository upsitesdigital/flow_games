<?php

/**
 * A configuração de base do WordPress
 *
 * Este ficheiro define os seguintes parâmetros: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, e ABSPATH. Pode obter mais informação
 * visitando {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} no Codex. As definições de MySQL são-lhe fornecidas pelo seu serviço de alojamento.
 *
 * Este ficheiro contém as seguintes configurações:
 *
 * * Configurações de  MySQL
 * * Chaves secretas
 * * Prefixo das tabelas da base de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define('WPCF7_AUTOP', false);
// ** Definições de MySQL - obtenha estes dados do seu serviço de alojamento** //
/** O nome da base de dados do WordPress */
define('DB_NAME', 'flow');

/** O nome do utilizador de MySQL */
define('DB_USER', 'root');

/** A password do utilizador de MySQL  */
define('DB_PASSWORD', '');

/** O nome do serviddor de  MySQL  */
define('DB_HOST', 'localhost');

/** O "Database Charset" a usar na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O "Database Collate type". Se tem dúvidas não mude. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação.
 *
 * Mude para frases únicas e diferentes!
 * Pode gerar frases automáticamente em {@link https://api.wordpress.org/secret-key/1.1/salt/ Serviço de chaves secretas de WordPress.org}
 * Pode mudar estes valores em qualquer altura para invalidar todos os cookies existentes o que terá como resultado obrigar todos os utilizadores a voltarem a fazer login
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'n7IEI >X0fBIRWvf(+n<HSjW.cfv`9f-)9/5+&U5|D{0P?20sd[WBwINP|!X1qEi');
define('SECURE_AUTH_KEY', 'q`0_beviKBx}<N>yZ|Hq3&/G4 Iwf|h|x* B-;w+8,9$[Q %1PIeI1qhXk5X4,%-');
define('LOGGED_IN_KEY', 's *3m)&y1QRmG_5HVw;4Sn6p2e#XaPg<uuPT:L>_HL10l)mV,Q#27^7AU%^:)&`/');
define('NONCE_KEY', '}&Jwr1@VyK(~ggcB8`90 1_6*8T8X|3U_Q3&k:g$|EilQIG48]nlK)902=iHc|WF');
define('AUTH_SALT', '[~/w:vK3*Yh0y,Bu6A!Wx8zB3!.mB],z_3eGg[Rx321XPUJVtD6HWo[Z>k`e18y;');
define('SECURE_AUTH_SALT', '}SUMJ;EW~fTLP~:p?>fHn1Mq=dy/$KdmLwhnspi5iG;i.),bV#O^ARM.SwL!O:`<');
define('LOGGED_IN_SALT', '2ZSRHs*7h<o}B1DV|xrFHzu~7Rp}YuT]fLW?>=3F!%$-S|yj#@ ]cQp0hBm#p_^#');
define('NONCE_SALT', 'h6-ExB[TJU}3Y>U$lSwEH*9g398QXu$g/h4@K]|p1vwk3YNB5,TNNiPY!KcY7a:K');

/**#@-*/

/**
 * Prefixo das tabelas de WordPress.
 *
 * Pode suportar múltiplas instalações numa só base de dados, ao dar a cada
 * instalação um prefixo único. Só algarismos, letras e underscores, por favor!
 */
$table_prefix = 'wp_';

/**
 * Para developers: WordPress em modo debugging.
 *
 * Mude isto para true para mostrar avisos enquanto estiver a testar.
 * É vivamente recomendado aos autores de temas e plugins usarem WP_DEBUG
 * no seu ambiente de desenvolvimento.
 *
 * Para mais informações sobre outras constantes que pode usar para debugging,
 * visite o Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* E é tudo. Pare de editar! */

/** Caminho absoluto para a pasta do WordPress. */
if (!defined('ABSPATH')) {
	define('ABSPATH', dirname(__FILE__) . '/');
}

/** Define as variáveis do WordPress e ficheiros a incluir. */
require_once(ABSPATH . 'wp-settings.php');

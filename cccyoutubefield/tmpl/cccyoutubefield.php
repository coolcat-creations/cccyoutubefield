<?php
/**
 * @package     Joomla.Plugin
 * @subpackage  Fields.CCCyoutubefield
 *
 * @copyright   Copyright (C) 2017 Coolcat-Creations.com, Elisa Foltyn.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die();

$value = $field->value;

if (!$value) {
	return;
}

// Loading the javascript and css
$doc = JFactory::getDocument();

JHtml::_('jQuery.Framework');

$doc->addStylesheet('plugins/fields/cccyoutubefield/css/cccyoutubefield.css');
$doc->addScript('plugins/fields/cccyoutubefield/js/cccyoutubefield.js');


if (is_array($value))
{
	$value = implode(', ', $value);
}

?>

<div class="cccyoutubefield" data-embed="<?php echo htmlentities($value); ?>">
	<div class="play-button"></div>
</div>

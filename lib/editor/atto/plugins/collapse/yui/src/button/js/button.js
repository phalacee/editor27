// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto text editor collapse plugin.
 *
 * @package    editor-atto
 * @copyright  2013 Damyon Wiese  <damyon@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
M.atto_collapse = M.atto_collapse || {
    init : function(params) {
        var click = function(e, elementid) {
            e.preventDefault();

            Y.one('#' + elementid + '_toolbar').toggleClass('collapsetoolbar');
        };

        M.editor_atto.add_toolbar_button(params.elementid, 'collapse', params.icon, params.group, click);
        Y.one('#' + params.elementid + '_toolbar').toggleClass('collapsetoolbar');
    }
};

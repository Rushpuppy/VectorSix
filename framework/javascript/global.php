
// NameSpace Declaration
var v6 = {};
v6.controller = {};
v6.ui = {};
v6.ui.message = {};
v6.ui.form = {};
v6.ui.bootstrap = {};
v6.ui.html = {};
v6.ajax = {};
v6.ajax.rpc = {};
v6.string = {};
v6.fn = {};
v6.template = {};

//
// PHP Javascript AutoLoader
//
<?php
  echo file_get_contents('fn/Guid.js');
  echo file_get_contents('fn/ObjectHelper.js');
  echo file_get_contents('string/Base64.js');
  echo file_get_contents('string/Utf8.js');
  echo file_get_contents('controller/DeveloperPageController.js');
  echo file_get_contents('ui/UiBuilder.js');  
  echo file_get_contents('ui/bootstrap/Container.js');
  echo file_get_contents('ui/bootstrap/GridRow.js');
  echo file_get_contents('ui/bootstrap/GridCol.js');
  echo file_get_contents('ui/bootstrap/Panel.js');
  echo file_get_contents('ui/bootstrap/Navbar.js');
  echo file_get_contents('ui/bootstrap/NavbarNav.js');
  echo file_get_contents('ui/bootstrap/NavbarNavElement.js');
  echo file_get_contents('ui/bootstrap/NavbarButton.js');
  echo file_get_contents('ui/bootstrap/NavbarText.js');
  echo file_get_contents('ui/bootstrap/NavbarForm.js');  
  echo file_get_contents('ui/bootstrap/Dropdown.js');
  echo file_get_contents('ui/bootstrap/DropdownElement.js');
  echo file_get_contents('ui/form/Form.js');
  echo file_get_contents('ui/form/TextBox.js');
  echo file_get_contents('ui/html/Audio.js');
  echo file_get_contents('ui/html/Image.js');
  echo file_get_contents('ui/html/Table.js');
  echo file_get_contents('ui/message/ContentBox.js');
  echo file_get_contents('ui/message/OkBox.js');
  echo file_get_contents('ui/message/YesNoBox.js');
?>
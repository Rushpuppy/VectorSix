
/*
* v6.ui.bootstrap.DropdownElement Class
* This Class generates a DropdownElement Bootstrap Element
* http://getbootstrap.com/components/#dropdowns
* @author Rushpuppy - Severin Holm   
*/   
v6.ui.bootstrap.DropdownElement = function DropdownElement() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
    
  this.prop = {
    id: 'DropdownElement', 
    type: 'v6.ui.bootstrap.DropdownElement',
    parent: null,
    text: 'Dropdown Element',
    href: '#',
    elementType: 'li', // li, divider, header
    isDisabled: false,
    children: []
  };
  
  
  //****************************************************************************
  // Constructor 
  //****************************************************************************
  /*
  * Constructor Method
  * @constructor  
  * @param void      
  */     
  this.init = function() { 
    // Set the prop.info.id
    var objGuid = new v6.fn.Guid(); 
    $this.prop.id = objGuid.generate();
    
    // Create Ui Builder & Set Fields
    $this.uiBuilder = new v6.ui.UiBuilder();
    $this.uiBuilder.form = ''; 
    $this.uiBuilder.prop = '';  
    $this.uiBuilder.allow = ''; // DropdownElement 
  }
  
  //****************************************************************************
  // Methods
  //****************************************************************************  
  /*
  * Renders and returns the HTML code this element 
  * @return {string} The rendered HTML Code of the element
  */    
  this.render = function() {
    // Generate the HTML Template
    var strTpl = '';
    
    switch($this.prop.elementType) {
      case 'li':
        strTpl += '<li data-id="{id}" class="{disabled}"><a role="menuitem" tabindex="-1" href="{href}">{text}</a></li>';
        break;
      case 'divider':
        strTpl += '<li data-id="{id}" class="divider {disabled}"></li>';
        break;
      case 'header':
        strTpl += '<li data-id="{id}" class="dropdown-header {disabled}">{text}</li>';
        break;        
    }

    // Set Values into Template
    strTpl = strTpl.replace(/{id}/g, $this.prop.id);
    strTpl = strTpl.replace(/{text}/g, $this.prop.text);
    strTpl = strTpl.replace(/{href}/g, $this.prop.href);
    
    // Set isActive Value into Template
    if($this.prop.isDisabled) {
      strTpl = strTpl.replace(/{disabled}/g, 'disabled');
    }
       
    // Return Template
    return strTpl;
  } 
  
  /*
  * Loads the Object
  * @param {object} objProp Object String 
  */ 
  this.load = function(objProp) {
    $this.prop = objProp;
  }

  /*
  * Returns the prop Object
  * @return {object} the $this.prop
  */ 
  this.save = function() {
    return $this.prop;
  }

  //****************************************************************************
  $this.init();
}
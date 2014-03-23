
/*
* v6.ui.bootstrap.NavbarNavElement Class
* This Class generates a NavbarNavElement Bootstrap Element
* http://getbootstrap.com/components/#navbar
* @author Rushpuppy - Severin Holm   
*/   
v6.ui.bootstrap.NavbarNavElement = function NavbarNavElement() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
    
  this.prop = {
    id: 'NavbarNav', 
    type: 'v6.ui.bootstrap.NavbarNavElement',
    parent: null,
    children: [],
    active: false,
    text: 'Link',    
    href: '#',
    isDropdown: false
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
    $this.uiBuilder.allow = ''; // If its a Dropdown: DropdownElement 
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
    if($this.prop.isDropdown) {
      // For Dropdown Links
      strTpl += '<li data-id="{id}" class="v6-bootstrap dropdown">';
      strTpl += '   <a href="{href}" class="dropdown-toggle" data-toggle="dropdown">{text} <b class="caret"></b></a>';
      strTpl += '   <ul data-container="{id}" class="dropdown-menu"><li>';
      strTpl += '   </ul>';
      strTpl += '</li>';
    } else {
      // For Single Links
      strTpl += '<li data-id="{id}" class="v6-bootstrap {active}"><a href="{href}">{text}</a></li>';
    }
    
    // Set Values into Template
    strTpl = strTpl.replace(/{id}/g, $this.prop.id);
    strTpl = strTpl.replace(/{href}/g, $this.prop.href);
    strTpl = strTpl.replace(/{text}/g, $this.prop.text);
    
    // Set Active Value into Template
    var strActive = '';
    if($this.prop.active){
      strActive = 'active';
    }
    strTpl = strTpl.replace(/{active}/g, strActive);
     
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
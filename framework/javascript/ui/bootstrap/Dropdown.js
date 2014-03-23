
/*
* v6.ui.bootstrap.Dropdown Class
* This Class generates a Dropdown Bootstrap Element
* http://getbootstrap.com/components/#dropdowns
* @author Rushpuppy - Severin Holm   
*/   
v6.ui.bootstrap.Dropdown = function Dropdown() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
    
  this.prop = {
    id: 'Dropdown', 
    type: 'v6.ui.bootstrap.Dropdown',
    parent: null,
    isButton: true,
    btnStyle: 'danger', // success, info, warning, danger, normal
    text: 'DropDown',
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
    strTpl += '<div data-id="{id}" class="dropdown">';
    if($this.prop.isButton) {
      // Dropdown Type Button
      strTpl += '   <button class="btn-{style} btn dropdown-toggle" type="button" data-toggle="dropdown">';
      strTpl += '      {text} <span class="caret"></span>';
      strTpl += '   </button>';
    } else {
      // Dropdown Type Link
      strTpl += '   <a href="#" class="dropdown-toggle" data-toggle="dropdown">{text} <b class="caret"></b></a>';
    }
    // Dropdown Container    
    strTpl += '   <ul data-container="{id}" class="dropdown-menu">';
    strTpl += '   </ul>';
    strTpl += '</div>'; 
    
    // Set Values into Template
    strTpl = strTpl.replace(/{id}/g, $this.prop.id);
    strTpl = strTpl.replace(/{text}/g, $this.prop.text);
    strTpl = strTpl.replace(/{style}/g, $this.prop.btnStyle);
       
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
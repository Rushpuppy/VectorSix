
/*
* v6.controller.DeveloperPageController Class
* This Class generates a DeveloperPageController Object Container
* This Class will be Loadet directly to the Page (Globalspace) there
* can only be one Controller and this one will be loadet in Developer Modus
* @author Rushpuppy - Severin Holm   
*/   
v6.controller.DeveloperPageController = function DeveloperPageController() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
  
  this.arrElements = new Array();
  
  //****************************************************************************
  // Constructor 
  //****************************************************************************
  /*
  * Constructor Method
  * @constructor  
  * @param void      
  */     
  this.init = function() { 
    // Call Event Manager
    $this.eventManager();  
  }
  
  //****************************************************************************
  // Methods
  //****************************************************************************  
  /*
  * Register Events to specific Elements
  */  
  this.eventManager = function() {
    // MouseOver and MouseOut Event for all Bootstrap Elements
    $('body').on('mouseover', '.v6-bootstrap' , function(){$this.onMouseOverElement(this)});
    $('body').on('mouseout', '.v6-bootstrap' , function(){$this.onMouseOutElement(this)});
  };

  /*
  * Shows Border Arround the Element
  * @param {object} objCaller the Event Trigger Element
  */
  this.onMouseOverElement = function(objCaller) {
    // Add Developement css Class
    //$(objCaller).addClass();
    
    // Show DevMenu
    // TODO: Only on the Highest !!
    var strId = $(objCaller).attr('data-id');
    $this.renderDevmenu(strId);
  };

  /*
  * Hides Border Arround the Element
  * @param {object} objCaller the Event Trigger Element
  */  
  this.onMouseOutElement = function(objCaller) {
    // Remove Developement css Class
    //$(objCaller).removeClass();
    
    // Hide DevMenu
    // TODO: Not the Highest !!
    strId = $(objCaller).attr('data-id');
    $('[data-id=' +strId + '-devmenu]').remove();
  };

  /*
  * Renders the UI to the Body Tag
  * @param {array} arrJsonObjects The UI Json Array
  */    
  this.renderUi = function(arrJsonObjects) {
    // Loop Array
    for(var i in arrJsonObjects) {
      // First render the Body Layer (all Element attached to Body);
      if(arrJsonObjects[i].parent == null){
        // Render Body Layer Element
        $this.renderUi_render(arrJsonObjects[i]); 
        
        // Build Childrens recursively (Break-Down Pattern)
        for(var numChild in arrJsonObjects[i].children) {
          var strChildId = arrJsonObjects[i].children[numChild].id;
          $this.renderUi_recursive(strChildId, arrJsonObjects);  
        }      
      }      
    }    
  }; 
  
  /*
  * Helper for the renderUi Method. It is used to add Children
  * Recursively.  
  * @param {string} strChildId The Child Element ID
  * @param {array} arrJsonObjects The Complete Element Json Array  
  */   
  this.renderUi_recursive = function(strChildId, arrJsonObjects) {
    // Get strChildId Element from arrJsonObjects
    var objElement = null;
    for(var i in arrJsonObjects) {
      if(arrJsonObjects[i].id == strChildId) {
        objElement = arrJsonObjects[i] 
        break;
      }  
    }
    
    if(objElement != null) {
      // Render Element
      $this.renderUi_render(objElement);
  
      // Render Childrens (recursively)
      for(var numChild in arrJsonObjects[i].children) {
        var strChildId = arrJsonObjects[i].children[numChild].id;
        $this.renderUi_recursive(strChildId, arrJsonObjects);  
      }    
    }
  };
  
  /*
  * Helper for the renderUi Method. It Renders The HTML
  * @param {object} objElement The Element
  */   
  this.renderUi_render = function(objElement) {
    // Create an Object and Initialize it
    eval('var obj = new ' + objElement.type + '();');
    obj.load(objElement);          
    
    // Push new Object to the Global Page Stack
    $this.arrElements.push(obj);

    // Render HTML
    var strParent = obj.prop.parent;
    var strHtml = obj.render(); 
    
    // Add HTML to DOM
    if(strParent != null){
      $('[data-container=' + strParent + ']').append(strHtml);
    } else {
      $('body').append(strHtml);
    }       
  };
 
  
  /*
  * Generates the UI Json Code and returns it
  * @return {array} The UI Json Array
  */    
  this.saveUi = function() {
    // Create Return Array
    var $arrReturn = new Array();

    // Loop G_DEV_PAGE
    for(var i in $this.arrElements) {
      var obj = $this.arrElements[i];
      var objSave = obj.save();
      $arrReturn.push(objSave);
    }
    
    return $arrReturn;
  }
  
  /*
  * Renders Dev Menu
  * @param {string} strElementId The Id of the Specific Element
  */    
  this.renderDevmenu = function(strElementId) {
    // Generate DevMenu Template
    // This is a Special thats why inline CSS
    var strTpl = '';
    strTpl += '<div data-id="{id}-devmenu" style="position: absolute; z-index: 9999; left: {left}; top: {top};">';
    strTpl += '   <div class="container">';
    strTpl += '      <div class="row">';
    strTpl += '         <div class="col-md-2">';
    strTpl += '            <div class="panel panel-default">';
    strTpl += '               <div class="panel-body" style="padding: 7px;">';    
    strTpl += '                  <button type="button" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-trash"></span></button>';
    strTpl += '                  <button type="button" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-plus"></span></button>';    
    strTpl += '                  <button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-sort"></span></button>';
    strTpl += '                  <button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-cog"></span></button>';    
    strTpl += '               </div>';
    strTpl += '            </div>';
    strTpl += '         </div>';
    strTpl += '      </div>';
    strTpl += '   </div>';
    strTpl += '</div>';
    
    // Set Values into Template
    strTpl = strTpl.replace(/{id}/g, strElementId);
   
    // Set Position Left and Top Value into Template    
    var offset = $('[data-id=' + strElementId + ']').offset();
    strTpl = strTpl.replace(/{top}/g, offset.top);
    strTpl = strTpl.replace(/{left}/g, offset.left); 
    
    $('body').append(strTpl); 
  }

  //****************************************************************************
  $this.init();
}
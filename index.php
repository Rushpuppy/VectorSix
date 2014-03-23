
<html>
  <head>
    <script src="vendor/jquery-1.11.0/jquery-1.11.0.min.js"></script>
  
    <script src="vendor/bootstrap-3.1.1/js/bootstrap.min.js"></script>
    <link href="vendor/bootstrap-3.1.1/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
    <link href="vendor/bootstrap-3.1.1/cssbootstrap-theme.min.css/" type="text/css" rel="stylesheet" />
    <script src="framework/javascript/global.php"></script>
    
    <script>
      $(function() {
      
        // Generate The Object that comes from Database
        var arrBootstrap = [{
          id: '1', 
          type: 'v6.ui.bootstrap.Navbar',
          parent: null,
          children: [{id:'2'},{id:'7'},{id:'8'}],          
          text: 'SEVERIN', 
          href: '#',
          position: 'static',
          inverted: true
        },
        {
          id: '2', 
          type: 'v6.ui.bootstrap.NavbarNav',
          parent: 1,
          children: [{id:'3'}],     
          align: 'left',
        },        
        {
          id: '3', 
          type: 'v6.ui.bootstrap.NavbarNavElement',
          parent: 2,
          children: [{id:'6'}],
          active: false,
          text: 'Link',    
          href: '#',
          isDropdown: true,
        },        
        {
          id: '4', 
          type: 'v6.ui.bootstrap.Dropdown',
          parent: null,
          children: [{id:'5'}],
          isButton: true,
          text: 'DropDown',
          btnStyle: 'success',
          isRight: true
        },
        {
          id: '5', 
          type: 'v6.ui.bootstrap.DropdownElement',
          parent: 4,
          text: 'Dropdown Element',
          href: '#',
          elementType: 'li',
          isDisabled: false,
          children: []
        },
        {
          id: '6', 
          type: 'v6.ui.bootstrap.DropdownElement',
          parent: 3,
          text: 'Test Element',
          href: '#',
          elementType: 'li',
          isDisabled: true,
          children: []
        },
        {
          id: '7', 
          type: 'v6.ui.bootstrap.NavbarButton',
          parent: 1,
          children: [],
          text: 'Title', 
          href: '#',
          style: 'success',
          align: 'right'
        },
        {
          id: '8', 
          type: 'v6.ui.bootstrap.NavbarText',
          parent: 1,
          children: [],
          text: 'This is a normal Text', 
          align: 'left' // left, right
        },
        {
          id: '9', 
          type: 'v6.ui.bootstrap.NavbarForm',
          parent: null,
          children: [],    
          align: 'left', // left, right
        }                                                        
        ];
        
        // Render Page
        var pageController = new v6.controller.DeveloperPageController()
        pageController.renderUi(arrBootstrap);
        
        // Log Save Page
        console.log(pageController.saveUi());
        
      });      
    </script>
  </head>
  <body>

      

  </body>
</html>
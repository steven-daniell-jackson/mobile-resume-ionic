angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/resume',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.aboutMe', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutMe.html',
        controller: 'aboutMeCtrl'
      }
    }
  })

  .state('menu.moreAboutMe', {
    url: '/more-about-me',
    views: {
      'side-menu21': {
        templateUrl: 'templates/moreAboutMe.html',
        controller: 'moreAboutMeCtrl'
      }
    }
  })

  .state('menu.experience', {
    url: '/experience',
    views: {
      'side-menu21': {
        templateUrl: 'templates/experience.html',
        controller: 'experienceCtrl'
      }
    }
  })

  .state('menu.profileLinks', {
    url: '/profile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profileLinks.html',
        controller: 'profileLinksCtrl'
      }
    }
  })

  .state('menu.employmentHistory', {
    url: '/employment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/employmentHistory.html',
        controller: 'employmentHistoryCtrl'
      }
    }
  })

  .state('menu.contactDetails', {
    url: '/contact',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactDetails.html',
        controller: 'contactDetailsCtrl'
      }
    }
  })

  .state('menu.references', {
    url: '/references',
    views: {
      'side-menu21': {
        templateUrl: 'templates/references.html',
        controller: 'referencesCtrl'
      }
    }
  })

  .state('development', {
    url: '/roi-development',
    templateUrl: 'templates/development.html',
    controller: 'developmentCtrl'
  })

  .state('juniorITTechnician', {
    url: '/page14',
    templateUrl: 'templates/juniorITTechnician.html',
    controller: 'juniorITTechnicianCtrl'
  })

  .state('menu.downloadableResources', {
    url: '/downloads',
    views: {
      'side-menu21': {
        templateUrl: 'templates/downloadableResources.html',
        controller: 'downloadableResourcesCtrl'
      }
    }
  })

  .state('languages', {
    url: '/languages',
    templateUrl: 'templates/languages.html',
    controller: 'languagesCtrl'
  })

  .state('cMSS', {
    url: '/cms',
    templateUrl: 'templates/cMSS.html',
    controller: 'cMSSCtrl'
  })

  .state('cMSS2', {
    url: '/tools',
    templateUrl: 'templates/cMSS2.html',
    controller: 'cMSS2Ctrl'
  })

  .state('frameworks', {
    url: '/frameworks',
    templateUrl: 'templates/frameworks.html',
    controller: 'frameworksCtrl'
  })

$urlRouterProvider.otherwise('/resume/home')

  

});
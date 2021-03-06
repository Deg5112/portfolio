var app = angular.module('portfolio', ['ngAnimate']);

app.service('getScrollTopService', function(){
    var self = this;
    self.imagesBool = null;
    self.returnScrollTop = function(scrollTop){
        if(scrollTop>500){
            self.imagesBool = true;
        }
        else{
            self.imagesBool = false;
        }
    };
});


app.controller('workController', function($scope, $log, getScrollTopService){
    var self = this;
    self.activeButton = null;
    self.filter = {alt:null};
    self.modalActive = false;
    self.modalText1 = null;
    self.modalText2 = null;
    self.modalText3 = null;
    self.modalImg = null;
    self.modalTitle = null;
    self.modalSrc = null;
    self.dynamicClass = null;
    self.currentModal = null;

    self.addPicClass = function(event){
        var width = window.innerWidth;
        if(width>992){
            $('project').removeClass('projectAnimate');
            $(event.target).addClass('projectAnimate');
        }

    };

    self.removePicClass = function(event){
        $(event.target).removeClass('projectAnimate');
    };


    self.changePicBool = function(){
        if(self.picAnimateBool){
            self.picAnimateBool = false;
        }else{
            self.picAnimateBool = true;
        }
    };

    self.modalRemove = function(){
        self.modalActive = false;
        //$('.imgCol').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-4');
        self.modalSrc = null;
        var width = $(window).width();

        $(".helloModal").hide();
        $(".aboutActive").removeClass('aboutActive');

    };

    self.openModal = function(index){
        $('#myModal').modal('show');
        self.modalText1 = self.imgArray[index].modalText1;
        self.modalText2 = self.imgArray[index].modalText2;
        self.modalText3 = self.imgArray[index].modalText3;
        self.modalTitle = self.imgArray[index].title;
        self.modalSrc = 'images/'+ self.imgArray[index].src;
    };


		self.projects = [
      {
        src: 'React_App.png',
        alt:'GAME',
        title: 'React_Checkers',
        modalText1: 'Checkers done in React + Redux! Everything is a component: The Board, the Rows, the squares, and the checkers! Uses react-redux to manage the state of the board, and share data across components. Tackled this by making a coordinate map of the entire board and calculating if a checker could move based on several conditions. More to come!',
        href:'http://dgoodman-react-checkers.herokuapp.com',
        git:'https://github.com/Deg5112/react_checkers'
      },
			{
			  src: 'tarantool.png',
        alt:'WEBSITE',
        title: 'Tarantool.io Site',
        message: 'Marketing website for one of the top NoSQL In-memory Database Software Company',
        href:'https://dgoodman-tarantool.herokuapp.com',
        features: '',
        git: 'https://github.com/Deg5112/tarantool-site',
        modalText1: "Tarantool was first released in 2008 in Mail.ru Group. It is publicly listed on the London Stock Exchange (MAIL:LSE) and is the 5th largest internet company in the world with over 150 million active users a month. Services span email, cloud, social networks, instant messengers, and games developed by a team of over 2,000 engineers spanning more than 10 global locations.", modalText2: "The Moscow team informed me this project should be done all vanilla so it would be easy for future devs to make content changes, hence, no frameworks. Don't be fooled, this site HTTPS, ranked higher in speed then other image heavy sites like Amazon, MemSQl, and more, and optimized for SEO. This site is a highly modularized PHP driven site and has a strategic caching strategy utilizing Gulp for asset revisioning, minification, and concatenation. This project involved coordination with the sales director in Silicon Valley, a designer in Pakistan, and a team of Software Engineers working on the core database product in Moscow. Since then, I moved on to other side projects, the production site is located at https://tarantool.io, feel free to demo the site I left the team with at http://www.tarantool-io.davidgoodman.club/"
      },
			{
			  src: 'todo.png',
        alt:'APP',
        title: 'Todo',
        message: 'Node/Express Todo App',
        href:'https://dgoodman-todo.herokuapp.com',
        features: '',
        git: 'https://github.com/Deg5112/nodeTodo.git',
        modalText1: "MEAN Stack Todo application, meaning this app is built entirely on a NoSQL database called MongoDB, with Nodejs + Express as the backend stack, along with AngularJS on the front end, Web Sockets for real time data updates, and a newer CSS framework called materialize by Google. You can even share a list with a friend, and chat with them in the app.", modalText2: "Other features: Authentication & Social Sign-On strategies utilizing Passport.js, Mongoose ORM for interfacing with MongoDB, handlebars templating engine, express validator for backend form validation, connect-mongo for persistent sessions, Materialize Toasts/dialogs for flash messages, Email Verification & Password Resets, optimized for mobile. The goal for this project is to provide a boiler plate app that has all of the tools you need to build other MEAN stack applications"
      },
			{
			  src:'apartmentShark.png',
        alt:'APP',
        title: 'apartmentShark',
        message: 'web application to track and manage your apartment hunt',
        href:'https://dgoodman-apartment-shark.herokuapp.com',
        features: '',
        git: 'https://github.com/Deg5112/apartmentShark',
        modalText1:"Apartment App to save addresses and quickly cycle between potential listings and leave notes about them. It's basically an apartment diary"
      },
			{
			  src: 'mboutique.png',
        alt:'WEBSITE',
        title: 'MBoutique',
        message: 'small business website',
        href:'http://www.mboutique.davidgoodman.club',
        features: '',
        git: 'https://github.com/Deg5112/Mboutique_Project.git',
        modalText1: "Mock website I made, after being given the wireframe from a design team."
      },
			{
			  src: 'memorymatch.png',
        alt:'GAME',
        title: 'Memory Match',
        message: "concentration game themed after HBO's 'Silicon Valley'",
        href:'https://dgoodman-memory-match.herokuapp.com',
        features: '',
        git: 'https://github.com/Deg5112/Memory_Match_Game_Project.git',
        modalText1: "Memory Match - Conentration game modelled after HBO\'s Silicon Valley. It has a pretty cool SIM city type of design."
      },
			{
			  src: 'SGT.png',
        alt:'APP',
        title: 'Student Grade Table',
        message: 'Education Grade Table App for administrators',
        href:'https://dgoodman-student-grade-table.herokuapp.com',
        features: '',
        git: 'https://github.com/Deg5112/student_grade_table',
        modalText1: "Student Grade Table is a CRUD app demonstrating how to implement Laravel as a backend framework, to create routes, database schemas/migrations and utilize eloquent ORM to define relationships, and easily/securily interface with Mysql, AngularJS framework is used to handle front end logic."
      },
			{
			  src:'calculator.png',
        alt:'APP',
        title: 'Calculator',
        message: 'project I worked on to better understand logic & object oriented programming',
        href:'http://dgoodman-calculator.herokuapp.com',
        features: '',
        git: 'https://github.com/Deg5112/Calculator_Project.git',
        modalText1: "I made a calculator to practice logic, debugging, and object oriented programming"
			}
			// {src:'blog.png', alt:'WEBSITE', title: 'Blog', message: 'A blog with a log-in system tied to a backend database', href:'http://davidgoodman.club/Blog', features: '', git: 'https://github.com/Deg5112/Blog.git', modalText1:"A project where we would build out the functionality needed for a blog. What initially started out as a group project, the Blog was a a project where I participated not only participated in developing the front as well as the backend of the blog, but acted as scrum master.", modalText2: "As scrum master, I assisted with planning out the scope of the project, helped the team prioritize all features that we\'d be able to complete by the deadline, and worked with waffle.io web based task management system that integrates with github to assign out and track the teams progress during this project."}
		];

		self.imgArray = self.projects;

    self.filterArray = function(filter){
			$('a[rel="external"]').click(function() {
			    window.open($(this).attr('href'));
			    return false;
			});

	    self.imgArray = [];
			if (filter === 'ALL') {
				self.imgArray = self.projects;
				return;
			}

			var tempArray = [];
			var length = self.projects.length;
			for(var x = 0; x<length; x++) {
			  if (filter === self.projects[x].alt) {
			    tempArray.push(self.projects[x]);
			  }
			}

			self.imgArray = tempArray;
    };

    self.updateActiveButton = function(num){
        self.activeButton = num;
        $log.info(self.activeButton);
    };
});

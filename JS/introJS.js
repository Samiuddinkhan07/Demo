/**
 * This File Contains Home Intro Tour for the new User.
 
   Created on 30-11-2022
 */
 
 //This function is to trigger intro guide on Login page
 function loginPageGuide(){
    var intro1 = introJs();
        intro1.setOptions({
           steps:[
               {
                   title:'Integral',
                   intro:'Hello,Welcome to Integral'
               },
               {
                   title:'Login Page',
                   element:'#mainWrapper',
                   intro:'This is Login Form',
                   position:'left'
               },
               {
                   title:'Username',
                   element:'#rsUsername',
                   intro:'You can type your usernam here',
                   position:'top'
               },	
               {
                   title:'Next',
                   element:'#showPassword',
                   intro:'click on Next button to get to the password feild'
                   
               },
               
           ],
          nextLabel: 'Next',
           prevLabel: 'Back',
            tooltipClass:'loginTooltip',
          
       });
        intro1.start().oncomplete(function(){
           intro1.exit();
       });
    }
    // Ends here
    
    
    
    // This function is to trigger Intro on the home page
     function homePageGuide(){
           const intro2 = introJs();
       intro2.setOptions({
           steps:[
               {
                   title:'<img src="images/sunset-IntroJS-1.png" width="300px"/><span class="imageText">You have to be responsible for the energy you’re putting out into the world.</span>',
                   intro:'<div> Welcome to <b>Integral</b></div><br> <span class="homeText">Sample loren text for checking if you can add your custom classses in the intro key or variable</span>',
               },
               {
                 title:'<img src="images/homepage-introjs.svg" width="300px"/><span class="mainCardsText">“Extraordinary things are always hiding in places people never think to look.”</span>',
                 element:'#homeSocialTrends',
                 intro:'Here you can find all the latest news and updates' , 
               },
               {
                   title:'<img src="images/calender-introJS.svg" width="300px"/><span class="calenderText">“Setting goals is the first step in turning the invisible into the visible.”</span>',
                   element:'.calendarIcon',
                   intro:'Description',
                   position:'left'
               },
               {
                   title:'<img src="images/settings-introjs.svg" width="300px"/><span class="settingIconText">“You can have it all. Just not all at once.”</span>',
                   element:'.settingIcon',
                   intro:'click here for more settings',
                   position:'left'
               },
               {
                 title:'<img src="images/help-introjs.svg" width="300px"/><span class="helpIconText">"Say something positive, and you’ll see something positive.”</span>',
                 element:'.helpIcon',
                 intro:'Click for any issues' ,
                 position:'left'
                 
               },
               {
                 title:'<img src="images/profile-introjs.svg" width="300px"/><span class="profileIconText">You have to be responsible for the energy you’re putting out into the world.</span>',
                 element:'.userProfileIcon', 
                 intro:'Check your profile here'  ,
                 position:'left'
               },
                {
                  title:'<img src="images/searchbar-introjs.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
                  element:'#toggleSearchFeildDiv',
                  intro:'Search the Data you looking for here.',
                  position:'left' 
               },
                {
                  title:'<img src="images/sidemenu-introjs.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
                  element:'#show-sidebar',
                  intro:'Search the Data you looking for here.',
                  position:'left' ,
               },
                   {
                   title:'<span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
                   element:'.sidebar-content',
                   intro:'Here you can find all the data',
                   position:'right'
                   
               },
               {
                   title:'<img src="images/Data-Analytics-Homepage.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
                   element:'.IntroClass0',
                   intro:'You can customize your chats here ',
                   position:'right'
               },
               {
                   title:'<img src="images/Data-Integration-Homepage.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
                   element:'.IntroClass1',
                   intro:'Do you wish to add jobs?',
                   position:'right'
               },
               {
                   title :'<img src="images/Analytics-Feature.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
                   element:'.IntroClass2',
                   intro:'Do you want to know Analytics Features?',
                   position:'right'
               },
               {
                   title:'<img src="images/Transform-Features.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
                   element:'.IntroClass3',
                   intro:'Do you want to know Transform Features?',
                   position:'right'
               },
               {
                   title:'AI Features',
                   element:'.IntroClass4',
                   intro:'Do you want to know AI Features?',
                   position:'right'
               },
               {
                   title:'AI Knowlegde Base',
                   element:'.IntroClass6',
                   intro:'Do you want to know AI Knowlegde Base?',
                   position:'right'
               },
               {
                   title:'Pricing',
                   element:'.IntroClass7',
                   intro:'Do you want Subscribe?',
                   position:'right'
               },   		  
           ],
           nextLabel: 'Next',
           prevLabel: 'Back',
           tooltipClass:'customTooltip',
       });
    //    intro2.onbeforechange(function () {
    //      if (this._currentStep === 8) {
    //        console.log('what is happening');
    //       sideBarMenuHomeGuide()
    //        return false;
    //      }
    //      });
       intro2.start().oncomplete(function(){
           intro2.exit();
       });
     }
     //Ends here
     
     //This function is to trigger intro for Side bar menu in home page
    //function sideBarMenuHomeGuide(){
    //	const intro11 = introJs();
    //	intro11.setOptions({
    //		steps:[
    //		
    //		],
    //		 nextLabel: 'Next',
    //	     prevLabel: 'Back',
    //		 tooltipClass:'sideBarTooltip',
    //		
    //	})
    //	intro11.start().oncomplete(function(){
    //		intro11.exit();
    //	})
    
     
     //This function is to trigger intro on  Data Analytics Home page
     function dxpAnalyticsGuideHome(){
         const intro3 = introJs();
         intro3.refresh();
         intro3.setOptions({
             steps:[
                {
                    title:'Data Integration',
                    element:'#leftFileUploadMainDivwrapperID',
                    intro:'description goes here',
                    
                },
                {
                    title:'Data Analytics',
                    element:'#visualizationMainDivwrapperID',
                    intro:'Description here'
                },
                 {
                    title:'toggle',
                    element:'#columnsToggleIcon',
                    intro:'click on the icon to add connections'
                },
                {
                    title:'toggle',
                    element:'#visualToggleIcon',
                    intro:'click on the icon to add charts'
                },
                
                 
             ],
           nextLabel: 'Next',
           prevLabel: 'Back',
           tooltipClass:'customTooltip',
             
         });
    //	 intro3.onbeforechange(function(){
    //		 if(this._currentStep === 2){
    //			 console.log('ToggleDivSuccess')
    //    		 toggleIntroToggleDA();
    //			 return false;
    //		 }
    //	 });
         
        intro3.start().oncomplete(function(){
           intro3.exit();
           });
          
     }
     //Ends here
     
    // function toggleIntroToggleDA(){
    //	 const intro12 = introJs();
    //	 intro12.setOptions({
    //		 steps:[
    //			
    //		 ],
    //		   nextLabel: 'Next',
    //	        prevLabel: 'Back',',
    //		    tooltipClass:'toggleToolTips'
    //	 });
    //	 intro12.start().oncomplete(function(){
    //		 intro12.exit();
    //	 })
    // }
     
     
     
     // This function is to trigger intro for the left Data Integration column on Data Analytics home page
     function dataIntegrationGuide(){
         const intro4 = introJs();
         intro4.setOptions({
             steps:[
                 {
                     title:'Data Integration',
                     intro:'Add jobs here'
                 },
                
                 {
                     title:'Connections',
                     element:'#visualConnectionLi',
                     intro:'click on the icon to add connections'
                 },
                 {
                     title:'New Connections',
                     element:'#treeDxpConnectionLi',
                     intro:'Click here to add new connection'
                 },		
                 {
                     title:'Data',
                     element:'#panelContentpanelVisualizationSources',
                     intro:'You can find, Files,Database,Online Services,ERP'
                 }
    
             ],
            nextLabel: 'Next',
             prevLabel: 'Back',
             tooltipClass:'customTooltip',
         });
         intro4.start().oncomplete(function(){
             intro4.exit();
         });
     }
     //Ends here
     
     // This function is to trigger intro for the left Data Analytics column on Data Analytics home page
     function dataAnalyticGuide(){
         const intro5 = introJs();
          intro5.setOptions({
              steps:[
                  {
                      title:'Data Analytics',
                      element:'Here You can add charts',
                  },
                  {
                      title:'Charts',
                      element:'#Visualization',
                      intro:'You can customize your charts here',
                      position:'right'
                  }
              ],
             nextLabel: 'Next',
              prevLabel: 'Back',
              tooltipClass:'customTooltip',
          });
          
           intro5.start().oncomplete(function(){
             intro5.exit();
         });
          
     }
    //Ends here
    
    
    //This function is to trigger intro for Data Inegration home page
    function dataIntegrationHomeGuide(){
        const intro6 = introJs();
        intro6.setOptions({
            steps:[
                {
                    title:'Data Integration',
                    intro:'Welcome to Data Integration',
                },
                {
                    title:'ETL',
                    element:'.showEtlIcons',
                    intro:'Description',
                },
                {
                    title:'New Connections',
                    element:'#newConnections',
                    intro:'Add new connections'
                },
                {
                    title:'Availabe Connections',
                    element:'#availableConnections',
                    intro:'Check for available connections'
                },
                {
                    title:'Jobs',
                    element:'#availableJobs',
                    intro:'Check for available jobs'
                },
                {
                    title:'Schema Objects',
                    element:'#schemaObjects',
                    intro:'schema objects',
                },
                {
                    title:'Sources',
                    element:'#connectionsTabs',
                    intro:'You can find all the sources here',
                },
                {
                    title:'Feed List Container',
                    element:'#feedListContainer',
                    intro:'You can find all the settings related to ETL',
                },
            ],
            nextLabel: 'Next',
            prevLabel: 'Back',
            tooltipClass:'customTooltip',
        });
    //	intro6.onbeforechange(function(){
    //		if(this._currentStep === 1){
    //			console.log("ETL icons")
    //			iconsETL();
    //			return false;
    //		}
    //	})
        intro6.start().oncomplete(function(){
            intro6.exit();
        });
    }
    //Ends here
    
    //function iconsETL(){
    //	const intro13 = introJs();
    //	intro13.setOptions({
    //		steps:[
    //			//etl icons
    //			
    //			
    //		],
    //		nextLabel: '<img src="images/introjs-arrow-next.svg" width="20px"/>',
    //	    prevLabel: 'Back',',
    //		tooltipClass:'iconETLTooltip',
    //	});
    //	intro13.onbeforechange(function(){
    //		if(this._currentStep === 1){
    //			console.log("connection")
    //			connectionsDI();
    //			return false;
    //		}
    //	})
    //	intro13.start().oncomplete(function(){
    //		intro13.exit();
    //	});
    //}
    
    //function connectionsDI(){
    //	const intro14 = introJs();
    //	intro14.setOptions({
    //		steps:[
    //			
    //		],
    //		nextLabel: '<img src="images/introjs-arrow-next.svg" width="20px"/>',
    //	    prevLabel: 'Back',',
    //		tooltipClass:'connectionDITooltip',
    //	});
    //	intro14.onbeforechange(function(){
    //		if(this._currentStep === 4){
    //			fileAndDataDI();
    //			return false;
    //		}
    //	})
    //	intro14.start().oncomplete(function(){
    //		intro14.exit();
    //	});
    //}
    
    //function fileAndDataDI(){
    //	const intro15 = introJs();
    //	intro15.setOptions({
    //		steps:[
    //			
    //		],
    //		nextLabel: '<img src="images/introjs-arrow-next.svg" width="20px"/>',
    //	    prevLabel: 'Back',',
    //		tooltipClass:'fileAndDataDITooltip',
    //	});
    //	intro15.onbeforechange(function(){
    //		if(this._currentStep === 1){
    //			settingDI();
    //			return false;
    //		}
    //	})
    //	
    //	intro15.start().oncomplete(function(){
    //		intro15.exit();
    //	});
    //}
    //function settingDI(){
    //	const intro16 = introJs();
    //	intro16.setOptions({
    //		steps:[
    //			
    //		],
    //		nextLabel: '<img src="images/introjs-arrow-next.svg" width="20px"/>',
    //	    prevLabel: 'Back',',
    //		tooltipClass:' settingDITooltip',
    //	});
    //	
    //	intro16.start().oncomplete(function(){
    //		intro16.exit();
    //	});
    //}
    
    
    //This function is to trigger intro for Transform Features home page
    function transformFeaturesGuideHome(){
        const intro7 = introJs();
        intro7.setOptions({
            steps:[
                {
                    title:'Transform Features',
                    intro:'Welcome to Transform Features',
                },
                {
                    title:'Charts',
                    element:'#allFeaturesMenuListM',
                    intro:'',
                    position:'right'
                },
            ],
            nextLabel: '<img src="images/introjs-arrow-next.svg" width="20px"/>',
            prevLabel: 'Back',
            tooltipClass:'customTooltip',
        });
        intro7.start().oncomplete(function(){
            intro7.exit();
        })
    }
    
    function analyticsFeaturesGuideHome(){
        const intro8 = introJs();
        intro8.setOptions({
            steps:[
                {
                    title:'Analytics Features',
                    intro:'Welcome to Analytics'
                },
                {
                    title:'Charts',
                    element:'#allFeaturesMenuListM',
                    intro:'',
                    position:'right'
                },
            ],
            nextLabel: 'Next',
             prevLabel: 'Back',
            tooltipClass:'customTooltip',
        });
        intro8.start().oncomplete(function(){
            intro8.exit();
    });
    
    }
    
    //This function is to trigger intro for AI  home page
    function aiFeatureGuideHome(){
        const intro9 = introJs();
        intro9.setOptions({
            steps:[
                {
                    title:'AI',
                    intro:'Welcome to AI'
                },
                {
                    title:'Charts',
                    element:'#allFeaturesMenuListM',
                    intro:'',
                    position:'right'
                },
            ],
            nextLabel: 'Next',
             prevLabel: 'Back',
            tooltipClass:'customTooltip',
        });
        intro9.start().oncomplete(function(){
            intro9.exit();
    });
    
    }
    //This function is to trigger intro for DS knowlegde home page
    function dsKnowledgeHomeGuide(){
     const	intro10 = introJs();
        intro10.setOptions({
            steps:[
                {
                    title:'DS',
                    intro:'Welcome to Ds'
                },
                {
                    title:'Charts',
                    element:'#allFeaturesMenuListM',
                    intro:'',
                    position:'right'
                },
            ],
            nextLabel: 'Next',
             prevLabel: 'Back',
            tooltipClass:'customTooltip',
        });
        intro10.start().oncomplete(function(){
            intro10.exit();
        });
    }
     
     function  searchToggleGuide(){
         const intro18 = introJs();
         intro18.setOptions({
             steps:[
                 {
                     title:'search',
                     element:'#SelectedValue',
                     intro:'select the feild you wanna search',
                 },
                 {
                     title:'search',
                     element:'#SearchResult',
                     intro:'search here',
                 },
                 {
                     title:'search',
                     element:'#settingheaderImage',
                     intro:'advanced search',
                 },
                 {
                     title:'search',
                     element:'.languageSelectionBox',
                     intro:'select the language you prefer',
                 },
             ],
             nextLabel: 'Next',
             prevLabel: 'Back',
            tooltipClass:'customTooltip',
        });
        
        intro18.start().oncomplete(function(){
            intro18.exit();
        });
     }
    function calenderGuide(){
        const intro19 =  introJs();
        intro19.setOptions({
            steps:[
                {
                    title:'Calender',
                    intro:'Calender',
                    
                },
                {
                    title:'Calender',
                    intro:'description',
                    element:'#settingPannel'
                }
                
            ],
            nextLabel: 'Next',
             prevLabel: 'Back',
            tooltipClass:'customTooltip',
            
        })
        intro19.start();
    }
     function settingsGuide(){
         const intro20 =  introJs();
         intro20.setOptions({
             steps:[
                 {
                     title:'Setting',
                     intro:'Add settings here'
                 },
                 {
                     title:'Settings',
                     element:'.settingPannel',
                     intro:'You can find all the settings here',
                     position:'left',
                 },
                 {
                     title:'Font Change',
                     element:'.fontChangeIcon ',
                     intro:' You can change font her',
                     position:'left',
                 },
                  {
                     title:'Font Size',
                     element:'.fontSizeIcon ',
                     intro:'You can change font size here',
                     position:'left',
                 },
                  {
                     title:'Dark Theme',
                     element:'.themeChangeIcon',
                     intro:'You can change theme here',
                     position:'left',
                 },
                  {
                     title:'Extended View',
                     element:'.extendedViewIcon',
                     intro:'You can change the screen size to extended view',
                     position:'left',
                 },
                  {
                     title:'Language',
                     element:'.languageChangeIcon',
                     intro:'You can change language here',
                     position:'left',
                 },
                  {
                     title:'Organization',
                     element:'.organizationIcon',
                     intro:'View you organizations here',
                     position:'left',
                 },
                  {
                     title:'Feedback',
                     element:'.feedbackIcon',
                     intro:'Give us a feedback!',
                     position:'left',
                 },
                 {
                     title:'Theme',
                     element:'.ThemesIcon',
                     intro:'Change themes here',
                     position:'left',
                 },
                 {
                     title:'Contact',
                     element:'.contactPreferencesIcon',
                     intro:'Choose your contact prefrences',
                     position:'left',
                 },
                 {
                     title:'Password',
                     element:'.passworIcon',
                     intro:'You can change your passwords here',
                     position:'left',
                 },
                 {
                     title:'About Us',
                     element:'.aboutUsIcon',
                     intro:'About us',
                     position:'left',
                 },
                 {
                     title:'Others',
                     element:'.OtherIcon',
                     intro:'Others',
                     position:'left',
                 },
             ],
             nextLabel: 'Next',
             prevLabel: 'Back',
            tooltipClass:'customTooltip',
             
         })
         intro20.start();
     }
     
     function helpGuide(){
         const intro21 = introJs();
         intro21.setOptions({
             steps:[
                 {
                     title:'Help',
                     intro:'Help',
                     
                 },
                 {
                     title:'Help',
                     element:'#settingPannel',
                     intro:'Help',
                     position:'left',
                 },
                 {
                     title:'Chart',
                     element:'#chartIconID',
                     intro:'Chat with us?',
                     position:'left',
                 },
                 {
                     title:'Help Document',
                     element:'#helpDocumentID',
                     intro:'Help with some document',
                     position:'left',
                 },
                 {
                     title:'Help Video',
                     element:'#helpvideoID',
                     intro:'Hlep with video',
                     position:'left',
                 },
                 {
                     intro:'Help Gif',
                     element:'#helpGifID',
                     intro:'Help with a gif',
                     position:'left',
                 }
             ],
            nextLabel: 'Next',
             prevLabel: 'Back',
             tooltipClass:'customTooltip',
         })
         intro21.start();
     }
     
     function userProfileGuide(){
         const intro22 = introJs();
         intro22.setOptions({
             steps:[
                 {
                     title:'User Profile',
                     intro:'User Profile',
                     position:'left',
                 },
                 {
                     title:'Cart',
                     element:'.shoppingIcon',
                     intro:'Your cart',
                     position:'left',
                 },
                 {
                     title:'Subscription',
                     element:'.subscriptionsClass',
                     intro:'Your subscription',
                     position:'left',
                 },
                 {
                     title:'Transactions',
                     element:'.TransactionClass',
                     intro:'Your transactions',
                     position:'left',
                 },
                 {
                     title:'Wallet',
                     element:'.walletClass',
                     intro:'Your wallet',
                     position:'left',
                 },
                 {
                     title:'Workspace',
                     element:'.workSpaceClass',
                     intro:'Your workspace',
                     position:'left',
                 },
                 {
                     title:'Workspace Analytics',
                     element:'.WorkspaceAnalyticsClass',
                     intro:'Your workspace analytics',
                     position:'left',
                 },
                 {
                     title:'Logout',
                     element:'.logoutIcon ',
                     intro:'Logout',
                     position:'left',
                 },
             ],
             nextLabel: 'Next',
             prevLabel: 'Back',
             tooltipClass:'customTooltip',
             
         })
         intro22.start();
     }
    
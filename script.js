


    $(document).ready(function() {

      const arr2=['./assests/images/communication.png','./assests/images/creativity.png', './assests/images/decision-making.png', './assests/images/teamwork.png'];

      //skills
      jQuery.each(arr2, function(i, val) {
        $("#cards2").append(`<div class='box' id='b2'> <img src=${val} alt="image not found" width="80%" height="80%"></img></div>`);		  
      });



        //SoftSkills
        $.ajax({
            type: "GET",
            url: "skills.xml",
            dataType: "xml",
            success: function(xml) {
              $(xml).find('skill').each(function() {
               let name = $(this).find('name').text();
               $('#cards').append(`<div class='box' id='b1'> <h1> ${name} </h1> </div>`)
              });
            }
          });


        //projects
        $.ajax({
          type: "GET",
          url: "projects.xml",
          dataType: "xml",
          success: function(xml) {
            $(xml).find('project').each(function() {
              let name= $(this).find('title').text();
             let projLink = $(this).find('Link').text();
              var githubLink = $(this).find('githubLink').text();
              console.log(name, projLink, githubLink)
              
              $('#cards3').append(`<div class='box flex-col' id='b3'> <p>Click Links</p> <a class="red" href=${projLink} target='_blank'> ${name} </a> <a href=${githubLink} class="red" target='_blank'> Source Code </a></div>`);
            });
          }
        });



        //form

        $('#contactMe').submit(function(e) {
            e.preventDefault(); 
        
            let name = $('#name').val();
            let email = $('#email').val();
            let message = $('#message').val();
        
            // Simple validation
            if (name && email && message) {
              alert('Form submitted successfully!');
            
            } else {
              alert('Please fill in all fields.');
            }
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
          });


          $("#resume").click(function(){
            window.open('./assests/resume/resume.pdf')
          })


          $("#linkedIn").on("click",function(){
            window.open('https://www.linkedin.com/in/prabhuvishal2018/')
          })

          
          $("#github").on("click",function(){
            window.open('https://github.com/vishalprabhu2018')
          })


          //hide the all content except home
              
          $('#skills, #softSkills, #projects, #contactMe').not('#home').hide();


          //filter

          $('.list').click(function(){

            const value=$(this).attr('data-filter');
           
              $('.itemBox').not('.'+value).hide('1000');
              $('.itemBox').filter('.'+value).show('1000');
            
          })

          $('.list').click(function(){
            $(this).addClass('active').siblings().removeClass('active')
          })


      });
      








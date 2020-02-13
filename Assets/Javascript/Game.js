var targetNumber = 0
var crystalNu1= 0
var crystalNu2= 0
var crystalNu3= 0  
var crystalNu4= 0  

var wins=0
var losses=0
var sum=0

var imageFileName=["blueSwan.jpg","crystalFlowerPurple.jpg","download.jpg","paris.jpg"]


function startGame(){
     targetNumber = Math.floor(Math.random()*101) + 19
     console.log(targetNumber)

     $("#scoreBoard").empty()
     $("#targetNumber").empty()
     $("#targetNumber").append("GAME TARGET NUMBER IS - " +targetNumber)
     
    //  loop is used to generate 4 differant rows and collioms
    var row =$("<div class='row'>")
  
     for (let index = 0; index <  imageFileName.length; index++) {
        crystalNu1 = Math.floor(Math.random()*11)+1
        var collioms = $("<div class = 'col-sm-3'>")
       var img =$("<img>")
       img.attr("src","./Assets/images/"+imageFileName[index])
       img.attr("data-num",crystalNu1)
       img.attr("class","imageBtn")
       collioms.append(img)

       row.append(collioms)
     }
     $("imageDiv").empty()
     $("#imageDiv").append(row)
         

      $(".imageBtn").on("click",function(){
          var dataNum = $(this).attr("data-num")
         dataNum=parseInt(dataNum)
          sum=sum+dataNum
     
          $("#scoreBoard").html(sum)
          if(sum===targetNumber){
               alert("YOU HAVE WON THE PRIZE")
               wins++
               $("#wins").html(wins)
               row.empty()
               sum=0
               startGame()
          } else if(sum>targetNumber){
               alert("YOU HAVE LOST THE GAME BECAUSE YOU SUCK!!")
               losses++
               $("#losses").html(losses)
               row.empty()
               sum=0
               startGame()
          }
     
     })
}
 
startGame()

$("#wins").html(wins)
$("#losses").html(losses)


import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {

  urlImage:String = "https://cdn.shopify.com/s/files/1/0337/9586/6760/products/il_fullxfull.3495327464_8hjj_9643b5c5-f221-4dc9-ae7c-dcfd1b0e1edb_1024x1024.jpg?v=1641910587";


  cambiarUrl1(){
    var personaje = document.getElementsByTagName("td");

    this.urlImage = "https://genshin.global/wp-content/uploads/2022/12/faruzab-character-genshin-impact.webp";


  };
 
  cambiarUrl2(){
    
    var personaje = document.getElementsByTagName("td");
 
    this.urlImage = "https://genshin.global/wp-content/uploads/2022/05/xiao-anemo-profile-genshin-impact.webp";

  };


cambiarUrl3(){
  var personaje = document.getElementsByTagName("td");

  this.urlImage = "https://genshin.global/wp-content/uploads/2020/09/chongyun-cryo-profile-genshin-impact.webp";


};

cambiarUrl4(){
  var personaje = document.getElementsByTagName("td");

  this.urlImage = "https://genshin.global/wp-content/uploads/2022/06/barbara-hydro-profile-genshin-impact.webp";

  

};
cambiarUrl5(){
  var personaje = document.getElementsByTagName("td");

  this.urlImage = "https://genshin.global/wp-content/uploads/2022/10/nilou-hydro-avatar-profile-genshin-impact.webp";


};


}



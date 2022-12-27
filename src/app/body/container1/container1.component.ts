import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container1',
  templateUrl: './container1.component.html',
  styleUrls: ['./container1.component.css']
})
export class Container1Component {

  @Input() urlImage:String = "https://cdn.shopify.com/s/files/1/0337/9586/6760/products/il_fullxfull.3495327464_8hjj_9643b5c5-f221-4dc9-ae7c-dcfd1b0e1edb_1024x1024.jpg?v=1641910587";

// FARUZAN urlImage = "https://genshin.global/wp-content/uploads/2022/12/faruzab-character-genshin-impact.webp";

// XIAO urlImage ="https://genshin.global/wp-content/uploads/2022/05/xiao-anemo-profile-genshin-impact.webp";

// CHONGYUN urlImage = "https://genshin.global/wp-content/uploads/2020/09/chongyun-cryo-profile-genshin-impact.webp";

// BARBARA urlImage = "https://genshin.global/wp-content/uploads/2022/06/barbara-hydro-profile-genshin-impact.webp"

// NILOU urlImage = "https://genshin.global/wp-content/uploads/2022/10/nilou-hydro-avatar-profile-genshin-impact.webp"

}

import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-homenavbar',
  templateUrl: './homenavbar.component.html',
  styleUrls: ['./homenavbar.component.css']
})
export class HomenavbarComponent {
  public ngOnInit(){
    $(document).ready(function() {
      $(".toggle").on("click", function() {
          if ($(".item").hasClass("active")) {
              $(".item").removeClass("active");
          } else {
              $(".item").addClass("active");
          }
      });
  });
  }
}

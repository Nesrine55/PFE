import { AfterViewInit, Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HomepageComponent implements AfterViewInit{
  ngAfterViewInit(): void {


    const images = ['./assets/home/1.jpg', './assets/home/2.jpg', './assets/home/3.jpg', './assets/home/4.jpg', './assets/home/5.jpg', './assets/home/6.jpg', './assets/home/7.jpg'];
    let i = 0;
    const sliderImg = document.querySelector('.sliderImg') as HTMLImageElement;
    var len = images.length;
    
    function slider() {
      if (i > len - 1) {
        i = 0;
      }
      sliderImg.src = images[i];
      i++;
    }
    
    setInterval(slider, 3000);
     
  
  
          
    }
}

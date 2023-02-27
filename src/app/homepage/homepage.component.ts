import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit{
  ngAfterViewInit(): void {


    const images = ['/assets/home/pic1.jpg', '/assets/home/pic2.jpeg', '/assets/home/pic3.png', '/assets/home/pic4.jpg'];
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

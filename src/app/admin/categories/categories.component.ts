import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {Ford,BigCar,Citroin,Car,ColoredCar} from './decorateur/main'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  myCars:Array<Car>

  constructor() { 
    let fordCar=new Ford(80000,"my ford");
    let citroinCar=new Citroin(12000,"hadi citroin")

    let bigFord=new BigCar(fordCar)
    let yelloCitroin=new ColoredCar(citroinCar,'yello');
    this.myCars=[fordCar,citroinCar,bigFord,yelloCitroin]
  }



  ngOnInit() {
  }

}

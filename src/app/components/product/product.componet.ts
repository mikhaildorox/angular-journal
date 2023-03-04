import {Component, Input} from '@angular/core'
import { IProduct } from 'src/app/models/product'

@Component ({ //повесил декоратор на продукт компонент
  selector: 'app-product', //обязательный параметр
  templateUrl: './product.component.html' //путь к шаблону
})

//Новый класс нужно зарегистрировать в апп.модуле
export class ProductComponent {
  @Input() product: IProduct//чтобы использовать автопараметры

  details = false
}

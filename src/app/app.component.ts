import {Component, OnInit} from '@angular/core'; //импорт декоратора компонент
import { IProduct } from './models/product';
import {ProductsService} from "./services/products.service";
import {products} from "./data/products";
import {Observable, tap} from "rxjs";

@Component({ //его настройки
  selector: 'app-root', //назкание компонента для шаблона. использовать как тег в index.html
  templateUrl: './app.component.html', //ссылка на шаблон
  styleUrls: ['./app.component.scss'] //ссылка на стили
})

export class AppComponent implements OnInit{
  title = 'angular journal';

  // products: IProduct[] = []

  loading = false // загрузка элементов на страницу
  products$: Observable<IProduct[]> //вместо создания списка сразу работаю со стримом
  constructor(private productsService: ProductsService) {
  }
  ngOnInit(): void {
    this.loading = true // начало загрузки при переходе на страницу
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    ) // в шаблон сразу стрим
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false // завершение загрузки
    // })
  } //добавил компонент в шаблон


}

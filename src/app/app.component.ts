import { Component } from '@angular/core'; //импорт декоратора компонент

@Component({ //его настройки
  selector: 'app-root', //назкание компонента для шаблона. использовать как тег в index.html
  templateUrl: './app.component.html', //ссылка на шаблон
  styleUrls: ['./app.component.scss'] //ссылка на стили
})
export class AppComponent {
  title = 'angular journal';
}

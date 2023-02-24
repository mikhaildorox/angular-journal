import { Component } from '@angular/core'; //импорт декоратора компонент
import { ITask } from './models/task';
import { tasks as data } from './data/tasks'

@Component({ //его настройки
  selector: 'app-root', //назкание компонента для шаблона. использовать как тег в index.html
  templateUrl: './app.component.html', //ссылка на шаблон
  styleUrls: ['./app.component.scss'] //ссылка на стили
})

export class AppComponent {
  title = 'angular journal';

  tasks: ITask[] = data //добавил компонент в шаблон
}

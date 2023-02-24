import {Component, Input} from '@angular/core'
import { ITask } from 'src/app/models/task'

@Component ({ //повесил декоратор на продукт компонент
  selector: 'app-task', //обязательный параметр
  templateUrl: './task.component.html' //путь к шаблону
})

//Новый класс нужно зарегистрировать в апп.модуле
export class ProductComponent {
  @Input() task: ITask //чтобы использовать автопараметры
}

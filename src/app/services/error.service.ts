// генерирется с помощью CLI ng g s services/error --skip-tests
// здесь будеть инфо об ошибке. Обработка с помощью стрима
import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$ = new Subject<string>()

  handle(message: string) { // автоматически уведомляет подпискиков, при получении ошибки
    this.error$.next(message)
  }

  clear() { // очищает ошибки
    this.error$.next("")
  }

}

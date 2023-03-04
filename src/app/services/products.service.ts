import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, throwError} from "rxjs";
import {IProduct} from "../models/product";
import {ErrorService} from "./error.service";

// чтобы данный сервис был автоматически зарегигстрирован в корневом модуле
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  // делает запрос на сервер и получает данные
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams().append('limit', 5) // ограничение количества элементов на странице
    }).pipe(
      delay(2000), // искуственно замедлю возвращение стрима
      catchError(this.errorHandler) // отлавливаю ошибки
    )
  }

  private errorHandler(error: HttpErrorResponse) { // класс, который работает с ошибками
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Conversao, ConversaoResponse } from '../models';

@Injectable()
export class ConversorService {
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";

  constructor(private http: HttpClient) {}

  converter(conversao: Conversao): Observable<ConversaoResponse> {
    // Altere '?' por '&'
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    
    return this.http.get<ConversaoResponse>(this.BASE_URL + params)
      .pipe(
        catchError(error => throwError(error))
      );
  }

  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    return conversaoResponse ? conversaoResponse.rates[conversao.moedaPara] || 0 : 0;
  }

  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    return conversaoResponse ? (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4) : '0';
  }

  dataCotacao(conversaoResponse: ConversaoResponse): string {
    return conversaoResponse ? conversaoResponse.date || '' : '';
  }
}

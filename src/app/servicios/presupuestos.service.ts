import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://comprasapp-11595.firebaseio.com/presupuestos.json';
  preURL = 'https://comprasapp-11595.firebaseio.com/presupuestos';
  constructor(private http: HttpClient) { }

  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<JSON>(this.presURL, newpres, { headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      }))
  }

  //usando presURL
  getPresupuestos() {
    return this.http.get(this.presURL).pipe(
      map((res: Response) => res));
  }

  //usando preURL
  getPresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url).pipe(
      map((res: Response) => res));
  }

  //método que cuando esté editado el objeto sea enviado a la base de datos:
  putPresupuesto(presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.preURL}/${id$}.json`;
    return this.http.post<JSON>(url, newpre, { headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      }))
  }

  //método para eliminar registros de la base de datos.
  delPresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url).pipe(
      map((res: Response) => res));
  }

  

}

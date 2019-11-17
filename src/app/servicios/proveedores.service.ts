import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProveedoresService {

  presURL = 'https://comprasapp-11595.firebaseio.com/proveedores.json';
  preURL = 'https://comprasapp-11595.firebaseio.com/proveedores';
  
  constructor(private http: HttpClient) { }

  proveedores: any = [
    {
      nombre: 'Telefónica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@telefonica.com',
      contacto: 'Juan Pérez'
    },
    {
      nombre: 'Iberdrola',
      cif: 'B87654321',
      direccion: 'Príncipe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 922222222,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martínez'
    }
  ]

 
  postProveedor(proveedor: any) {
    const newpres = JSON.stringify(proveedor);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.presURL, newpres, { headers }).pipe(
      map((res: Response) => res));
  }

  putProveedor(proveedor: any, id$: string) {
    const newpre = JSON.stringify(proveedor);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.preURL}/${id$}.json`;
    return this.http.put(url, newpre, { headers }).pipe(
      map((res: Response) => res));
  }

  getProveedores() {
    return this.http.get(this.presURL).pipe(
      map((res: Response) => res));
  }

  getProveedor(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url).pipe(
      map((res: Response) => res));
  }

  delProveedor(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url).pipe(
      map((res: Response) => res));
  }
}
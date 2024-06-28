import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
    private isProduction = false;
    private url = this.isProduction
        ? null
        : 'https://localhost:7044/api/';

    constructor() {}

    /**
    Returns the complete URL for a given controller.*
    @param {string} controller - The name of the controller.
    @returns {string} The complete URL for the specified controller.
    */
    public getURL(controller: string) {
        return this.url + controller;
    }
}
export class PageableResponse {
  constructor(public content: any[],
              public last: boolean,
              public totalPages: number,
              public size: number,
              public number: number) {
  }
}
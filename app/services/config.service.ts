import {Injectable} from "@angular/core";

@Injectable ()

export class ConfigService {
  public static baseUrl = "http://localhost:8080/api";
  public static PAGE_SIZE = 20;
}

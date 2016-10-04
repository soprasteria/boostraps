import {Headers} from "@angular/http";
export class SecurityUtils {

  public static authentication(login:string, pwd:string) {
    return {
      headers: this.authenticationHeaders(login, pwd)
    };
  }

  public static authenticationTemp(candidateId:string) {
    return {
      headers: this.authenticationTempHeaders(candidateId)
    };
  }

  private static authenticationHeaders(login:string, pwd:string):Headers {
    return new Headers({'Authorization': 'Basic ' + btoa(login + ':' + pwd)});
  }

  private static authenticationTempHeaders(candidateId:string):Headers {
    return new Headers({'Authorization': 'Basic ' + btoa(candidateId)});
  }

  public static tokenBasedAuthentication() {
    return {
      headers: this.tokenHeaders()
    };
  }

  static tokenHeaders() {
    return new Headers({'X-Auth-Token': localStorage.getItem('session')});
  }
}

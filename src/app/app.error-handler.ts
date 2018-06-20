import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//classe de comportamento de erros
export class ErrorHandler {
    //metodo estatico
    static handleError(error: Response | any) {
        let errorMessage: string;
        //se o erro vier da resposta mostra os detalhes do erro
        if(error instanceof Response) {
            errorMessage = `Erro ${error.status} ao acessar a url ${error.url} - ${error.statusText}`
        } else {
            //se não mostra o texto do erro
            errorMessage = error.toString()
        }

        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}

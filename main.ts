import { Aluno } from "./Aluno";
import prompt from "prompt-sync";

let novo: Aluno = new Aluno("Jaison");

let teclado = prompt();
let option: number = 0;

while (true) {
    console.log(`========== Aluno ${novo.nome} =============`);
    console.log("||1. Estudar                        ||");
    console.log("||2. Malhar                         ||");
    console.log("||3. Feliz                          ||");
    console.log("||4. Procrastinar                   ||");
    console.log("||8. Informações                    ||");
    console.log("||9. Sair                           ||");
    console.log("=====================================");

    option = +teclado("Escolha uma opção ");

    if(option == 9){
        console.log(`Tchau Tchau`);
        break
    }
    switch (option) {
        case 1:
            novo.estudar();

            console.log(novo.status());
            break;
        case 2:
            novo.malhar();
            console.log(novo.status());
            break;
        case 3:
            novo.feliz()
            console.log(novo.status());
            break;
        case 4:
            novo.procrastinar()

            console.log(novo.status());
            break;
        case 8:
            console.log(novo.status());
            break;
        default:
            break;
    }
}

export class ValidatorsService{
    static min(value,min){
        if(value.length < min){
            return `Veuillez tapper au moins ${min} lettre(s)`;
        }
    }
}
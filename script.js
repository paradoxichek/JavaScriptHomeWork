let grade = prompt("напиши оценку кабачковый баклажан")


switch (grade) {
    case 'A':   
        alert(' ОПАНА ЭТО ДЕСЯТОЧКА, МОЛОДЕЦ КАБАЧКОВЫЙ БАКЛАЖАН')
        break;
    case 'B':   
        alert(' ЭТО СЕМЕРОЧКА ЭТО ХОРОШО КАБАЧКОВЫЙ БАКЛАЖАН')
        break;
    case 'C':   
        alert('ЭТО УЖЕ ПЯТЕРОЧКА, НУУУ ЭТО УДЕВЛОТВОРИТЕЛЬНО КАБАЧОК БАКЛАЖАНОВЫЙ')
        break;
    case 'D':   
        alert(' ЭТО ДВОЕЧКА, ИДИ УЧИ ДЖАВУ СКРИПТ ТУПИЦА')
        break;

    default:
    alert( 'ЭТО УЖЕ НЕ БАЛ, БАЛЛЫ ТОК (A B C D) ПОСТАВЬТЕ МНЕ БАЛЛ (А) ТОЕСТЬ ДЕСЯТОЧКУ')

        break;
}
// 1
// в переменную grade попадает оценка в виде букв:
// если A показать в консоли 'Отлично'
// если B показать в консоли 'Хорошо'
// если C показать в консоли 'Удовлетворительно'
// если D показать в консоли 'Неудовлетворительно'
// в случае других букв или символов показать "Неккоректная оценка"

// Важно чтобы сработало один из всех условий
// Пользоваться с if else нельзя!!

// 2
// Выгрузить файлы в репозиторий в Github

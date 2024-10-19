//  1. Реалізувати алгоритм: сортування бульбашкою для наступного масиву [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19]

let arr1 = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19]

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - i; j++) {
        if (arr1[j] > arr1[j + 1]) {
            let temp = arr1[j]
            arr1[j] = arr1[j + 1]
            arr1[j + 1] = temp
        }

    }

}

console.log(' -------------- 1. Реалізувати алгоритм: сортування бульбашкою');


console.log(arr1);

//  Вивести всі алгоритми цієї лекції і попередньої в функції, викличте функції

console.log('----------------- 2. Вивести всі алгоритми цієї лекції і попередньої в функції, викличте функції');
linearSearch()
binarySearch()
bubleSort()

function linearSearch() {
    const array1 = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів'];
    let result = '';
    let collectIt = 0
    for (let i = 0; i < array1.length; i++) {
        collectIt++
        if (array1[i] === 'Крим') {
            result = `index: ${i}, value: ${array1[i]}`
            break
        }

    }
    console.log('Лінійний Алгоритм:' + result);
    console.log('Кількість ітерацій:' + collectIt);
}

function binarySearch() {
    const array2 = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]

    let startInd = 0
    let endInd = array2.length - 1
    let center = endInd / 2
    let find = 60
    let collectIt = 0
    let result = 'не знайдено'

    do {
        collectIt++
        if (find === array2[center]) {
            result = `index: ${center}; value: ${array2[center]}`
            break
        }
        if (find > array2[center]) {
            startInd = center + 1
            center = Math.round((startInd + endInd) / 2)
        }
        if (find < array2[center]) {
            endInd = center - 1
            center = Math.round((startInd + endInd) / 2)
        }

    } while (startInd <= endInd);



    console.log('Бінарний алгоритм: ' + result);
    console.log('Кількість ітерацій: ' + collectIt);
}

function bubleSort() {
    let arr1 = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19]
    let collectIt = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length - i; j++) {
            collectIt ++
            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp
            }

        }

    }

    console.log('Cортування бульбашкою');


    console.log(arr1);
    console.log(`Кількість ітерацій: ${collectIt}`);
    
}

//  3. Створіть функцію яка виводить в консоль пояснення того що таке hosting
wasIstDasHosting()
function wasIstDasHosting() {
    console.log(' -------------3. Створіть функцію яка виводить в консоль пояснення того що таке hosting');
    
    console.log('Хостинг це механізм який піднімає функції і декларації змінних вар на початок коду перед його виконанням');
    
}

//  4. Створіть функцію яка виводить в консоль пояснення що таке scope
wasIstDasScope()
function wasIstDasScope() {

    console.log('-----------4. Створіть функцію яка виводить в консоль пояснення що таке scope');
    
    console.log('Scope це область видимості. Існує глобальна, блочна і функціональна. ');
    console.log('Коли щось декларуеться поза функцій і фігурних дужок воно має глобальну область видимості і доступно для всього що йде нижче ао коду');
    console.log('Але Якщо це функція або змінна вар то вона доступна по всьому коду як зверху так і знизу');
    console.log('Блочна це те що було делароване в фігурних скобках і доступно тільки там, наприклад в циклі');
    console.log('Функціональна це те що доступно внутрі функції');
    console.log('Важливо памятати що вкладені функції чи цикли мають доступ до змінних с блочною або функціональною');
    console.log('о. в. які були задекларовані я якомусь батькифському елементі');
    
    
    
}

//  5. Створіть функцію яка виводить в консоль пояснення чим поганий var
warumIstVarNichtGud()
function warumIstVarNichtGud() {
    console.log('----------5. Створіть функцію яка виводить в консоль пояснення чим поганий var');

    console.log('По перше хостинг пиднимає декларацію вара. Але не піднімає його ініціалізацію. І це вважаеться не дуже хорошою практикою в програмуванні');
    console.log('Також якщо вар оголошена в якомусь блоці (НЕ Функцій), то вона доступна і поза його межі');
    console.log('Вар можна ініціалізувати з одним імьям безліч разів що може призвести до помилок в коді');
    console.log('Якщо оголосити вар в функції то вона буде доступна тільки в межах функції');
    console.log('Так що краще користуватися лет і конст так як їхня поведінка більш передбачувана. А правила декларації більш строгі що робить код безпечнішим');
    
    
}
let money, time;
function start(){
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appDate = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            a = prompt('Введите обязательную статью расходов в этом месяце', '');
            b = prompt('Во сколько обойдется?');
        
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
                console.log('Done');
                appDate.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appDate.moneyPerDay = (appDate.budget / 30).toFixed();
        alert('ежедневный бюджет: ' + appDate.moneyPerDay);
    },
    detectLevel: function() {
        if(appDate.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка')
        } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
            console.log('Срежний уровень достатка')
        } else if (appDate.moneyPerDay > 2000){
            console.log('Высокий уровень достатка')
        } else {
            console.log('Произошка ошибка')
        }
    },
    checkSavins: function() {
        if(appDate.savings == true){
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
            appDate.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appDate.monthIncome);  
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 3; i++){
            let opt = prompt('Статья необязательных расходов?', '');
            appDate.chooseOptExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appDate.income = items.split(', ');
        appDate.income.push(prompt('Может что-то еще?', ''));
        appDate.income.sort();
    }
}

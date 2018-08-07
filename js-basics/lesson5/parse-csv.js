(function (document) {
  
  // CONSTANTS
  const FILE = readFile();
  const FRACTION_FIXER = 100;
  const TO_FIXED = 2;
  
  const tableIndex = {
    MONTH: 0,
    DEPARTMENT: 1,
    EMPLOYEE: 2,
    AMOUNT: 3
  };

  // DOM Elems
  const totalTbody = document.getElementById('total-payments'),
        monthTbody = document.getElementById('month-average'),
        departmentTbody = document.getElementById('department-average'),
        totalAmountTfoot = document.getElementById('total-amounts'),
        monthAmountTfoot = document.getElementById('month-amounts'),
        departmentAmountTfoot = document.getElementById('department-amounts');

  const fileData = FILE.split('\n')
    .slice(1) // remove text header 
    .map((line) => line.trim().split(','))
    .map((arr) => ({
      month: arr[tableIndex.MONTH], 
      department: arr[tableIndex.DEPARTMENT],
      employee: arr[tableIndex.EMPLOYEE],
      amount: arr[tableIndex.AMOUNT]
    }));

  const getCorrectSum = (sum) => (sum / FRACTION_FIXER).toFixed(TO_FIXED);

  const getAverage = (sum, divider) => getCorrectSum(sum / divider);

  const getTotal = (sum, divider) => (divider) ? 
    getAverage(sum, divider) :
    getCorrectSum(sum);

  const fillTable = (tableEl, data, totalEl, needAverage) => {
    let sumAllAmount = 0;
    
    data.forEach((item) => {
      const trEl = document.createElement('tr');

      for (let key in item) {
        const tdEl = document.createElement('td');
        tdEl.textContent = item[key];
        
        trEl.appendChild(tdEl);
      }
      
      sumAllAmount += Number(item.amount) * FRACTION_FIXER;
      
      tableEl.appendChild(trEl);
    });

    totalEl.textContent = needAverage ? 
      getTotal(sumAllAmount, data.length) :
      getTotal(sumAllAmount); 
  };

  const preparedData = (data, averages, parametr = 'title') => {
    const result = [];
    
    for (let key in data) {
      const amount = getAverage(data[key], averages[key]); 
      
      result.push({ [parametr]: key, amount });
    }

    return result;
  };

  const preparedDataByParametr = (data, parametr) => {
    const averageCounters = {};
    const totalAmounts = data.reduce((acc, item) => {
      const param = item[parametr];
      const amount = Number(item.amount) * FRACTION_FIXER;

      if (!averageCounters[param]) averageCounters[param] = 0;
    
      (acc[param]) ?
        acc[param] += amount :
        acc[param] = amount;
      
      averageCounters[param] += 1;
           
      return acc;
    }, {});
    
    return preparedData(totalAmounts, averageCounters, parametr);
  };

  // total
  fillTable(
    totalTbody, 
    fileData, 
    totalAmountTfoot
  );
  
  // month
  fillTable(
    monthTbody,
    preparedDataByParametr(fileData, 'month'), 
    monthAmountTfoot,
    true
  );
  
  // department
  fillTable(
    departmentTbody,
    preparedDataByParametr(fileData, 'department'), 
    departmentAmountTfoot,
    true
  );  

})(document);

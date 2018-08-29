export const paymentMap = payment => ({
  month: payment[0], 
  department: payment[1],
  amount: parseFloat(payment[3])
});

export const makeRows = line => line.trim().split(',');

export const sumAverage = ({sum = 0, count = 0} = {}, value) => ({
  sum: sum += value,
  count: count += 1,
  average: sum / count
});

export const groupTotals = (key, dataField) => items => items.reduce(
  (state, item) => ({ // reducere
    ...state, 
    [item[key]]: sumAverage(state[item[key]], item[dataField]),
  }),
  {} // initialState
);

export const sumTotal = dataField => items => 
  items.reduce(
    (acc, item) => acc + (item[dataField] * 100)
    , 0
  ) / 100;


export const renderTableData = (table, data) => {
  let rowHtml = Object.entries(data)
    .map(([title, dataObj]) => 
      `<tr><td>${title}</td><td>${dataObj.average.toFixed(2)}</td></tr>`
    )
    .join('');
  
  table.innerHTML = rowHtml;
};

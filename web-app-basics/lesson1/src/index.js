import { readFile } from './data';
import { paymentMap, makeRows, groupTotals, sumTotal, renderTableData } from './helpers';

const monthEl = document.getElementById('month-average'),
      departmentEl = document.getElementById('department-average'),
      totalAmount = document.getElementById('total-amounts')

const fileData = readFile()
  .split('\n')
  .slice(1)
  .map(makeRows )
  .map(paymentMap);

const groupByMonth = groupTotals('month', 'amount')(fileData);
const groupByDep = groupTotals('department', 'amount')(fileData);
const total = sumTotal('amount')(fileData);

totalAmount.textContent = total;
renderTableData(monthEl, groupByMonth);
renderTableData(departmentEl, groupByDep);

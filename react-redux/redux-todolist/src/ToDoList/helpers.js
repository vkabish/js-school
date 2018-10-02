// const True = () => true;
const False = () => false;
const isCompleted = ({ completed }) => completed;
const isNotCompleted = ({ completed }) => !completed;
const isDeleted = ({ deleted }) => deleted;
const isNotDeleted = ({ deleted }) => !deleted;

export const getFilterFunc = filter => (
  filter === 'all' ? isNotDeleted :
  filter === 'completed' ? isCompleted :
  filter === 'not-completed' ? isNotCompleted :
  filter === 'deleted' ? isDeleted :
  False
);

export const filterList = (list, filter) => list.filter(filter);

export const get = field => obj => obj[field];

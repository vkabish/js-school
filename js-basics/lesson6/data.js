const admin = new Admin('Furi', 40);

const capitanAmerica = new Teacher('Steve Rodgers, aka Capitan America', 39, 'Willpower', 2);
const ironMan = new Teacher('Tony Stark, aka Iron Man', 41, 'Techologies', 1);
const blackWidow = new Teacher('Natasha Romanov, aka Black Widow', 38, 'SPY', 1);

const teachers = [ironMan, capitanAmerica, blackWidow];

const startAssessments = () => ({
  'Willpower': [],
  'Techologies': [],
  'SPY': []
});

const group = [
  new Student('John', 22),
  new Student('Masha', 19),
  new Student('Freddy', 23),
  new Student('Jack', 20),
  new Student('Steve', 22),
  new Student('Missy', 20),
  new Student('Jonny', 24),
  new Student('Mick', 19),
  new Student('Nataly', 21),
  new Student('Tina', 23),
  new Student('Albert', 25),
  new Student('Bruce', 22),
  new Student('Antony', 19),
  new Student('Richard', 22),
  new Student('Tom', 22),
  new Student('Jerry', 19),
  new Student('Carl', 22),
  new Student('Sibastian', 22),
  new Student('Robert', 26),
  new Student('Zick', 18),
  new Student('Marry', 21),
];

const lessons = [
  {
    admin,
    teacher: ironMan,
    group
  },
  {
    admin,
    teacher: blackWidow,
    group
  },
  {
    admin,
    teacher: capitanAmerica,
    group
  },
  {
    admin,
    teacher: ironMan,
    group
  },
  {
    admin,
    teacher: capitanAmerica,
    group
  },
  {
    admin,
    teacher: blackWidow,
    group
  },
  {
    admin,
    teacher: capitanAmerica,
    group
  },
  {
    admin,
    teacher: ironMan,
    group
  },
  {
    admin,
    teacher: capitanAmerica,
    group
  },
  {
    admin,
    teacher: blackWidow,
    group
  },
  {
    admin,
    teacher: capitanAmerica,
    group
  },
  {
    admin,
    teacher: ironMan,
    group
  },
  {
    admin,
    teacher: capitanAmerica,
    group
  },
  {
    admin,
    teacher: ironMan,
    group
  },
  {
    admin,
    teacher: capitanAmerica,
    group
  },
  {
    admin,
    teacher: ironMan,
    group
  },
  {
    admin,
    teacher: blackWidow,
    group
  },
  {
    admin,
    teacher: capitanAmerica,
    group
  },
  {
    admin,
    teacher: ironMan,
    group
  },
  {
    admin,
    teacher: blackWidow,
    group
  },
  {
    admin,
    teacher: capitanAmerica,
    group
  }
];

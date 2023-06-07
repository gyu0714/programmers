function solution(id_pw, db) {
  var answer = '';

  db.map((dbList) => {
    const [id, pw] = dbList;
    const [inputId, inputPw] = id_pw;

    if (id === inputId && pw === inputPw) {
      return (answer = 'login');
    }

    if (id === inputId) {
      if (pw !== inputPw) {
        return (answer = 'wrong pw');
      }
    }

    if (id !== inputId && pw !== inputPw) {
      return (answer = 'fail');
    }
  });
  return answer;
}

const id_pw = ['meosseugi', '1234'];
const db = [
  ['rardss', '123'],
  ['yyoom', '1234'],
  ['meosseugi', '1234'],
];

solution(id_pw, db);

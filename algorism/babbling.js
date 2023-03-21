const solution = (babbling) => {
  const result = babbling
    .map((_) => _.replace(/aya|ye|woo|ma/g, ''))
    .filter((e) => !e).length;

  console.log(result);
  return result;
};

solution(['aya', 'yee', 'u', 'maa', 'wyeoo']);
solution(['aya', 'yee', 'u', 'ma', 'wooyeoo']);

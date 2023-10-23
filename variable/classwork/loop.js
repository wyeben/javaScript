function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }
  
  loop(
    0,
    (value) => value <= 5,
    (value) => value + 1,
    (value) => {
      console.log(value);
    }
  );
  
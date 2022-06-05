export const html = `<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello</title>
  <style>
    .foo {
      color: red;
    }

    .foo {
      color: red;
    }

    .bar {
      color: blue;
    }
  </style>
</head>
<body>
  <div>Hello</div>
  
  <script>
    // Comment
    var foo = {
      bar: 'baz'
    };

    console.log(foo.bar);
  </script>
</body>
</html>
`

export const css = `/* CSS */
.foo {
  color: red;
}

.foo {
  color: red;
}

.bar {
  color: blue;
}
`

export const javascript = `// JavaScript
const foo = {
  bar: 'baz'
};

console.log(foo.bar);
`

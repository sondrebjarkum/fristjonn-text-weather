export const Root = (content: string) => `
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Værvarsel for Bryggebu</title>

  <style>
    body{
      font-family: Sans-Serif;
    }
    table {
      margin: 0 auto;
    }

    table {
      color: #333;
      background: white;
      border: 1px solid grey;
      font-size: 12pt;
      border-collapse: collapse;
    }

    table thead th,
    table tfoot th {
      color: #777;
      background: rgba(0, 0, 0, .1);
    }

    table caption {
      padding: .5em;
    }

    table th,
    table td {
      padding: .5em;
      border: 1px solid lightgrey;
    }
  </style>
</head>
<body>
${content}
</body>
</html>
`;

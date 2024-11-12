
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My React App</title>
</head>
<body>
  <div id="root"></div>

  <!-- Load React -->
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

  <!-- Load your React code -->
  <script src="app.js"></script>

  <script>
    // Render the React component
    ReactDOM.render(
      React.createElement(App),
      document.getElementById('root')
    );
  </script>
</body>
</html>

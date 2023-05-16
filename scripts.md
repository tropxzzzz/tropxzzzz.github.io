<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>OwlHub</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .header {
      background-color: #c33df1;
      display: flex;
      align-items: center;
      padding: 10px;
    }

    .logo {
      width: 50px;
      height: 50px;
      background-color: #c33df1;
      border-radius: 50%;
    }

    .logo img {
      width: 100%;
      height: 100%;
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #000;
      width: 200px;
      height: 100px;
      margin-top: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .button:hover {
      transform: scale(1.1);
    }

    .button img {
      width: 100%;
      height: auto;
    }

    .button-text {
      font-size: 18px;
      color: #fff;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">
      <img src="your-logo-purple.png" alt="Logo">
    </div>
  </div>

  <div class="button">
    <img src="owlhub.png" alt="OwlHub">
    <p class="button-text">Owl Hub</p>
  </div>
</body>
</html>

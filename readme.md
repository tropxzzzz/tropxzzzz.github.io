<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ScriptsForUs</title>
  <link rel="icon" href="https://cdn.icon-icons.com/icons2/1875/PNG/512/script_120049.png">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #000;
      margin: 0;
      padding: 0;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      flex-direction: column;
    }

    .icon {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
      filter: drop-shadow(0 0 5px #c33df1);
    }

    .message {
      font-size: 24px;
      text-align: center;
      color: #fff;
    }
  </style>
  <script>
    // Check if VPN is active
    function checkVPN() {
      // Replace this condition with your own VPN detection logic
      var isVPNActive = checkForVPN();
      
      if (isVPNActive) {
        // Open the "scripts" file in GitHub repository if VPN is active
      } else {
        // Display message if no VPN is detected
         window.location.href = 'tropxzzzz.github.io/scripts';

      }
    }
    
    // Function to check if VPN is active
    function checkForVPN() {
      // Modify this function to suit your VPN detection mechanism
      
      // Here's a simple example that checks for a known VPN IP range
      var knownVPNIPs = ['1.2.3.4', '5.6.7.8'];
      
      // Get user's IP address
      var userIP = '';
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          userIP = data.ip;
          
          // Check if user's IP matches known VPN IP range
          if (knownVPNIPs.includes(userIP)) {
            // VPN is active
            checkVPN();
          } else {
            // VPN is not active
            var message = document.getElementById('message');
            message.textContent = 'No VPN opening';
          }
        })
        .catch(error => {
          console.error('Error retrieving IP:', error);
          // Handle the error if IP retrieval fails
          var message = document.getElementById('message');
          message.textContent = 'No VPN opening';
        });
    }
    
    // Function to animate the dots in the message
    function animateDots() {
      var message = document.getElementById('message');
      var dots = '';
      var counter = 0;
      var intervalId = setInterval(function() {
        dots += '.';
        message.textContent = 'Checking VPN status' + dots;
        counter++;
        if (counter === 3) {
          dots = '';
          counter = 0;
        }
      }, 1000);
      
      setTimeout(function() {
        clearInterval(intervalId);
        message.textContent = 'Checking VPN status...';
        checkVPN();
      }, 5000);
    }
  </script>
</head>
<body onload="animateDots()">
  <div class="container">
    <img class="
icon" src="https://cdn.icon-icons.com/icons2/1875/PNG/512/script_120049.png" alt="Script Icon">
<p id="message" class="message">Checking VPN status...</p>
  </div>
</body>
</html>

let targetColor; 
let isHard;

function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
}
    
function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
}
    
function easyModeGame() {
  isHard = false;
  
  document.getElementById('color-boxes').innerHTML = '';

  targetColor = getRandomColor();

  document.getElementById('color-rgb').textContent = targetColor;

  const easyColors = [targetColor, getRandomColor(), getRandomColor()];

  const shuffledEasyColors = shuffleArray(easyColors);

  for (let i = 0; i < 3; i++) {
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';

    colorBox.style.backgroundColor = shuffledEasyColors[i];

  
    colorBox.addEventListener('click', function () {
      if (shuffledEasyColors[i] === targetColor) {
      
        document.getElementById('color-rgb').style.color = targetColor;
        Swal.fire("Congratulations! :) You Guessed The Color");
      
        document.querySelectorAll('.color-box').forEach((box, index) => {
          if (index !== i) {
            box.style.backgroundColor = 'transparent';
          } else {
            
            box.classList.add('centered-box');
          }
        });
     
        
      } else {
        colorBox.style.display = 'none';
      
        Swal.fire("Wrong Guess.. Do Not Give Up! Try Again!");
      }

    });

    document.getElementById('color-boxes').appendChild(colorBox);
  }
    document.getElementById('color-rgb').style.color = `white`;
}

document.getElementById("easy-mode").addEventListener("click", easyModeGame());
document.getElementById("hard-mode").addEventListener("click", setupGame());



function setupGame() {
  
  document.getElementById('color-boxes').innerHTML = '';
  
  targetColor = getRandomColor();

      document.getElementById('color-rgb').textContent = targetColor;

      const colors = [targetColor, getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];

      const shuffledColors = shuffleArray(colors);

      for (let i = 0; i < 6; i++) {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';

        colorBox.style.backgroundColor = shuffledColors[i];

        colorBox.addEventListener('click', function() {
          if (shuffledColors[i] === targetColor) {
            document.getElementById('color-rgb').style.color = targetColor;
            Swal.fire("Congratulations! :) You Guessed The Color");
            
            document.querySelectorAll('.color-box').forEach((box, index) => {
              if (index !== i) {
                box.style.backgroundColor = 'transparent';
              } else {
               
                box.classList.add('centered-box');
              }

            }); 
              
          } else {
            colorBox.style.display = 'none';
          
            Swal.fire("Oops! Wrong Guess.. Do Not Give Up! Try Again!");
          }
        });

        document.getElementById('color-boxes').appendChild(colorBox);
        
  }
  document.getElementById('color-rgb').style.color = `white`;
  
}
    
    function resetGame() {
        document.getElementById('color-rgb').classList.remove('correct-guess');
      document.getElementById('color-rgb').style.color = `black`;
       
      if (isHard) { 
        setupGame();
      } else {
        easyModeGame();
      }
      
    }

setupGame();
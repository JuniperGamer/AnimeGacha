// Define hero names
const heroes = {
    5: ["John", "Jane", "Alex"],
    4: ["Jolene", "MC-2", "Carol"],
    3: ["Weapon- Lexicon Rinser", "Weapon- Eclipse Slasher"],
  };
  
  // Display gacha result
  function displayResult(result) {
    const resultsContainer = document.getElementById("results");
    const resultElement = document.createElement("div");
    resultElement.className = "result";
    resultElement.textContent = result;
    resultsContainer.appendChild(resultElement);
  }
  
  // Clear previous results
  function clearResults() {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  }
  
  // Define gacha functions
  const gacha = {
    pityCount: 0,
    pityIncrement: 1, // Chance increment for 5-star pull after 72 unsuccessful pulls,
    pullCounter: 0, // Counter for pull number
  
    pull() {
      const x = Math.floor(Math.random() * 100) + 1;
  
      if (this.pityCount >= 90 && x > 99.1) {
        const hero = this.chooseHero(5);
        displayResult(`5 star won: ${hero}`);
        this.resetPityCount();
        return hero;
      } else {
        this.increasePityCount();
      }
  
      if (x <= 1) {
        const hero = this.chooseHero(5);
        displayResult(`5 star won: ${hero}`);
        this.resetPityCount();
        return hero;
      } else if (x <= 19) {
        const hero = this.chooseHero(4);
        displayResult(`4 star won: ${hero}`);
        return hero;
      } else {
        const hero = this.chooseHero(3);
        displayResult(`3 star won: ${hero}`);
        return hero;
      }
    },
  
    increasePityCount() {
      this.pityCount += this.pityIncrement;
    },
  
    resetPityCount() {
      this.pityCount = 0;
    },
  
    chooseHero(rarity) {
      const heroList = heroes[rarity];
      const index = Math.floor(Math.random() * heroList.length);
      return heroList[index];
    },
  
    singlePull() {
      clearResults();
      this.pullCounter++;
      this.pull();
      displayResult(`-- Pull #${this.pullCounter} --`);
    },
  
    tenPull() {
      clearResults();
      let guarantee4Star = true;
      for (let i = 0; i < 10; i++) {
        this.pullCounter++;
        displayResult(`-- Pull #${this.pullCounter} --`);
        if (guarantee4Star && i === 9) {
          const hero = this.chooseHero(4);
          displayResult(`4 star won: ${hero}`);
          guarantee4Star = false;
        } else {
          this.pull();
        }
      }
    },
  };
  
  // Run single pull and display result
  function runSinglePull() {
    gacha.singlePull();
  }
  
  // Run ten-pull and display results
  function runTenPull() {
    gacha.tenPull();
  }
  
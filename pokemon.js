// A força do ataque é multiplicada pelo nível do pokemon 
// Ex: Pikachu nível 30
// Ataque Rápido: 
// Dano: 70 * (1 + 0,3)

// A defesa é utilizada com a seguinte multiplicação ao ataque recebido 
// Ataque: 60
// Defesa: 50
// Dano total recebido: 60 * (1 - 0,5) = 30


const pikachu = {
  tipo: "Elétrico",
  hp: 35,
  energia: 60,
  level: 30,
  defesa: 40,
  ataques: { 
    "Ataque Rápido": {
      dano: 20,
      energiaConsumida: 18,
      chanceDeAcerto: 100
    },
    "Investida Trovão": {
      dano: 30,
      energiaConsumida: 9,
      chanceDeAcerto: 70,
    },
    "Choque do Trovão":  {
      dano: 40,
      energiaConsumida: 28,
      chanceDeAcerto: 60
    }
  } 
}

const charizard = {
  tipo: "Fogo",
  hp: 78,
  energia: 84,
  level: 20,
  defesa: 60,
  ataques: { 
    "Lança-Chamas": {
      dano: 60,
      energiaConsumida: 28,
      chanceDeAcerto: 80
    },
    "Rajada de Chamas": {
      dano: 39,
      energiaConsumida: 9,
      chanceDeAcerto: 70,
    },
    "Soco de Fogo":  {
      dano: 55,
      energiaConsumida: 28,
      chanceDeAcerto: 60
    }
  } 
}

// function ataque

// function regen

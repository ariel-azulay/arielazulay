/**/
// משתנים גלובליים
const board = document.querySelector('.game-board'); // לוח המשחק
const symbols = ['🍎', '🍊', '🍌', '🍇', '🍉', '🍒', '🍍', '🥝']; // סמלים לקלפים
const cards = [...symbols, ...symbols]; // יצירת זוגות סמלים
let flippedCards = []; // קלפים שהתהפכו
let matchedCards = 0; // קלפים תואמים

// פונקציה לערבוב הקלפים
function shuffleCards() {
  cards.sort(() => 0.5 - Math.random()); // ערבוב אקראי של הקלפים
}

/**/

// יצירת הקלפים והצגתם
cards.forEach(symbol => {
  const card = document.createElement('div'); // יצירת אלמנט div לכל קלף
  card.classList.add('card'); // הוספת מחלקת CSS לכל קלף
  card.dataset.symbol = symbol; // שמירת הסמל ב-data-attribute
  card.innerText = symbol; // הצגת הסמל כטקסט על הקלף
  board.appendChild(card); // הוספת הקלף ללוח המשחק
});

// אירוע לחיצה על קלף
board.addEventListener('click', e => {
  const clickedCard = e.target; // זיהוי הקלף שנלחץ

  // בדיקות: אם לא קלף, או קלף שכבר הפוך
  if (!clickedCard.classList.contains('card') || clickedCard.classList.contains('flipped')) return;

  clickedCard.classList.add('flipped'); // הפיכת הקלף
  flippedCards.push(clickedCard); // הוספת הקלף המהופך למערך

  // בדיקה אם שני קלפים הפוכים
  if (flippedCards.length === 2) {
    checkMatch(); // קריאה לפונקציה לבדיקת התאמה
  }
});

/***/
/**/

// פונקציה לבדוק אם יש התאמה בין שני קלפים
function checkMatch() {
  const [card1, card2] = flippedCards; // פרוק הקלפים שהתהפכו

  if (card1.dataset.symbol === card2.dataset.symbol) {
    // אם יש התאמה בין הקלפים
    card1.classList.add('matched'); // הוספת מחלקת התאמה לקלף הראשון
    card2.classList.add('matched'); // הוספת מחלקת התאמה לקלף השני
    matchedCards += 2; // עדכון מספר הקלפים התואמים

    // בדיקה אם המשחק נגמר (כל הקלפים תואמים)
    if (matchedCards === cards.length) {
      setTimeout(() => alert('ניצחתם!'), 300); // הצגת הודעת ניצחון
    }
  } else {
    // אם אין התאמה בין הקלפים - הפיכת הקלפים חזרה
    setTimeout(() => {
      card1.classList.remove('flipped'); // הסרת מצב "הפוך" מהקלף הראשון
      card2.classList.remove('flipped'); // הסרת מצב "הפוך" מהקלף השני
    }, 1000); // המתנה של שנייה לפני הפיכת הקלפים חזרה
  }

  flippedCards = []; // ניקוי המערך של הקלפים שהתהפכו
}
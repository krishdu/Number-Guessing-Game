# Number Guessing Game
```
Number Guessing Game
```
> While building this Number Guessing Game application,
> I learned how to use built-in Js functions (e.g. alert(), Math.random() )
> and how to use document Web APIs like querySelector.
> Also I tried to change the webpage design using JS

| [Play Live (👆)](https://krishdu.github.io/Number-Guessing-Game) |
| ------|

<p align="center">
<img alt="GIF" src="https://github.com/krishdu/Number-Guessing-Game/blob/master/number-guessing-game-image.gif?raw=true" width="800" height="400"/>
</p>

## ✨ My Thought Process ✨
```
Logic
```

* Given A number (to guess) - generated
* Create an array
* When user clicks button 
* We need to get user-input = guessedNumber
* Compare generated with guessed
* Generated is equal guessed
  * Notify that guess was correct. User wins.
* Generated is gt guessed
  * 'Too low'. Try again.
  * Add guess to array
  * Display prev guesses from array
  * Clear the input
* Generated is lt guessed
  * 'Too high'. Try again.
  * Add guess to array
  * Display prev guesses from array
  * Clear the input

```
UI
```

* Game Title
* place to show error/success message -> notification
* Notification -> to log our prev guesses
* Number input
* Button

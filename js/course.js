// // function consoleStyler(color, background, fontSize, txt) {
// //     var message = "%c" + txt;
// //     var style = `color: ${color};`;
// //     style += `background: ${background};`;
// //     style += `font-size: ${fontSize};`;
// //     console.log(message, style);
// //   }
  
// //   // Call the function with color, background, and font size values
// //   consoleStyler("white", "tomato", "20px", "TOMATO");

  

// // // function consoleStyler() {
// // //     var message = "%c" + "TOMATO";
// // //     var style = `color: ${color};`
// // //     style += `background: ${background};`
// // //     style += `font-size: ${font - size};`
// // //     console.log (message, style)
// // // }

// // // consoleStyler()


// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     // Create the message variable
//     var message = "%c" + txt;

//     // Create the style variable
//     var style = `color: ${color};`;

//     // Update style with background
//     style += `background: ${background};`;

//     // Update style with font-size
//     style += `font-size: ${fontSize};`;

//     // Log the message with the style
//     console.log(message, style);
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     // Create the fontStyle variable
//     var fontStyle = "color: tomato; font-size: 50px";

//     // Check the reason and log appropriate messages
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(`%cReason not recognized`, fontStyle);
//     }
// }

// // Task 3: Run both the consoleStyler and celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');

// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//     // Invoke both functions
//     consoleStyler(color, background, fontSize, txt);
//     celebrateStyler(reason);
// }

// // Test the styleAndCelebrate function
// styleAndCelebrate('#1d5c63', '#ede6db', '40px', 'You did it!', 'champions');



// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log (message, style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font - size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(`%cReason not recognized`, fontStyle);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions

consoleStyler(`#1d5c63`, `#ede6db`, `40px`, `'Congrats!'`);
celebrateStyler(`'birthday'`);

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}
// Call styleAndCelebrate

styleAndCelebrate(`ef7c8e`, `fae8e0`, `30px`, `'You made it!'`, `'champions'`);
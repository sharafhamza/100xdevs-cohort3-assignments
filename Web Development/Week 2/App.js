// Classes

// class Rectangle {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }
//   area() {
//     const area = this.width * this.height;
//     return area;
//   }
// }

// const rect = new Rectangle(2, 5, "blue");
// const area = rect.area();

// console.log(area);

// Promises

// const cart = ["shoes", "pant", "t-shirt"];

// const promise = createOrder(cart);

// promise
//   .then((orderId) => {
//     console.log(orderId);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// function createOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     if (resolve) {
//       resolve(cart);
//     } else {
//       new Error("Data rejected");
//     }
//   });

//   return pr;
// }

setTimeout(() => {
  console.log("hi");
  setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
      console.log("hello there");
    }, 1000);
  }, 1000);
}, 1000);

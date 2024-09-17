class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
    // this.user = user;
    // this.stripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
    // this.paypal.makePayment(this.user, 200 * quantity);
    // this.stripe.makePayment(200 * quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
    // this.paypal.makePayment(this.user, 15 * quantity);
    // this.stripe.makePayment(15 * quantity * 100);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(`${this.user} made payment of ${amountInCents / 100} with Stripe`);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of ${amountInDollars} with Paypal`);
  }
}

const store = new Store(new PaypalPaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(2);

/*Este es creo el mas dificil de entender pero es el mas util,
imaginemos que queremos usar stripe y paypal, pero estos tienen
diferentes reglas para usar su API, y si creamos un unico punto
de procesamiento en donde podamos cmabiar en ambos sin tener que
modificar todo el codigo */

class ElementReader {
    #userInput
    #itemsToRun
    constructor() {
        this.#userInput = "";
        this.#itemsToRun = [];
    }
    #getElementValue() {
        this.#userInput = document.getElementById("test").value;
        return this.#userInput;
    }

    #splitContent() {
        this.#itemsToRun = this.#getElementValue().split("");
        console.log(this.#itemsToRun);
        for (const itemsToRunElement of this.#itemsToRun) {
            eval(itemsToRunElement);
        }

    }

    runCode() {



        //this.#splitContent();
        eval(this.#getElementValue())
    }
}
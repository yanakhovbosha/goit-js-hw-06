class StringBuilder {
    #value;
    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value
    }

    padStart(str) {
        return this.#value = this.#value.padStart(2, str)
    }

    padEnd(str) {
        return this.#value = this.#value.padEnd(3, str)
    }

    padBoth(str) {
        return this.#value = this.#value.padStart(4, str).padEnd(5, str)
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue());
builder.padStart("^");
console.log(builder.getValue());
builder.padEnd("^");
console.log(builder.getValue());
builder.padBoth("=");
console.log(builder.getValue());
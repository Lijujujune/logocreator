class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="100" y="75" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };
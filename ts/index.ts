class Country {
    public name: string;
    public year: any; // anyを使用してみる
    constructor (name: string, year:number) {
        this.name = name;
        this.year = year;
    }
    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
}

const country = new Country('日本', 1000);

const contentsElem = document.getElementById('contents');
if(!!contentsElem) {
    contentsElem.innerText = `${country.getName()} ${country.year}`;
}
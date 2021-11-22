class Tab {
    constructor(name, expandName, expand) {
        this.name = name;
        this.expandName = expandName;
        this.expand = expand;
    }
    getTab() {
        return document.querySelector(`.${this.name}`);
    }
    getTabExpand() {
        return document.querySelector(`.${this.expandName}`);
    }

    tabEventVisibility(add, remove, eventName) {
        this.getTab().addEventListener(add, function () {
            this.classList.add(eventName);
        })
        this.getTab().addEventListener(remove, function () {
            this.classList.remove(eventName);
        })
    }
}

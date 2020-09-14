class AreaItem extends HTMLElement {
    set item(item){
        this._item = item
        this.render()
    }

    render(){
        this.innerHTML = `
        <div class="col s12 m6 l4">
            <div class="card-panel blue-grey darken-1 hoverable">
                <div class="card-content white-text">
                    <b class="card-title">${this._item.name}</b>
                    <p>Country Code : <b>${this._item.countryCode}</b></p>
                    <p>Parent Area : <b>${this._item.parentArea}</b></p>
                </div>
                <div class="card-action">
                    <a href="#" class="cyan-text text-lighten-3">Detail</a>
                </div>
            </div>    
        </div>    
        `;
    }
}
 
customElements.define("area-item", AreaItem);
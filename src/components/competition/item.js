import {check} from '../../db/db'

class CompetitionItem extends HTMLElement {
    async connectedCallback(){
        this._item = this.item
        this.html = await check(this._item.id) ? 
            `<p class="red-text text-lighten-3" style="cursor:pointer" onclick="del(${this._item.id})">Remove from favorite</p>`
         : 
            `<p class="cyan-text text-lighten-3" style="cursor:pointer" onclick="add(${this._item.id},'${this._item.name}')">Add to Favorite</p>`
        

        this.render()
    }

    render(){
        this.innerHTML = `
        <div class="col s12 m6 l4">
            <div class="card-panel blue-grey darken-1 hoverable">
                <div class="card-content white-text">
                    <b class="card-title">${this._item.name}</b>
                    <p>Area : <b>${this._item.area.name}</b></p>
                    <p>Available Seasons : <b> ${this._item.numberOfAvailableSeasons}</p>
                </div>
                <div class="card-action">
                    ${this.html}
                </div>
            </div>    
        </div>    
        `;
    }
}
 
customElements.define("competition-item", CompetitionItem);
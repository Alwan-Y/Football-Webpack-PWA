import {get} from '../db/db'
class FavoritePage extends HTMLElement {
    

    async connectedCallback(){
        const items = await get()
        this.html = items.map(item=>`
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>
                    <button class="btn red" onclick="del(${item.id})">delete</button>
                </td>
            </tr>
        `)

        this.render()
        $(".progress").remove()
    }

    render(){
        this.innerHTML = `
            <div class="row">
                <div class="col s12">
                    <h5>Favorite</h5>
                </div>
            </div>
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
            <div class="row">
                <div class="col s12">
                    <table class="responsive-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
        
                        <tbody>
                            ${this.html}
                        </tbody>
                    </table>
                </div>
            </div>
        `
    }
}
 
customElements.define("favorite-page", FavoritePage);
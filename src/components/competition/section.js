class CompetitionSection extends HTMLElement {
    
    set data(data){
        this._data = data
        this._data.isSection = true
        
        this.render()
        
        const listElement = document.createElement("competition-list")
        listElement.data = this._data

        this.append(listElement)
    }

    render(){
        this.innerHTML = `
            <div class="row">
                <div class="col s12">
                    <h6 class="left">Competition (${this._data.count})</h6>
                    <button class="right btn waves-effect waves-light cyan darken-1">More</btn>
                </div>
            </div>
        `
    }
}
 
customElements.define("competition-section", CompetitionSection);
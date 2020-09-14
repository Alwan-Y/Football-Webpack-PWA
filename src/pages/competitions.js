import {get} from '../api/competition'
class CompetitionsPage extends HTMLElement {
    async connectedCallback(){

        this.render()

        const competitions = await get()
        const competitionList = document.createElement("competition-list");
        competitionList.data = competitions
        this.append(competitionList)

        $(".progress").remove()
    }

    render(){
        this.innerHTML = `
            <div class="row">
                <div class="col s12">
                    <h5>Competitions</h5>
                </div>
            </div>
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        `;
    }
}
 
customElements.define("competitions-page", CompetitionsPage);
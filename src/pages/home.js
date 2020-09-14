import {get as getAreas} from '../api/area'
import {get as getCompetitions} from '../api/competition'
import img from '../assets/2.jpg'

class HomePage extends HTMLElement {
    async connectedCallback(){
        this.render()
        
        const areas = await getAreas()
        const areaSection = document.createElement("area-section")
        areaSection.data = areas
        this.append(areaSection)

        const competitions = await getCompetitions()
        const competitionSection = document.createElement("competition-section")
        competitionSection.data = competitions
        this.append(competitionSection)
        
        $(".progress").remove()
    }

    render(){
        this.innerHTML = `
            <div class="row">
                <div class="col s12">
                    <img class="responsive-img" src="${img}">
                    <h5>Welcome to Football Information</h5>
                    <p>This website is a football information website</p>
                </div>
            </div>
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        `;
    }
}
 
customElements.define("home-page", HomePage);
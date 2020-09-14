class CompetitionList extends HTMLElement {
    
    set data(data){
        this.setAttribute("class","row")

        data.competitions.filter((item,index)=>data.isSection ? index<6 : item).forEach((item)=>{
            const competitionItem = document.createElement("competition-item")
            competitionItem.item = item
            this.append(competitionItem)
        })
    }

}
 
customElements.define("competition-list", CompetitionList);
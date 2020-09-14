class AreaList extends HTMLElement {
    
    set data(data){
        this.setAttribute("class","row")

        data.areas.filter((item,index)=>data.isSection ? index<6 : item).forEach((item)=>{
            const areaItem = document.createElement("area-item")
            areaItem.item = item
            this.append(areaItem)
        })
    }

}
 
customElements.define("area-list", AreaList);
class HeaderComponent extends HTMLElement {
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        <nav class="deep-purple darken-3 nav-extended" role="navigation">
            <div class="container">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Football</a>
                    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    
                    <div>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="#">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
            
                        <ul id="nav-mobile" class="sidenav">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>    
                </div>
                <div class="nav-content">
                    <ul class="tabs tabs-transparent">
                        <li class="tab"><a class="active" href="#home">Home</a></li>
                        <li class="tab"><a href="#competitions">Competitions</a></li>
                        <li class="tab"><a href="#favorite">Favorite</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
}
 
customElements.define("header-component", HeaderComponent);
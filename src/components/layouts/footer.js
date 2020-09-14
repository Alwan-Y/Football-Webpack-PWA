class FooterComponent extends HTMLElement {
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        <footer class="page-footer deep-purple darken-3">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Alwan Yusuf</h5>
              <p class="grey-text text-lighten-4">E-mail : ebisukuru@gmail.com</p>
              <p class="grey-text text-lighten-4">Phone : 085887922750</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Social Media</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/alwan_yusuf/">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © 2020 Alwan Yusuf
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
        `;
    }
}
 
customElements.define("footer-component", FooterComponent);
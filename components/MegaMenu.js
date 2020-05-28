import React, { Component } from 'react'

export class MegaMenu extends Component {
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <a href="#" className="navbar-brand font-weight-bold d-block d-lg-none">MegaMenu</a>
  <button type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
      </button>
  <div id="navbarContent" className="collapse navbar-collapse">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item dropdown megamenu"><a id="megamneu" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold text-uppercase">Mega Menu</a>
        <div aria-labelledby="megamneu" className="dropdown-menu border-0 p-0 m-0">
          <div className="container">
            <div className="row bg-white rounded-0 m-0 shadow-sm">
              <div className="col-lg-7 col-xl-8">
                <div className="p-4">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                      <ul className="list-unstyled">
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0">Unique Features</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                      <ul className="list-unstyled">
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Unique Features</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                      <ul className="list-unstyled">
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Unique Features</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                      <ul className="list-unstyled">
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Unique Features</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4 px-0 d-none d-lg-block" style={{background: 'url(https://res.cloudinary.com/mhmd/image/upload/v1556990826/mega_bmtcdb.png) no-repeat', backgroundSize: 'cover'}}></div>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item"><a href="" className="nav-link font-weight-bold text-uppercase">About</a></li>
      <li className="nav-item"><a href="" className="nav-link font-weight-bold text-uppercase">Services</a></li>
      <li className="nav-item"><a href="" className="nav-link font-weight-bold text-uppercase">Contact</a></li>
    </ul>
  </div>
</nav>

<section className="py-5 text-white">
  <div className="container py-4">
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <h1 className="display-4">Bootstrap 4 megamenu</h1>
        <p className="lead mb-0">A very simple way to create Bootstrap 4 megamneu. </p>
        <p className="lead">Snippet by <a href="https://bootstrapious.com/snippets" className='text-white'><u>Bootstrapious</u></a>. </p>
      </div>
    </div>
    <div className="row pt-5">
      <div className="col-lg-10 mx-auto">
        <p className="lead">Use the default Bootstrap's dropdown menu to hold your megamneu.</p>
        <p className="lead">Set the <code>.dropdown</code> position to <code>static</code> instead of <code>absolute</code>.</p>
        <p className="lead">We use the className <code>.megamenu</code> to hold this <code>static</code> position.</p>
      </div>
    </div>
  </div>
</section>
</>
        )
    }
}

export default MegaMenu

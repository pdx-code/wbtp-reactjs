ReactDOM.render(
  <nav className="navbar navbar-light navbar-fixed-top bg-faded">
    <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
      &#9776;
    </button>
    <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
      <ul className="nav navbar-nav">
        <li className="nav-item active"><a href="#" className="nav-link">Projects</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Actions</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Files</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Discussions</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Tickets</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Time Log</a></li>
      </ul>
    </div>
  </nav>,
  document.getElementById('primaryNavigation')
);

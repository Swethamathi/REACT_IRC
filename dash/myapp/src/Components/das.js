import './Assets/Css/das.css';
const das =() =>
{
    return(
       <>

<nav class="nav">
<ul>
  <li><a href="#" class="logo">
    <img src="https://t3.ftcdn.net/jpg/03/04/90/30/360_F_304903020_Norp4P6o19mbV9p7oOeNPThiNnce3ZHH.jpg"/>
    <span class="nav-item">Admin</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-menorah"></i>
    <span class="nav-item">Dashboard</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-comment"></i>
    <span class="nav-item">Message</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-database"></i>
    <span class="nav-item">Report</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-chart-bar"></i>
    <span class="nav-item">Attendance</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-cog"></i>
    <span class="nav-item">Setting</span>
  </a></li>
  <li><a href="#" class="logout">
    <i class="fas fa-sign-out-alt"></i>
    <span class="nav-item">Log out</span>
  </a></li>
</ul>
</nav>
        </>
    )
}
export default das;
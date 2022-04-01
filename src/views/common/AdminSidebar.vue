<template>
<aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
         </router-link>
      </li><!-- End Dashboard Nav -->
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal-text"></i><span>Employee Management</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <router-link to="/users">
              <i class="bi bi-circle"></i><span>Manage Employee</span>
            </router-link>
          </li>
          <li>
            <router-link to="/users/add">
              <i class="bi bi-circle"></i><span>Create Employee</span>
            </router-link>
          </li>
          <li>
            <a href="forms-editors.html">
              <i class="bi bi-circle"></i><span>Form Editors</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
              <i class="bi bi-circle"></i><span>Form Validation</span>
            </a>
          </li>
        </ul>
      </li><!-- End Forms Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-layout-text-window-reverse"></i><span>Tables</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="tables-general.html">
              <i class="bi bi-circle"></i><span>General Tables</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i class="bi bi-circle"></i><span>Data Tables</span>
            </a>
          </li>
        </ul>
      </li><!-- End Tables Nav -->
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-gem"></i><span>Icons</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <router-link to="/icons">
              <i class="bi bi-circle"></i><span>Site Icons</span>
            </router-link>
          </li>
        </ul>
      </li><!-- End Icons Nav -->

      <li class="nav-heading">Pages</li>

      <li class="nav-item">
        <router-link to="/profile" class="nav-link collapsed">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </router-link>
      </li><!-- End Profile Page Nav -->

      <li class="nav-item">
        <router-link to="/faq" class="nav-link collapsed">
          <i class="bi bi-question-circle"></i>
          <span>F.A.Q</span>
        </router-link>
      </li><!-- End F.A.Q Page Nav -->

      <li class="nav-item">
        <router-link to="/contact" class="nav-link collapsed">
          <i class="bi bi-envelope"></i>
          <span>Contact</span>
        </router-link>
      </li><!-- End Contact Page Nav -->

      <li class="nav-item">
        <router-link to="/register" class="nav-link collapsed">
          <i class="bi bi-card-list"></i>
          <span>Register</span>
        </router-link>
      </li><!-- End Register Page Nav -->

      <li class="nav-item">
        <router-link to="/login" class="nav-link collapsed">
          <i class="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </router-link>
      </li><!-- End Login Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-error-404.html">
          <i class="bi bi-dash-circle"></i>
          <span>Error 404</span>
        </a>
      </li><!-- End Error 404 Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-blank.html">
          <i class="bi bi-file-earmark"></i>
          <span>Blank</span>
        </a>
      </li><!-- End Blank Page Nav -->

    </ul>

  </aside><!-- End Sidebar-->
</template>

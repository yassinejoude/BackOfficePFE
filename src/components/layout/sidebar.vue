<template>
  <div>
    <ul
      style="height:100%"
      class="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center">
        <div class="sidebar-brand-icon">
          <i class="fas fa-tools"></i>
        </div>
        <div class="sidebar-brand-text mx-3" style="color:white">BackOffice</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <router-link style="text-decoration: none; color: inherit;" to="/">
            <span>Dashboard</span>
          </router-link>
        </a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Tables</div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed">
          <i class="fas fa-fw fa-cog"></i>
          <router-link style="text-decoration: none; color: inherit;" to="/commandes">
            <span>Commandes</span>
          </router-link>
        </a>
      </li>

      <!-- Nav Item - Utilities Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed">
          <i class="fas fa-fw fa-wrench"></i>
          <router-link style="text-decoration: none; color: inherit;" to="/lignecoms">
            <span>Lignes de Commande</span>
          </router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed">
          <i class="fas fa-fw fa-wrench"></i>
          <router-link style="text-decoration: none; color: inherit;" to="/menus">
            <span>Menus</span>
          </router-link>
        </a>
      </li>
    </ul>
    <!-- End of Sidebar -->
  </div>
</template>

<script>
export default {};
</script>


<style>
</style>

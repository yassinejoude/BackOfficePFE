<template>
  <div id="app">
    <div id="page-top">
      <!-- Page Wrapper -->
      <div id="wrapper">
        <!-- Sidebar -->
        <Sidebar></Sidebar>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
          <!-- Main Content -->
          <div id="content">
            <!-- Topbar -->
            <toolbar><h1 class="h1 mb-0 text-gray-800 font-weight-bold">Lignes des commandes</h1></toolbar>
            <!-- Begin Page Content -->
            <div class="container-fluid">
              <!-- global statis Row -->
              <Glbstatis></Glbstatis>                          
              <LigneCom></LigneCom>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/layout/sidebar";
import Toolbar from "../../components/layout/toolbar";
import Glbstatis from "../home/glbstatis";
import LigneCom from "../ligneCom/ligneComTable"

export default {
  data(){
    return{
id:this.$routes.params.id
    }
  },
  components: {
    Sidebar,
    Toolbar,
    Glbstatis,
    LigneCom
    
  }
};
</script>

<style>
@import "../../../css/sb-admin-2.css";
@import "../../../css/sb-admin-2.min.css";
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>

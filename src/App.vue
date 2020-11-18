<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
.rounded-xl {
    border-radius: 1rem
}
html,
body,
#app,
.full {
  height: 100%;
  min-height: 100%;
  font-size: 14px !important;
}

img {
  vertical-align: middle;
  max-width: 100%;
}

.ag-header,
.ag-footer {
  /* flex-basis: 70px; */
  width: 100%;
  opacity: 0.8;
  height: 70px;
  color: #fff;
}

.ag-main {
  width: 119%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: start;
  overflow: hidden;
}

.ag-rounded {
  border-radius: 19px !important;
}

.ag-href {
  color: #fff;
  cursor: pointer;
}

.ag-href:hover {
  color: #fff;
}
</style>

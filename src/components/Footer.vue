<template>

<footer class="footer">
    <div class="container">
    <div class="footer-box">
      <router-link to="/" class="header-logo logo">
        <img src="../assets/images/image logo.png" alt="logo">

        </router-link>
        
        <div class="footer-nav">
                        <ul>
                            <li>Ульяновск</li>
                            <li>УлГТУ</li>
                        </ul>
                    </div>
                    
        
    </div>
    </div>
    </footer>

</template>

<script>
export default {

}
</script>

<style scoped>


.footer {
  display: flex;
  align-items: center;
  min-height: 156px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.footer-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
}

.footer-nav {
  flex-grow: 1;
}

.footer-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-nav ul li {
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}


.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}

</style>
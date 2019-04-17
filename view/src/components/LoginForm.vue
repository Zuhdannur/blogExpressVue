<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-1">
              <v-toolbar style="background-color: #2196F3;color: white">
                <img src="../assets/blog_logo.png" style="max-height: 40px">
                <v-toolbar-title>Blogger</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text style="background-color: white">
                <v-form>
                  <v-text-field name="login" label="Username" type="text"></v-text-field>
                  <v-text-field name="login" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn style="background-color: #1976D2;color: white">Login</v-btn>
              </v-card-actions>
              <v-spacer></v-spacer>
              <p class="text-md-center caption  pb-2" style="color: gray">Does't have accout? Register here</p>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
	<div class="modal fade show" id="edit_user_modal" :style="{ '--display': child_style }" aria-modal="true" data-backdrop="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">Edit Employee</h5>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
	      </div>
	      <form name ="edit_user_frm" id="edit_user_frm" @submit.prevent="update_user()" novalidate>              
	      <div class="modal-body">
              <div class="row mb-3">
                <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                <div class="col-md-8 col-lg-9">
                  <input name="name" type="text" class="form-control" id="fullName" v-model.trim="user.name" >
                  <div v-for="(error, index) of v$.user.name.$errors" :key="index" class="invalid-feedback">{{capitalizeFirstLetter(error.$property)}} {{ error.$message }}</div>
                </div>
                 <input name="user_id" type="hidden" class="form-control" id="user_id" v-model="user.id">
              </div>              
              <div class="row mb-3">
                <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
                <div class="col-md-8 col-lg-9">
                  <textarea name="about" class="form-control" id="about" style="height: 100px">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                </div>
              </div>

              <div class="row mb-3">
                <label for="username" class="col-md-4 col-lg-3 col-form-label">Username</label>
                <div class="col-md-8 col-lg-9">
                  <input name="username" type="text" class="form-control" id="username"  v-model.trim="user.username"  >
                  <div v-for="(error, index) of v$.user.username.$errors" :key="index" class="invalid-feedback">{{capitalizeFirstLetter(error.$property)}} {{ error.$message }}</div>
                </div>
              </div>

              <div class="row mb-3">
                <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                <div class="col-md-8 col-lg-9">
                  <input name="phone" type="text" class="form-control" id="Phone" v-model="user.phone">
                  <div v-for="(error, index) of v$.user.phone.$errors" :key="index" class="invalid-feedback">{{capitalizeFirstLetter(error.$property)}} {{ error.$message }}</div>
                </div>
              </div>

              <div class="row mb-3">
                <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                <div class="col-md-8 col-lg-9">
                  <input name="email" type="email" class="form-control" id="Email" v-model="user.email">
                  <div v-for="(error, index) of v$.user.email.$errors" :key="index" class="invalid-feedback">{{capitalizeFirstLetter(error.$property)}} {{ error.$message }}</div>
                </div>
              </div>

              <div class="row mb-3">
                <label for="City" class="col-md-4 col-lg-3 col-form-label">City</label>
                <div class="col-md-8 col-lg-9">
                  <input name="city" type="text" class="form-control" id="City" v-model="user.city">
                  <div v-for="(error, index) of v$.user.city.$errors" :key="index" class="invalid-feedback">{{capitalizeFirstLetter(error.$property)}} {{ error.$message }}</div>
                </div>
              </div>

              <div class="row mb-3">
                <label for="Street" class="col-md-4 col-lg-3 col-form-label">Street</label>
                <div class="col-md-8 col-lg-9">
                  <input name="street" type="text" class="form-control" id="Street" v-model="user.street">
                  <div v-for="(error, index) of v$.user.street.$errors" :key="index" class="invalid-feedback">{{capitalizeFirstLetter(error.$property)}} {{ error.$message }}</div>
                </div>
              </div>

              <div class="row mb-3">
                <label for="zipcode" class="col-md-4 col-lg-3 col-form-label">zipcode</label>
                <div class="col-md-8 col-lg-9">
                  <input name="zipcode" type="text" class="form-control" id="zipcode" v-model="user.zipcode">
                  <div v-for="(error, index) of v$.user.zipcode.$errors" :key="index" class="invalid-feedback">{{capitalizeFirstLetter(error.$property)}} {{ error.$message }}</div>
                </div>
              </div>

              <div class="row mb-3">
                <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                <div class="col-md-8 col-lg-9">
                  <input name="twitter" type="text" class="form-control" id="Twitter" value="https://twitter.com/#">
                </div>
              </div>

              <div class="row mb-3">
                <label for="Facebook" class="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                <div class="col-md-8 col-lg-9">
                  <input name="facebook" type="text" class="form-control" id="Facebook" value="https://facebook.com/#">
                </div>
              </div>

              <div class="row mb-3">
                <label for="Instagram" class="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                <div class="col-md-8 col-lg-9">
                  <input name="instagram" type="text" class="form-control" id="Instagram" value="https://instagram.com/#">
                </div>
              </div>

              <div class="row mb-3">
                <label for="Linkedin" class="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                <div class="col-md-8 col-lg-9">
                  <input name="linkedin" type="text" class="form-control" id="Linkedin" value="https://linkedin.com/#">
                </div>
              </div>            	 
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('close')">Close</button>
	        <input type="submit" class="btn btn-primary" value="Save changes">
	      </div>
	      </form>
	    </div>
	  </div>
	</div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'AdminUserEdit',
    setup () {
      return { v$: useVuelidate() }
    },
    data(){
    	return{
    		user:{
	    		id:"",
	    		name:"",
	    		username:"",
	    		phone:"",
	    		email:"",
	    		city:"",
	    		street:"",
	    		zipcode:"",
	    	}
    	};
    },
    validations(){
      return{
         user:{
            name: {required,$lazy: true},
            username: {required,$lazy: true},
            phone: {required,$lazy: true},
            email: {required,email,$lazy: true},
            city: {required,$lazy: true},
            street: {required,$lazy: true},
            zipcode: {required,integer:true,$lazy: true},            
         }
       };
    },
    components: {},
    props:['child_style','user_edit_record'],    
    updated() {
    	let user_info=JSON.parse(JSON.stringify(this.user_edit_record));   
    },
    methods:{
        ...mapMutations(['EDIT_USER_RECORDS',]),
    		update_user(){
    			 // e.preventDefault(); 
          this.v$.$touch();
          if (this.v$.$error){
            return;
          }else{  
    			 let user_update_info=JSON.parse(JSON.stringify(this.user));
           let user_data=this.$store.state.user_records;
           let user_id=this.user.id;        
      			user_data.map((user, index) => {
               if(user.id === user_id){
                user_data[index] = user_update_info;    
               }             
               return user
              });
            this.EDIT_USER_RECORDS(user_data);
            // console.log(this.$store.state.user_records);
          }
            
    		},
        capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
    },
    watch :{ 
      	user_edit_record: {
	      immediate: true,
	      handler (newVal, oldVal) {
	      	// console.log(newVal);
	      	this.user['id'] = newVal.id;
	        this.user['name'] = newVal.name;
	        this.user['username'] = newVal.username;
	        this.user['phone'] = newVal.phone;
	        this.user['email'] = newVal.email;
	        this.user['city'] = newVal.city;
	        this.user['street'] = newVal.street;
	        this.user['zipcode'] = newVal.zipcode;
	      }
	    },
    }
    
}
</script>
<style scoped>
  #edit_user_modal {
    display: var(--display);
    /*max-width: 80%;*/
  }
.modal-content { 
    /* 80% of window height */
 		max-width: 80%;
    height: auto; 
    background-color:#BBD6EC; 
} 
.modal-dialog {
    max-width: 60%;
    margin: 1.75rem auto;
}      
 
.modal-header { 
    background-color: #337AB7; 
    padding:16px 16px; 
    color:#FFF; 
    border-bottom:2px dashed #337AB7; 
 }
 .invalid-feedback {
    display: block; 
    width: 100%;
    margin-top: .25rem;
    font-size: .875em;
    color: #dc3545;
}
</style>
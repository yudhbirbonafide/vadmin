<template>
<section class="section">
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Employee List</h5>

          <!-- Table with stripped rows -->
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">City</th>
                <th scope="col">Zipcode</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in userlist" v-if="render_flag" data-key="item.id">
                <td scope="row">{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.username}}</td>
                <td>{{item.email}}</td>
                <td>{{item.phone}}</td>
                <td>{{item.city}}</td>
                <td>{{item.zipcode}}</td>
                <td><a @click="edit_user(item.id)"><i class="bi bi-pencil-square"></i></a><a href=""><i class="bi bi-trash"></i></a></td>                
              </tr>
              <tr v-if="!render_flag">
                  <td colspan="7">No Record Available.</td>          
              </tr>              
            </tbody>
          </table>
          <!-- End Table with stripped rows -->

        </div>
      </div> <!-- End of cards -->

    </div>
  </div>
  <AdminUserEdit v-if="active_modal" @close="close_modal" :child_style ="activate_style" :user_edit_record="user_edit_record"></AdminUserEdit>
  <div class="modal-backdrop fade show" v-if="active_modal"></div>
</section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import { Userlist } from '../../services/request'
import AdminUserEdit from './user/AdminUserEdit'
export default {
    name: 'AdminUserManagement',
    components: { 
      AdminUserEdit
    },
    data(){
        return{
            userlist:null,
            render_flag:false,
            active_modal:false,
            activate_style:'none',
            user_edit_record:null,

        }
    },
    mounted(){
      this.load_userInfo();
      // console.log(this.$store.state.user_records);
    },
    methods:{
        ...mapMutations([
            'USER_RECORDS',
        ]),
        async load_userInfo(){
          let loader = this.$loading.show();
          let userinfo=await Userlist().then((response)=>{ return response.data}).catch((error)=> { console.log(error)});
          // console.log(typeof userinfo)
          if(Object.keys(userinfo).length !== 0){
            loader.hide();
            this.render_flag=true;
            let userinfoProperties =userinfo.map(user => {
              let properties = {
                id:user.id,
                name:user.name.firstname+' '+user.name.lastname,
                username:user.username,
                phone:user.phone,
                email:user.email,
                city:user.address.city,
                street:user.address.street,
                zipcode:user.address.zipcode,
               };
               return properties;

            });
            this.userlist=userinfoProperties;
            this.USER_RECORDS(this.userlist)
            // console.log(this.$store.state.user_records);
          }
        },
        delete_user(id){
          console.log(id);
          let user_data=this.$store.state.user_records;
          var result = user_data.filter(function(v) {
              return v.id === id; // Filter out the appropriate one
          })[0];
          
        },
        edit_user(id){
          let user_data=this.$store.state.user_records;
          var result = user_data.filter(function(v) {
              return v.id === id; // Filter out the appropriate one
          })[0];
          this.active_modal=true;
          this.activate_style='block';
          this.user_edit_record=result;
          // console.log(this.$refs);
          // $('#edit_user_modal').modal('show')
          // this.$refs.edit_user_modal.modal('show');
          // this.$refs['edit_user_modal'].show()
          // this.$root.$emit("bv::show::modal", "#edit_user_modal");

        },
        close_modal(){
          this.active_modal=false;
          this.activate_style='none';
          return false;
          // $(this.$refs.edit_user_modal).modal('hide');
        }
    }
  }
</script>

import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {



    state: () => {
        return {
        
       
          name: 'Tobi',
          isAdmin: true,
        }
      },

      getters: {


        name: state => state.name,
        isAdmin : state => state.isAdmin
  
      },

  

})

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'
import MyOrder from '../components/MyOrder.vue'
import ProductDetail from '../components/ProductDetail.vue'
import Account from '../components/Account.vue'
import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import store from '../store'
import { useToast } from "vue-toastification";

const routes = [
		
	{
		path: '/',
		name: 'home',
		component: Home

	},
	{
		path: '/product-details/:slug',
		name: 'productDetail',
		component: ProductDetail

	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart
	},
	{
		path: '/register',
		name: 'register',
		component: Register,
		meta:{

			onlyAfterLogoutAccess:true
		}
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta:{

			onlyAfterLogoutAccess:true,
		}
	},
	{
		path: '/checkout',
		name: 'checkout',
		component: Checkout,
      //   beforeEnter: (to, from, next) => {
    	
		    // if (!store.getters['isAuthenticated']) {

		    //     useToast().error('Please Login to procced')
	     //        router.push({ name:'login'});

		    // } else if (store.getters['cartItems'].data == ""){

	     //        router.push({ name:'cart'});

	     //    }else{

	     //    	next()
	     //    	return;
	     //    }
		   
      //   }
	},
	{
		path: '/my-orders',
		name: 'myorders',
		component: MyOrder,
        beforeEnter: (to, from, next) => {
    	
		    if (!store.getters['isAuthenticated']) {

		        useToast().error('Please Login to procced')
	            router.push({ name:'login'});

		    }else{

	        	next()
	        	return;
	        }
		   
        }
	},
	{
		path: '/my-account',
		name: 'myaccount',
		component: Account,
        beforeEnter: (to, from, next) => {
    	
		    if (!store.getters['isAuthenticated']) {

		        useToast().error('Please Login to procced')
	            router.push({ name:'login'});

		    }else{

	        	next()
	        	return;
	        }
		   
        }
	}
];

const router = createRouter({

	history: createWebHistory(),
	routes 
})

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.onlyAfterLogoutAccess) ) {

        if (!store.getters['isAuthenticated']) {

            next();
            return;
        } else {
            router.push({ name:'home'});
        }
        
    }
    else {
        next();
    }
});

export default router
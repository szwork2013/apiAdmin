import APIManager from '../components/APIManager'
import Edit from '../components/rearend/apimanager/Edit'
import Deploy from '../components/rearend/apimanager/Deploy'
const APIManagerRoute = {
    path: "apimanager",
    component: APIManager,
    childRoutes: [
        {
            path: "edit",
            component: Edit
        },{
            path: 'deploy',
            component: Deploy
        }
    ]
}

export default APIManagerRoute;
export default class AuthService {
    constructor(domain){
        this.domain = domain || 'http://localhost:8080'
        this.fetch = this.fetch.bind(this)
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }

    login(username, password) {
        //Get a token
        return this.fetch(`${this.domain}/admin/signin`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => {
                //set token on client local storage
                this.setToken(res.token)
                return this.fetch(`${this.domain}/admin`,{
                    method: 'GET
                })
            }).then(res => {
                //set profile to admin(dickbutt) on local storage
                this.setProfile(res)
                return Promise.resolve(res)
            })
    }

    loggedIn(){
        //checks if there is a saved token and if it is still valid
        const token = this.getToken();
        return !!token && !isTokenExpired(token)  //handwaiving
    }

    setProfile(profile){
        //saves profile data to localStorage
        localStorage.setItem('profile', JSON.stringify(profile))
    }
}

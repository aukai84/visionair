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
                    method: 'GET'
                })
            }).then(res => {
                //set profile to admin(dickbutt) on local storage
                console.log('profile res', res)
                this.setProfile(res)
                return Promise.resolve(res)
            })
    }

    loggedIn(){
        //checks if there is a saved token and if it is still valid
        const token = this.getToken();
        return !!token //handwaiving
    }

    setProfile(profile){
        //saves profile data to localStorage
        localStorage.setItem('profile', JSON.stringify({profile}))
    }

    getProfile(){
        //retrives current profile data from localStorage
        const profile = localStorage.getItem('profile')
        return profile ? JSON.parse(localStorage.profile) : {}
    }

    setToken(token){
        //saves admin token to localStorage
        localStorage.setItem('token', token)
    }

    getToken(){
        //retrieve token from localStorage
        return localStorage.getItem('token')
    }

    logout(){
        //clear user token and profile from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
        console.log('logged out...')
    }

    _checkStatus(response){
        //raises error if response is not successful
        if(response.status >= 200 && response.status < 300) {
            return response
        } else {
            let error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    fetch(url, options){
        //perform api call sending required auth headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if(this.loggedIn()){
            headers.authorization = this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }
}

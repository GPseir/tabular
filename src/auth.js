class Auth {
    constructor() {
        this.authenticated = false
        this.clicked = false
        this.id = null
        this.value = ''
    }

    login(value, callback) {
        this.authenticated = true
        this.value = value

        callback()
    }

    logout(callback) {
        this.authenticated = false
        this.value = ''
        callback()
    }

    clickItem(id, cb) {
        this.clicked = true
        this.id = id - 1
        cb()
    }

    goBack(cb) {
        this.clicked = false
        this.id = null
        cb()
    }

    isAuth() {
        return this.authenticated
    }
    isClicked() {
        return this.clicked
    }
}

export default new Auth();
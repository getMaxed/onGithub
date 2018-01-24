class Github {
    constructor() {
        this.client_id = '1ab9c378c5422f89c1a9';
        this.client_secret = '565a2326ddce9c9f6c42312cc44dd2c181034bb8';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile

        }
    }
}





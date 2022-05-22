import axios from 'axios';

class UserService {

    async getCurrentUser(username) {
        const {
            data: { data },
        } = await axios.get(`https://api.github.com/users/${username}`, {
            username: username,
        }

        );
        return data;
    }
}

export default new UserService()
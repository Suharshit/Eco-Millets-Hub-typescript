import { Client, Account, ID } from "appwrite";
import conf from "../config/conf";


type createAccount = {
    email: string,
    password: string,
    name: string,
}

type loginUser = {
    email: string,
    password: string,
}

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwrite_endpoint)
            .setProject(conf.appwrite_project_id);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name}: createAccount) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.loginUser({email,password});
            }

        } catch (error) {
            // console.error(error);
            console.log("errror is ocurred.")
        }
    }

    async loginUser({email, password}: loginUser) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error(error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error(error);
        }

        return null;
    }

    async logout() { 
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error(error);
        }
    }
}

const authservice = new AuthService();

export default authservice
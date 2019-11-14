const db = require("./conn.js");

class Blogs {
    constructor (id, title, user_id, content){
        this.id = id;
        this.title = title;
        this.user_id = user_id;
        this.content = content;
    }

    static async getBlogs() {
        try {
            const response = await db.any(`
            SELECT * FROM blogs
            `);
            
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async getBlogId(id) {
        try {
            const response = await db.one(`
            SELECT * FROM blogs
            WHERE id = ${id};
            `);

            return response;
        }catch(err) {
            return err.message;
        }
    }

    static async getById(user_id) {
        try {
            const response = await db.one(`
            SELECT * FROM blogs 
            WHERE user_id = ${user_id};
            `);
            
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async removePost(id) {
        try {
            const response = await db.one(`
            DELETE * FROM blogs 
            WHERE id = ${id};
            `);
            
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async addPost() {
        try {
            const response = await db.one(`
            INSERT INTO blogs
            (id, title, user_id, content)
            VALUES ($1, $2, $3, $4);
            `);
            
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async updatePost(content) {
        try {
            const response = await db.one(`
            UPDATE blogs
            SET content = ${content};
            `);
            
            return response;
        } catch(err) {
            return err.message;
        }
    }
}

module.exports = Blogs;